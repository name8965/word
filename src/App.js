import React from "react";
import styled from "styled-components";
import Word from "./components/Word";

function App() {
  return (
    <div className="App">
      <Container>
        <h2>MY DICTIONARY</h2>
        <Word />
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #e2fff8;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 95vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default App;
