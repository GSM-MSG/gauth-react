import GauthServiceDataType from './GauthServiceDataType'

interface GetTokenParamType extends GauthServiceDataType {
  code: string
}

export default GetTokenParamType
