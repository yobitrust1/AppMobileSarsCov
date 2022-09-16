import React, { useState, useEffect } from "react";

const UseForm = (initialFieldValues) => {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = { [name]: value };

    setValues({
      ...values,
      ...fieldValue,
    });

  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

export default UseForm;