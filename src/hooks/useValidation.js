import { useState, useCallback } from 'react';

function useValidation() {
	const [value, setValue] = useState({});
	const [error, setError] = useState({});
	const [isValid, setIsValid] = useState(true);

	const handleChange = (event) => {
		const { name, value } = event.target
		setValue({ ...value, [name]: value });
		setError({ ...error, [name]: event.target.validationMessage });
		setIsValid(event.target.closest('form').checkValidity());
	};

	const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
		setValue(newValues);
		setError(newErrors);
		setIsValid(newIsValid);
	}, [setValue, setError, setIsValid]);

	return { value, handleChange, error, isValid, resetForm, setValue, setIsValid };
}

export default useValidation;