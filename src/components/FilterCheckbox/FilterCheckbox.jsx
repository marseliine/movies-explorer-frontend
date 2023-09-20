import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {


  return (
	<div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input className="filter-checkbox__input" type="checkbox" />
        <span className="filter-checkbox__slider round"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
