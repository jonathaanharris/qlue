import { useState } from "react"
import { useParams } from "react-router-dom";
import data from "../data.json"
import '../App.css';
import userimg from "../assets/user.png"

function Create() {
  let skillObj = { javascript: false, phyton: false, golang: false, php: false }

  const [name, setName] = useState("")
  const skillHandler = (el) => {
    if (el.target.checked) {
      skillObj[el.target.value] = true
    } else {
      skillObj[el.target.value] = false
    }
  }


  const nameHandler = (el) => {
    setName(el.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let skillArr = []
    for (let el in skillObj) {
      if (skillObj[el]) {
        skillArr.push(el)
      }
    }

  }

  return <div className="containerDetail">

    <div className="cardDetail">
      <form onSubmit={submitHandler}>
        <h1>Create Person</h1>
        <h4>Name</h4>
        <input onChange={nameHandler}></input>
        <h4>Expert skills</h4>
        <input type="checkbox" value="javascript" id="javascript" onChange={skillHandler} />
        <label htmlFor="javascript">
          Javascript
        </label>
        <input type="checkbox" value="phyton" id="phyton" onChange={skillHandler} />
        <label htmlFor="phyton">
          Phyton
        </label>
        <input type="checkbox" value="golang" id="golang" onChange={skillHandler} />
        <label class="form-check-label" htmlFor="golang">
          Golang
        </label>
        <input type="checkbox" value="php" id="php" onChange={skillHandler} />
        <label class="form-check-label" htmlFor="php">
          Php
        </label>
        <button>submit</button>
      </form>
    </div>

  </div>
}

export default Create;
