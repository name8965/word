import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeWord } from "../redux/modules/word";

const Word = (props) => {
  // const [count, setCount] = React.useState(3);
  // const word_count = Array.from({ length: count }, (v, i) => i);
  const word_list = useSelector((state) => state.word.list);
  const dispatch = useDispatch();

  return (
    <>
      {word_list.map((num, idx) => {
        return (
          <WordStyle key={idx}>
            <div>단어</div>
            <span>{num.word}</span>
            <div>설명</div>
            <span>{num.desc}</span>
            <div>예시</div>
            <span>{num.use}</span>
            <div>
              <button
                onClick={() => {
                  dispatch(removeWord(idx));
                }}
              >
                삭제
              </button>
            </div>
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
