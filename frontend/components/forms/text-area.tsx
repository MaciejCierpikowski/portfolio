import React from "react";

import { TextAreaElement } from "./style";

interface IInput {
  name?: string;
  label?: string;
  type?: string;
  width?: number;
}

const TextArea = React.forwardRef(
  ({ name, label, width, ...rest }: IInput, ref: any) => {
    return (
      <>
        {/* <label htmlFor={name}>{label}</label> */}
        <TextAreaElement
          placeholder={label}
          name={name}
          {...rest}
          ref={ref}
          width={width}
        />
      </>
    );
  }
);

export default TextArea;
