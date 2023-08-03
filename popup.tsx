import "./style.css"

import { useEffect, useState } from "react"

import ColorSelector from "~components/ColorSelector"
import GradientSelector from "~components/GradientSelector"
import ShadeSelector from "~components/ShadeSelector"
import colors from "~util/colors"

import gradients from "./util/gradients"
import shades from "./util/shades"

function IndexPopup() {
  const [selectedColors, setSelectedcolors] = useState({
    color1: "blue",
    color2: "teal",
    shade1: "600",
    shade2: "700"
  })

  const [gradient, setGradient] = useState("bg-gradient-to-r")
  const [cssCode, setCssCode] = useState("bg-")

  useEffect(() => {
    setCssCode(
      `${gradient} from-${selectedColors.color1}-${selectedColors.shade1} to-${selectedColors.color2}-${selectedColors.shade2}`
    )
  }, [selectedColors, gradient])

  return (
    <div
      className={`w-[640] h-[480] flex flex-col items-center font-mono justify-center space-y-4 ${cssCode}`}>
      <h1 className="font-bold text-center text-3xl drop-shadow-2xl rounded-lg bg-gradient-to-r text-white from-green-700 to-emerald-900 border border-gray-600 p-2">
        TailwindCss Gradient Generator
      </h1>
      <p className="font-semibold text-white text-lg text-center">
        When you select colors and shades background will dynamically change,
        then you can copy tailwindcss classes
      </p>

      <div className="flex flex-row space-x-10">
        <ColorSelector
          setSelectedcolors={setSelectedcolors}
          colorNumber={"color1"}
          value={selectedColors.color1}
          colors={colors}
        />
        <ColorSelector
          setSelectedcolors={setSelectedcolors}
          colorNumber={"color2"}
          value={selectedColors.color2}
          colors={colors}
        />
      </div>
      <div className="flex flex-row space-x-10">
        <ShadeSelector
          setSelectedcolors={setSelectedcolors}
          shadeNumber={"shade1"}
          value={selectedColors.shade1}
          shades={shades}
        />
        <ShadeSelector
          setSelectedcolors={setSelectedcolors}
          shadeNumber={"shade2"}
          value={selectedColors.shade2}
          shades={shades}
        />
      </div>
      <GradientSelector
        setGradient={setGradient}
        gradients={gradients}
        value={gradient}
      />
      <div className="font-medium text-lg bg-gray-900 text-white p-2 text-center rounded-lg w-[560] border border-gray-600">
        <p className="underline">Tailwind css gradient class</p>
        <p className="text-emerald-300">{cssCode}</p>
      </div>

      <button
        className="font-semibold text-base bg-blue-900 text-white p-2 border border-gray-600 rounded-lg hover:bg-blue-700 active:bg-blue-500"
        onClick={() => {
          navigator.clipboard.writeText(cssCode)
        }}>
        Copy tailwind classes to clipboard
      </button>
    </div>
  )
}

export default IndexPopup
