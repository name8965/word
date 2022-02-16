import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addWordFB, createWord } from "../redux/modules/word";

const AddWord = (props) => {
  const word = React.useRef(null);
  const desc = React.useRef(null);
  const use = React.useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const addWordList = () => {
    const words = {
      word: word.current.value,
      desc: desc.current.value,
      use: use.current.value,
    };
    // dispatch(createWord(words));
    // console.log(words);
    dispatch(addWordFB(words));
    history.goBack();
  };
  return (
    <div>
      <p>단어</p>
      <input type="text" ref={word}></input>
      <p>설명</p>
      <input type="text" ref={desc}></input>
      <p>예시</p>
      <input type="text" ref={use}></input>
      <div onClick={addWordList}>추가하기</div>
    </div>
  );
};
export default AddWord;
