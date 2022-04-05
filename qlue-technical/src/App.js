import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  let temp = data.data
  let manipulated = []

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  for (let el of temp) {
    let obj = {}
    obj.id = el.id
    obj.full_name = `${el.first_name} ${el.last_name}`
    obj.expert_skills = []
    for (let element in el.skills) {
      if (el.skills[element] === "expert") {
        obj.expert_skills.push(element)
      }
    }
    manipulated.push(obj)
  }
  const [user, setUser] = useState(manipulated)
  const detailHandler = (el) => {
    console.log(el)
    navigate(`profile/${el}`)
  }

  return (
    <div className="App">
      <div className='container'>
        {user.map(el => {
          return <div key={el.id} className="card" onClick={() => detailHandler(el.full_name)}>
            <h3>{el.full_name}</h3>
            <div>Expert skills:</div>
            <div>
              {el.expert_skills.length > 0 ? el.expert_skills.map((element, idx) => {
                if (idx === el.expert_skills.length - 1) {
                  return <span> {capitalizeFirstLetter(element)}</span>
                } else {
                  return <span> {capitalizeFirstLetter(element)}, </span>
                }
              }) : <span>-</span>}
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
