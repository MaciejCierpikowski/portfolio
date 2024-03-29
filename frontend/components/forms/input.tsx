import React from "react";

import { InputElement } from "./style";

interface IInput {
  name?: string;
  label?: string;
  type?: string;
  width?: number;
}

const Input = React.forwardRef(
  ({ name, label, type, width, ...rest }: IInput, ref: any) => {
    return (
      <>
        {/* <label htmlFor={name}>{label}</label> */}
        <InputElement
          placeholder={label}
          type={type}
          name={name}
          {...rest}
          ref={ref}
          width={width}
        />
      </>
    );
  }
);

export default Input;
