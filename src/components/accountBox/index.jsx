import React, { useState } from 'react';
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 15px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const BackDrop = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(550deg);
  top: -290px;
  left: -50px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin:0;
`;
const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 13px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  margin-top: 15px;
`;
const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(70deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
}
// this one it's so important for the animation,the stiffness is the power of pulled the object,here the doration it's whis s
const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};
export function AccountBox (props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin")   
  const playExpandingAnimation = () => {
    setExpanded(true);
    // we use setTimeout work or run the code in it afete the time below and it's work with miles scends
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };
  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  }
  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  }
  const contextValue = { switchToSignup, switchToSignin };
   return(
    //  we use the <<AccountContext.Provider> for the value pass in all components and in this case the value it's this two functions switchToSignin and switchToSignup
     <AccountContext.Provider value={contextValue}>
        <BoxContainer>
            <TopContainer>
            <BackDrop
            initial={false}
            // this is for the animate if isExpanded it's true and in the beginin its false we fo collapsed and this is 
            animate={isExpanded ? "expanded" : "collapsed"} 
            variants={backdropVariants}
            transition={expandingTransition}
            />
               {/* this one its when the active it's equal to signin that is mean that look this words, and you need to ues () and display the page of sign in */}
               {active === "signin" && (
                 <HeaderContainer>
                 <HeaderText>Welcome</HeaderText>
                 <HeaderText>Back</HeaderText>
                 <SmallText>Please sign-in to continue!</SmallText>
               </HeaderContainer>
               )}
               {/* this one its when the active it's equal to signup that is mean that look this words, and you need to ues () and display the page of sign up  */}
               {active === "signup" && (
                 <HeaderContainer>
                 <HeaderText>Create</HeaderText>
                 <HeaderText>account</HeaderText>
                 <SmallText>Please sign-up to continue!</SmallText>
               </HeaderContainer>
               )}
            </TopContainer>
            <InnerContainer>
              {active === "signin" && <LoginForm/> }
              {active === "signup" && <SignupForm/> }
            </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
    );
}