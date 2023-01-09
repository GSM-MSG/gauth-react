import React from 'react'
import { useGauthData } from '../store/GauthContext'
import BtnStyle from '../type/BtnStyle'
import serverUrl from '../util/serverUrl'
import Button from './Button'

interface Prop extends BtnStyle {
  children?: any // TODO any 지우기
}

const GauthLoginButton = ({
  children,
  rounded = 'lg',
  theme = 'default',
  text = 'Sign in',
}: Prop) => {
  const data = useGauthData()
  const onClick = () =>
    (window.location.href = `${serverUrl}/login?client_id=${data.clientId}&redirect_url=${data.redirectUri}`)

  if (!children)
    return (
      <Button rounded={rounded} theme={theme} text={text} onClick={onClick} />
    )

  const copyElement = React.cloneElement(React.Children.only(children), {
    onClick,
  })
  return <>{copyElement}</>
}

export default React.memo(GauthLoginButton)
