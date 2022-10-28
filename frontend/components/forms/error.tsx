import React from "react";

interface IError {
  message: string | undefined;
}

const Error = ({ message }: IError) => <p>{message}</p>;

export default Error;
