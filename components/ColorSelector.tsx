import React from "react"

function ColorSelector({ setSelectedcolors, colors, colorNumber,value }) {
  function changeColorHandler(e) {
    setSelectedcolors((prev) => {
      return { ...prev, [colorNumber]: e.target.value }
    })
  }

  return (
    <select
      onChange={(e) => changeColorHandler(e)}
      id={colorNumber}
      value={value}
      className="bg-gradient-to-r from-green-600 to-emerald-800 text-center text-white border border-gray-600 w-28 rounded-lg text-xl font-medium p-1">
      {colors.map((color) => (
        <option key={color} id={color} value={color} className="bg-black">
          {color}
        </option>
      ))}
    </select>
  )
}

export default ColorSelector
