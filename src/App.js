import React from 'react';
import './App.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <AppContainer>
      <AccountBox/>
      <h1>hello test</h1>
    </AppContainer>
  );
}

export default App;
