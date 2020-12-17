import React, { useState } from "react";
import "./styles.css";

var dict = {
  "😂": "laughing",
  "😞": "sad",
  "😡": "angry",
  "❤️": "heart",
  "😖": "annoyed"
};

var emojiKnown = Object.keys(dict);
// console.log(emojiKnown)

export default function App() {
  var [userInput, setUserInput] = useState("");
  var [emojiMeaning, setMeaning] = useState("Select a emoji");

  function inputChangeHandler(event) {
    var meaning = dict[event.target.value];
    if (meaning === undefined) {
      meaning = "We don't have meaning of this emoji";
    }
    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = dict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EMOJI MEANING</h1>
      <input onChange={inputChangeHandler} />
      <div>{emojiMeaning}</div>
      <h3>Dictionary</h3>
      {emojiKnown.map(function (emoji) {
        return (
          <span onClick={() => clickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
