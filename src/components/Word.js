import React from "react";
import styled from "styled-components";

const Word = (props) => {
  const my_lists = {
    word: "놀기",
    desc: "신나게 놀기라는 뜻",
    use: "놀자놀자",
  };
  const [list, setList] = React.useState([
    { word: "놀기", desc: "신나게 놀기라는 뜻", use: "놀자놀자" },
    { word: "놀기2", desc: "신나게 놀기라는 뜻2", use: "놀자놀자2" },
    { word: "놀기3", desc: "신나게 놀기라는 뜻3", use: "놀자놀자3" },
  ]);
  const [count, setCount] = React.useState(3);
  const word_count = Array.from({ length: count }, (v, i) => i);
  console.log(props);
  return (
    <>
      {word_count.map((num, idx) => {
        return (
          <WordStyle key={idx}>
            <div>단어</div>
            <span>{list[idx].word}</span>
            <div>설명</div>
            <span>{list[idx].desc}</span>
            <div>예시</div>
            <span>{list[idx].use}</span>
          </WordStyle>
        );
      })}
    </>
  );
};

const WordStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: #fff;
`;

export default Word;
