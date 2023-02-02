import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import GauthServiceDataType from '../type/GauthServiceDataType'
import OnSuccessType from '../type/OnSuccessType'

const GauthContext = createContext<GauthServiceDataType | null>(null)

interface Prop extends GauthServiceDataType {
  children: ReactNode
  redirectLocation?: string
  onSuccess: OnSuccessType
}

export const GauthProvider = ({
  children,
  onSuccess,
  redirectLocation,
  ...gauthServiceData
}: Prop) => {
  const [data] = useState<GauthServiceDataType>(gauthServiceData)

  useEffect(() => {
    const { location } = window
    if (
      !data ||
      data.redirectUri !==
        location.origin + (location.pathname === '/' ? '' : location.pathname)
    )
      return

    const code = location.search.split('?code=')[1]

    onSuccess(code)

    if (redirectLocation) window.location.href = redirectLocation
  }, [])

  return <GauthContext.Provider value={data}>{children}</GauthContext.Provider>
}

export const useGauthData = () => {
  const data = useContext(GauthContext)
  if (!data) throw new Error('Not found Gauth data')

  return data
}
