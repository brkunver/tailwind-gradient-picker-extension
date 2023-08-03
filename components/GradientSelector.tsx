import React from "react"

function GradientSelector({ setGradient, gradients ,value}) {
  function changeColorHandler(e) {
    setGradient(e.target.value)
  }

  return (
    <select
      onChange={(e) => changeColorHandler(e)}
      value={value}
      className="bg-fuchsia-700 text-center text-white border border-gray-600 w-[260] text-xl rounded-lg font-medium p-2">
      {gradients.map((gradient) => (
        <option
          key={gradient}
          id={gradient}
          value={gradient}
          className="bg-black">
          {gradient}
        </option>
      ))}
    </select>
  )
}

export default GradientSelector
