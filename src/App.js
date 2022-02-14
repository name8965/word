import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Addkey from "./components/Addkey";
import AddWord from "./view/AddWord";
import Word from "./components/Word";
import NotFound from "./view/NotFound";

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact>
            <h2>MY DICTIONARY</h2>
            <Word />
            <Addkey />
          </Route>
          <Route path="/addword" exact>
            <AddWord />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
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
