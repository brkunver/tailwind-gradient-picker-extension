/** @type {import('tailwindcss').Config} */
const tailwindColors = require("./node_modules/tailwindcss/colors")
const gradients = require("./util/gradients")
const colorSafeList = []

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"]

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  const pallette = tailwindColors[colorName]

  if (typeof pallette === "object") {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`from-${colorName}-${shade}`)
        colorSafeList.push(`to-${colorName}-${shade}`)
      }
    })
  }
}

for (let gradient of gradients) {
  colorSafeList.push(gradient)
}

module.exports = {
  safelist: colorSafeList,
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: tailwindColors
    }
  },
  plugins: []
}
