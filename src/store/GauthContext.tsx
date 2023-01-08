import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import GauthServiceDataType from '../type/GauthServiceDataType'

const GauthContext = createContext<GauthServiceDataType | null>(null)

interface Prop extends GauthServiceDataType {
  children: ReactNode
}

export const GauthProvider = ({ children, ...gauthServiceData }: Prop) => {
  const [data, _] = useState<GauthServiceDataType>(gauthServiceData)

  useEffect(() => {
    const { location } = window
    if (!data || data.redirectUri !== location.origin + location.pathname)
      return

    const code = location.search.split('?code=')[1]
    console.log(code)
  }, [])

  return <GauthContext.Provider value={data}>{children}</GauthContext.Provider>
}

export const useGauthData = () => {
  const data = useContext(GauthContext)
  if (!data) throw new Error('Not found Gauth data')

  return data
}
