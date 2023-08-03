import React from "react"

function ShadeSelector({ setSelectedcolors, shades, shadeNumber,value }) {
  function changeColorHandler(e) {
    setSelectedcolors((prev) => {
      return { ...prev, [shadeNumber]: e.target.value }
    })
  }

  return (
    <select
      onChange={(e) => changeColorHandler(e)}
      id={shadeNumber}
      value={value}
      className="bg-gradient-to-r from-blue-600 to-indigo-900 text-center text-white border border-gray-600 rounded-lg w-28 text-xl font-medium p-1">
      {shades.map((shade) => (
        <option key={shade} id={shade} value={shade} className="bg-black">
          {shade}
        </option>
      ))}
    </select>
  )
}

export default ShadeSelector
