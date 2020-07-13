import React from "react"

export const CookingSteps = ({ list }) => {
    return (
        <div className="ml-5" id="cooking-steps">
            <ol type="1">
                {list.map(step => {
                    return (
                        <li key={step}>
                            {step}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}