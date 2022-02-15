// word.js

// Actions
// const LOAD = "my-app/widgets/LOAD";
const CREATE = "word/CREATE";
const REMOVE = "word/REMOVE";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "my-app/widgets/REMOVE";
const initialState = {
  list: [
    { word: "1234", desc: "qwer", use: "asdf" },
    { word: "12345", desc: "qwer2", use: "asdf2" },
    { word: "123456", desc: "qwer3", use: "asdf3" },
  ],
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
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
  console.log(word);
  return { type: CREATE, word };
}
export function removeWord(word_index) {
  return { type: REMOVE, word_index };
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

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
