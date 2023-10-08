import Auth from '../Auth/Auth.jsx';
import { registerConfig } from '../../utils/const';

function Register() {
  return (
    <section className="register">
      <Auth settings={registerConfig} />
    </section>
  )
}

export default Register;