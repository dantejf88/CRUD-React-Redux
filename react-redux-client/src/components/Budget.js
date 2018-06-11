import React from "react"
import "./css/budget.css"

const Budget = (props) =>{
      return (
      <div className="Modals">
            <p>Presupuesto<br/> total: <br/></p>
            <p>${props.budget}</p>

      </div>
      )
  }

export default Budget;
