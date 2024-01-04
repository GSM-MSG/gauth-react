import Logo from '../asset/Logo'
import '../style/buttonStyle.css'
import BtnStyle from '../type/BtnStyle'

interface Prop extends BtnStyle {
  onClick: () => void
}

const Button = ({ rounded, theme, text, onClick }: Prop) => {
  return (
    <button
      style={{
        borderRadius: rounded === 'lg' ? '0.5rem' : '2rem',
      }}
      className={`gauth-signin-btn gauth-signin-btn-${theme}`}
      onClick={onClick}
    >
      <Logo
        color={theme === 'default' ? 'var(--gauth-white)' : 'var(--gauth-blue)'}
      />{' '}
      {text} with GAuth
    </button>
  )
}

export default Button
