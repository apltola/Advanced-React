import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = value ? parseInt(value) : '';
    } else if (type === 'file') {
      [value] = e.target.files;
      console.log('image file -> ', value);
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.entries(inputs).map(([key, value]) => [key, '']);
    const clearedObject = Object.fromEntries(blankState);
    setInputs(clearedObject);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
