import React from "react";

import { ErrorWrapper } from "./style";

interface IError {
  message: string | undefined;
}

const Error = ({ message }: IError) => <ErrorWrapper>{message}</ErrorWrapper>;

export default Error;
