import React, { useContext } from "react";import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
  } from "./common";
  import { Marginer } from "../marginer";
  import { AccountContext } from "./accountContext";
  export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    return(
        <BoxContainer>
            <FormContainer>
            <Input type="text" placeholder="name"/>
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="password"/>
                <Input type="password" placeholder="confirm password"/>
                </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit">Sign up</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Already have an account?
               <BoldLink herf="#" onClick={switchToSignin}>
                    SignUp</BoldLink></MutedLink>
        </BoxContainer>
    )
}
// <Marginer direction="vertical" margin={10} />
//  <Marginer direction="vertical" margin="1.6em" />