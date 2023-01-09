import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import GauthServiceDataType from '../type/GauthServiceDataType'
import OnSuccessType from '../type/OnSuccessType'
import GauthApi from '../util/GauthApi'

const GauthContext = createContext<GauthServiceDataType | null>(null)

const gauthApi = new GauthApi()

interface Prop extends GauthServiceDataType {
  children: ReactNode
  successRedirectLocation?: string
  failedRedirectLocation?: string
  onSuccess: OnSuccessType
}

export const GauthProvider = ({
  children,
  onSuccess,
  successRedirectLocation,
  failedRedirectLocation,
  ...gauthServiceData
}: Prop) => {
  const [data, _] = useState<GauthServiceDataType>(gauthServiceData)

  useEffect(() => {
    const { location } = window
    if (
      !data ||
      data.redirectUri !==
        location.origin + (location.pathname === '/' ? '' : location.pathname)
    )
      return

    const code = location.search.split('?code=')[1]

    ;(async () => {
      try {
        const { accessToken, refreshToken } = await gauthApi.getTokens({
          ...data,
          code,
        })
        const user = await gauthApi.getUser(accessToken)

        onSuccess(user, accessToken, refreshToken)

        if (successRedirectLocation)
          window.location.href = successRedirectLocation
      } catch (e) {
        console.log(e)
        if (failedRedirectLocation)
          window.location.href = failedRedirectLocation
      }
    })()
  }, [])

  return <GauthContext.Provider value={data}>{children}</GauthContext.Provider>
}

export const useGauthData = () => {
  const data = useContext(GauthContext)
  if (!data) throw new Error('Not found Gauth data')

  return data
}
