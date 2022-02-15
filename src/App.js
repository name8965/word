import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Addkey from "./components/Addkey";
import AddWord from "./view/AddWord";
import Word from "./components/Word";
import NotFound from "./view/NotFound";

function App() {
  const [list, setList] = React.useState([
    { word: "1234", desc: "qwer", use: "asdf" },
    { word: "12345", desc: "qwer2", use: "asdf2" },
    { word: "123456", desc: "qwer3", use: "asdf3" },
  ]);

  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact>
            <h2>MY DICTIONARY</h2>
            <Scroll>
              <Word list={list} />
            </Scroll>
            <Addkey />
          </Route>
          <Route path="/addword" exact>
            <h2>단어추가하기</h2>
            <AddWord list={list} />
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
  height: 96vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 80vh;
`;

export default App;
