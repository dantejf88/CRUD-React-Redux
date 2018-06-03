import React, { PureComponent } from "react";

import "./css/card.css"


class Card extends PureComponent {

  render(){
      const card = this.props

  return (
          <div className="Card">
              <img
                src={card.cover}
                alt=""
                width={260}
                height={160}
                className="Media-image"
              />
            <h3 className="Card-title">{card.title}</h3>
              <p className="Card-author">{card.price}</p>




        </div>
        )
      }
    }



export default Card
