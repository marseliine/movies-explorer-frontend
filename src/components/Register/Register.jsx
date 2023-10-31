import React from "react";
import AuthForm from '../AuthForm/AuthForm.jsx';
import { registerConfig } from '../../utils/const';

function Register({ onRegister, requestError }) {

  const handleSubmit = async (values) => {
    try {
      const response = await onRegister(values.name, values.email, values.password);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <section className="register">
      <AuthForm settings={registerConfig} onSubmit={handleSubmit} requestError={requestError} />
    </section>
  );
}

export default Register;