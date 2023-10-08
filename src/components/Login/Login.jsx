import Auth from '../Auth/Auth.jsx';
import { loginConfig } from '../../utils/const';

function Login() {
  return (
    <section className="login">
      <Auth settings={loginConfig} />
    </section>
  )
}

export default Login;