import { Acathisti } from "./Prayers/Acathisti";
import { Canons } from "./Prayers/Canons";
import { Lithurgy } from "./Prayers/Lithurgy";

export const worships = {
  name: "Богаслужэнні",
  idBe: "Богаслужэнні",
  idEn: "Worship",
  text: [
    {
      name: "Літургія",
      idBe: "Літургія",
      idEn: "Lithurgy",
      text: Lithurgy,
    },
    {
      name: "Каноны",
      idBe: "Каноны",
      idEn: "Canons",
      text: Canons,
    },
    {
      name: "Акафісты",
      idBe: "Акафісты",
      idEn: "Acathisti",
      text: Acathisti,
    },
  ],
};
