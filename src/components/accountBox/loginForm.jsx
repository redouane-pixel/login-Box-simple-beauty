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
  export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    return(
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="password"/>
                </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Forget your password?</MutedLink>
                <Marginer direction="vertical" margin="1.4em" />
                <SubmitButton type="submit">Sig in</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">you don't have an acount?<BoldLink herf="#" onClick={switchToSignup}>SignUp</BoldLink></MutedLink>
        </BoxContainer>
    )
}
// <Marginer direction="vertical" margin={10} />
//  <Marginer direction="vertical" margin="1.6em" />