import React from "react"
import "./css/budget.css"

const Budget = (props) =>{
      return (
      <div className="Modals">
            <h1>Presupuesto <br/> total: </h1>
            <h1>${props.budget}</h1>

      </div>
      )
  }

export default Budget;
