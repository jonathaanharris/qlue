import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import { useState } from "react"

function App() {
  let temp = data.data
  let manipulated = []
  for (let el of temp) {
    let obj = {}
    obj.id = el.id
    obj.full_name = el.first_name + el.last_name
    obj.expert_skills = []
    for (let element in el.skills) {
      if (el.skills[element] === "expert") {
        obj.expert_skills.push(element)
      }
    }
    manipulated.push(obj)
  }
  const [user, setUser] = useState(manipulated)
  return (
    <div className="App">

    </div>
  );
}

export default App;
