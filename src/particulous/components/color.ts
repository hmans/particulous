import { Color, ColorRepresentation } from "three"

export type ColorComponent = {
  color: Color
}

export const color = (color: ColorRepresentation = "#fff"): ColorComponent => ({
  color: new Color(color)
})
