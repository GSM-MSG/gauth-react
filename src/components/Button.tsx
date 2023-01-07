import Logo from '../asset/Logo'
import '../style/buttonStyle.css'

const Button = () => {
  return (
    <button className='gauth-signin-btn'>
      <Logo color='#2E80CC' /> Sign in with GAuth
    </button>
  )
}

export default Button
