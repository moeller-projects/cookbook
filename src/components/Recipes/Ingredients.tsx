import React from "react"
import Checkbox from "../Checkbox"

export const Ingredients = ({ list }) => {
    return (
        <div className="ml-5" id="ingredients">
            {list.map(ingredient => {
                return (
                    <div key={ingredient}>
                        <label className="checkbox">
                            <input type="checkbox" />
                            {ingredient}
                        </label>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}