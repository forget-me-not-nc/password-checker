import { StrengthToColor } from "../password-checker-component/models/strength-to-color.model";
import { StrengthToRule } from "../password-checker-component/models/strength-to-rule.model";
import { Strength } from "./strength.enum";

export const myStrengthToRule: StrengthToRule[] = [
  {
    strengthLvl: Strength.Easy,
    regex: /^[a-zA-Z]+$|^\d+$|^[!@#$%^&*()_+[\]{};:'\",\.<>\?\/\|\\-]+$/, 
  },
  {
    strengthLvl: Strength.Medium,
    regex: /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+[\]{};:'",.<>?\/|\\-])[^0-9]+$|^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$|^(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};:'",.<>?\/|\\-])[^a-zA-Z]+$/, 
  },
  {
    strengthLvl: Strength.Strong,
    regex: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};:'",.<>?\/|\\-]).+$/, 
  },
  // {
  //   strengthLvl: Strength.SuperStrong,
  //   regex: /^.{30,}$/, 
  // },
  // {
  //   strengthLvl: Strength.UltraStrong,
  //   regex: /^.{35,}$/, 
  // },
]

export const myStrengthToColor: StrengthToColor[] = [
  {
    strengthLvl: Strength.Easy,
    color: '#851b1b'
  },
  {
    strengthLvl: Strength.Medium,
    color: '#fffb00'
  },
  {
    strengthLvl: Strength.Strong,
    color: '#2e9425'
  },
  // {
  //   strengthLvl: Strength.SuperStrong,
  //   color: 'black'
  // },
  // {
  //   strengthLvl: Strength.UltraStrong,
  //   color: 'purple'
  // },
]