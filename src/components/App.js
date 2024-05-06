import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
 const [isDark, SetIsDark] = useState(false)
  const appClass = isDark ? "App dark" : "App light"

 function handleClick() {
  SetIsDark(!isDark)
}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>{isDark ? "App dark" : "App light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
