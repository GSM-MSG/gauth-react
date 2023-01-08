import GetTokenParamType from '../type/GetTokenParamType'
import TokensType from '../type/TokensType'
import UserType from '../type/UserType'
import serverUrl from './serverUrl'

class GauthApi {
  async getTokens(data: GetTokenParamType): Promise<TokensType> {
    const res = await fetch(`${serverUrl}/oauth/token`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return res.json()
  }

  async refreshToken(refreshToken: string): Promise<TokensType> {
    const res = await fetch(`${serverUrl}/oauth/token`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        refreshToken: `Bearer ${refreshToken}`,
      },
    })

    return res.json()
  }

  async getUser(accessToken: string): Promise<UserType> {
    const res = await fetch(`${serverUrl}/oauth/token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return res.json()
  }
}

export default GauthApi
