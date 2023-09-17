import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from '../../hooks/useValidation';
import find from '../../images/icons/find.svg';
import './SearchForm.css';

function SearchForm() {
  const {
    value,
    handleChange,
    error,
    isValid,
  } = useValidation();

  const [inputText, setInputText] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // код сабмита
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          className={`search-form__input ${error.search ? 'search-form__input-error' : ''}`}
          type="text"
          placeholder="Фильм"
          name="search"
          minLength={2}
          value={value.search || ''}
          onChange={handleChange}
          required
          autoFocus
        />
        <button
          // className={`button-hover search-form__button ${values.search ? 'search-form__button-active' : ''}`}
          className='button-hover search-form__button'
          type="submit"
          disabled={!isValid}
        >
          {/* <img className='search-form__button_image' alt='blue round button' src={find} /> */}
        </button>
      </div>
      {error.search && <span className="search-form__error">{error.search}</span>}
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;

