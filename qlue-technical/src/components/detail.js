import { useState } from "react"
import { useParams } from "react-router-dom";
import data from "../data.json"
import '../App.css';
import userimg from "../assets/user.png"

function Detail() {
  const { name } = useParams();
  let temp = data.data
  let filtered = {}

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
    if (obj.full_name === name) {
      filtered = obj
    }
  }

  return <div className="containerDetail">

    <div className="cardDetail">
      <img src={userimg} width="25%"></img>
      <h1 style={{ "font-size": "4rem" }}>{filtered.full_name.toUpperCase()}</h1>
      {filtered.expert_skills.length > 0 ? <div style={{ "font-size": "2rem" }}>Expert skills</div> : ""}
      <ul>
        {filtered.expert_skills.map(el => {
          return <li style={{ "font-size": "1.3rem" }}>{capitalizeFirstLetter(el)}</li>
        })}
      </ul>
      <div className="word">

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore impedit, eius nemo harum quisquam perspiciatis. Quos ut quo porro saepe enim reiciendis! Voluptates laborum, quos nemo illo nulla suscipit ipsumm?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore impedit, eius nemo harum quisquam perspiciatis. Quos ut quo porro saepe enim reiciendis! Voluptates laborum, quos nemo illo nulla suscipit ipsum?

      </div>
    </div>

  </div>
}

export default Detail;
