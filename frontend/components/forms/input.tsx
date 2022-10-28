import React from "react";

interface IInput {
  name?: string;
  label?: string;
  type?: string;
}

const Input = React.forwardRef(
  ({ name, label, type, ...rest }: IInput, ref: any) => {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} {...rest} ref={ref} />
      </>
    );
  }
);

export default Input;
