import { useContext, useState, useEffect } from "react";
import { FormContext } from "../contextAPI/FormContext";
import Input from "../components/Input";
import FormHeader from "../components/FormHeader";
import { inputs } from "../data/data";

const validationRegex = {
  text: /[A-Za-zА-Яа-яёЁ]{1,20}\-?[A-Za-zА-Яа-яёЁ]{1,20}/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  tel: /^[\+\d]?(?:[\d-.\s()]*)$/,
};

export default function FormPersonal() {
  const { state, dispatch } = useContext(FormContext);

  const initialErrors = {};
  inputs.forEach((input) => {
    initialErrors[input.name] = {
      isError: !state[input.name].match(validationRegex[input.type]),
      isShown: false,
    };
  });

  const [errors, setErrors] = useState(initialErrors);

  const inputElements = inputs.map((input) => (
    <Input
      key={input.name}
      type={input.type}
      value={state[input.name]}
      onChange={handleChange}
      label={input.label}
      name={input.name}
      placeholder={input.placeholder}
      isError={errors[input.name].isError && errors[input.name].isShown}
      onBlur={handleBlur}
    />
  ));

  useEffect(
    () => {
      const isValidationError = Object.values(errors).some(
        (value) => value.isError
      );
      dispatch({ type: "SET_VALIDATION", isValidationError });
    },
    Object.values(errors).map((error) => error.isError)
  );

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch({ type: "HANDLE_CHANGE", name, value });
  }

  function handleBlur(event) {
    const { value, type, name } = event.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: {
        isError: !value.match(validationRegex[type]),
        isShown: true,
      },
    }));
  }

  return (
    <div className="flex flex-col">
      <FormHeader
        title="Personal info"
        text="Please provide your name, email address, and phone number."
      />
      <div className="flex flex-col gap-4 desktop:gap-6">{inputElements}</div>
    </div>
  );
}
