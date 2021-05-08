import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
import "./styles.css";

function Entry(emojiEl) {
  return (
    <Card
      key={emojiEl.id}
      name={emojiEl.name}
      emoji={emojiEl.emoji}
      description={emojiEl.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Entry)}</dl>
    </div>
  );
}

export default App;
