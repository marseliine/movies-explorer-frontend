import React from 'react';

import { regexName, regexEmail, regexPassword } from '../utils/const';

export function useFormValidator(initialValues = {}) {
  const [values, setValues] = React.useState(initialValues);
  const [isValid, setIsValid] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  function validateField(name, value) {
    switch (name) {
      case 'name':
      if (!regexName.test(value)) {
        return 'Для ввода используйте: латиницу, кирилицу, дефис, пробел';
      }
      if (value.length < 2) {
        return 'Имя должно содержать как минимум 2 символа';
      }
      break;
      case 'email':
        if (!regexEmail.test(value)) {
          return 'Укажите корректный адрес почты';
        }
        break;
        case 'password':
          if (value.length < 8) {
            return `Пароль должен содержать минимум 8 символов, сейчас ${value.length}`;
          }
          if (!regexPassword.test(value)) {
            return 'Для ввода используйте цифры, знак подчеркивания, заглавные и строчные латинские буквы';
          }
          break;
        
      default:
        break;
    }
    return '';
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    const errorMessage = validateField(name, value);
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  }

  return { values, isValid, setIsValid, errors, handleChange, setValues };
}