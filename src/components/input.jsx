import React from "react";

const Input = (props) => {
  const { name, label, value, handleChange, type, errors } = props;
  return (
    <>
      {" "}
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={handleChange}
          id=""
          name={name}
          type={type}
          className="form-control"
        />
        {errors && <p className="alert alert-danger">{errors}</p>}
      </div>
    </>
  );
};

export default Input;
