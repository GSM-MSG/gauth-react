import { useEffect, useState } from 'react'
import Logo from '../asset/Logo'
import '../style/buttonStyle.css'
import BtnStyle from '../type/BtnStyle'

interface Prop extends BtnStyle {
  onClick: () => void
}

const Button = ({ rounded, theme, text, onClick }: Prop) => {
  const [styles, setStyles] = useState<React.CSSProperties>({})

  useEffect(() => {
    if (theme === 'white')
      setStyles({
        background: 'white',
        color: '#2E80CC',
      })
    else if (theme === 'black')
      setStyles({
        background: 'white',
        color: '#000',
        border: '1px solid #000',
      })
    else setStyles({})
  }, [])

  return (
    <button
      style={{ borderRadius: rounded === 'lg' ? '0.5rem' : '2rem', ...styles }}
      className='gauth-signin-btn'
      onClick={onClick}
    >
      <Logo color={styles?.color || '#2E80CC'} /> {text} with GAuth
    </button>
  )
}

export default Button
