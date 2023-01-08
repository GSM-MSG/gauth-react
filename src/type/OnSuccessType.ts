import UserType from './UserType'

type OnSuccessType = (
  user: UserType,
  accessToken: string,
  refreshToken: string
) => void

export default OnSuccessType
