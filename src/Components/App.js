import React from "react";
import styled from "styled-components";

const AppContianerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: #1d1f27;
`;

const TitleH1 = styled.h1`
  color: #ffff;
`;

const App = () => {
  return (
    <AppContianerDiv>
      <TitleH1>Hello, Dave. You're looking well today.</TitleH1>
    </AppContianerDiv>
  )
};

export default App;