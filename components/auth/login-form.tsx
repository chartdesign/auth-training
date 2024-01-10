import React from "react";
import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      {...{
        headerLabel: "Login",
        backButtonLabel: "Back to Home",
        backButtonHref: "/auth/register",
        showSocial: true,
      }}
    >
      <div>
        <h1>Login Form</h1>
      </div>
    </CardWrapper>
  );
};
