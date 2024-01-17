import React, { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { AddToList } from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John",
      age: 36,
      url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1b164L.img?w=768&h=403&m=6&x=499&y=86&s=114&d=114",
      note: "lorem ipsum dolor sit amet lorem ipsum dolor",
    },
  ]);
  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
