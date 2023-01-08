import { ReactNode, createContext, useState, useContext } from 'react'
import GauthServiceDataType from '../type/GauthServiceDataType'

const GauthContext = createContext<GauthServiceDataType | null>(null)

interface Prop {
  children: ReactNode
  gauthServiceData: GauthServiceDataType
}

export const GauthProvider = ({ children, gauthServiceData }: Prop) => {
  const [data, _] = useState<GauthServiceDataType>(gauthServiceData)

  return <GauthContext.Provider value={data}>{children}</GauthContext.Provider>
}

export const useGauthData = () => {
  const data = useContext(GauthContext)
  if (!data) throw new Error('Not found Gauth data')

  return data
}
