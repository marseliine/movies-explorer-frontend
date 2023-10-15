import AuthForm from '../AuthForm/AuthForm.jsx';
import React  from "react";
import { loginConfig } from '../../utils/const';

function Login({ onLogin, requestError }) {

  const handleSubmit = async (values) => {
    try {
      const response = await onLogin(values.email, values.password);
      return response;
    } catch (error) {
      console.log('error in Login.js ', error);
      return Promise.reject(error);
    }
  };

  return (
    <section className="login">
      <AuthForm
        settings={loginConfig}
        onSubmit={handleSubmit}
        requestError={requestError}
      />
    </section>
  )
}

export default Login;
