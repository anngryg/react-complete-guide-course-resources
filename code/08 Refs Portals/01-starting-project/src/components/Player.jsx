import React, { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");

  function onSubmitted() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={onSubmitted}>Set Name</button>
      </p>
    </section>
  );
}
