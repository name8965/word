// word.js

import { db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

// Actions
// const LOAD = "my-app/widgets/LOAD";
const CREATE = "word/CREATE";
const LOAD = "word/LOAD";
const REMOVE = "word/REMOVE";
const UPDATE = "word/UPDATE";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";
const initialState = {
  list: [
    // { word: "1234", desc: "qwer", use: "asdf" },
    // { word: "12345", desc: "qwer2", use: "asdf2" },
    // { word: "123456", desc: "qwer3", use: "asdf3" },
  ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "word/LOAD": {
      console.log(action.word_list);
      return { list: action.word_list };
    }
    case "word/UPDATE": {
      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.word_index) === idx) {
          return l; //임시
        } else {
          return l;
        }
      });
      return { list: new_word_list };
    }

    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      // state.list.push(action.word);
      console.log(new_word_list);
      return { list: new_word_list };
    }
    case "word/REMOVE": {
      const new_word_list = state.list.filter((l, idx) => {
        // console.log(
        //   parseInt(action.word_index) !== idx,
        //   parseInt(action.word_index),
        //   idx
        // );
        return parseInt(action.word_index) !== idx;
      });
      console.log(new_word_list);
      return { list: new_word_list };
    }
    default:
      return state;
  }
}

// // Action Creators
export function createWord(word) {
  return { type: CREATE, word };
}
export function removeWord(word_index) {
  return { type: REMOVE, word_index };
}
export function updateWord(word_index) {
  return { type: UPDATE, word_index };
}
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

// export function loadWidgets() {
//   return { type: LOAD };
// }

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
    let word_list = [];

    word_data.forEach((doc) => {
      word_list.push({ id: doc.id, ...doc.data() });
    });
    console.log(word_list);
    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "word"), word);
    const word_data = { id: docRef.id, ...word }; // ...word  = { id:"aksdjflasdjkf", word: "1234", desc: "qwer", use: "asdf" },
    console.log(word_data);
    dispatch(createWord(word_data));
  };
};
export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert("아이디없음");
      return;
    }

    const docRef = doc(db, "word", word_id);
    await deleteDoc(docRef);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
    });
    dispatch(removeWord(word_index));
  };
};

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
