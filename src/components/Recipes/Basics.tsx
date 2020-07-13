import React from "react"
import { Stopwatch } from "@styled-icons/boxicons-regular"
import { Users } from "@styled-icons/feather"

export const Basics = ({ duration, servings }) => {
  return (
    <div className="ml-5 mb-4" id="basics">
      <div><Stopwatch size="20" /> {duration}</div>
      <div><Users size="20" /> reicht für {servings} Personen</div>
    </div>
  )
}