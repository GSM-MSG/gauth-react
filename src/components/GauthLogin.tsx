import React from 'react'
import Button from './Button'

interface Prop {
  children?: any // TODO any 지우기
}

const GauthLogin = ({ children }: Prop) => {
  if (!children) return <Button />

  const copyElement = React.cloneElement(children, {
    onClick: () => console.log('hello'),
  })
  return <>{copyElement}</>
}

export default GauthLogin
