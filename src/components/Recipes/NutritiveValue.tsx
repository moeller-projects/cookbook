import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: block;
`

const Value = styled.div`
  display: inline-block;
`;

export const NutritiveValue = ({ kcal, fat, protein, carbs }) => {
  return (
    // <Container id="nutritive-value">
    //   <Value><strong>{kcal}</strong> kcal</Value> |
    //   <Value><strong>{fat}g</strong> Fett</Value> |
    //   <Value><strong>{carbs}g</strong> Kohlenhydrate</Value> |
    //   <Value><strong>{protein}</strong> Protein</Value>
    // </Container>
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">kcal pro Portion</p>
          <p className="title">{kcal}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Fett</p>
          <p className="title">{fat}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Kohlenhydrate</p>
          <p className="title">{carbs}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Protein</p>
          <p className="title">{protein}</p>
        </div>
      </div>
    </nav>
  )
}