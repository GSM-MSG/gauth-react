import React from 'react'
import BtnStyle from '../type/BtnStyle'
import Button from './Button'

interface Prop extends BtnStyle {
  children?: any // TODO any 지우기
}

const GauthLogin = ({
  children,
  rounded = 'lg',
  theme = 'default',
  text = 'Sign in',
}: Prop) => {
  if (!children) return <Button rounded={rounded} theme={theme} text={text} />

  const copyElement = React.cloneElement(React.Children.only(children), {
    onClick: () => console.log('hello'),
  })
  return <>{copyElement}</>
}

export default GauthLogin
