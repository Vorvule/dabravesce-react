import { Acathisti } from "./Prayers/Acathisti";
import { Canons } from "./Prayers/Canons";
import { Daily } from "./Prayers/Daily";
import { Easter } from "./Prayers/Easter";
import { Housel } from "./Prayers/Housel";
import { Lithurgy } from "./Prayers/Lithurgy";

const prayers = {
  name: "Малітоўнік",
  idEn: "Prayers",
  text: [
    {
      name: "Малітвы штодзённыя",
      idBe: "Мал. штодз.",
      idEn: "Daily",
      text: Daily,
    },

    {
      name: "Малітвы прычашчэння",
      idBe: "Мал. прыч.",
      idEn: "Housel",
      text: Housel,
    },

    {
      name: "Малітвы велікодныя",
      idBe: "Мал. велік.",
      idEn: "Easter",
      text: Easter,
    },

    {
      name: "Богаслужэнні",
      idBe: "Богасл.",
      idEn: "Lithurgy",
      text: Lithurgy,
    },

    {
      name: "Каноны",
      idBe: "Кан.",
      idEn: "Canons",
      text: Canons,
    },
    {
      name: "Акафісты",
      idBe: "Акаф.",
      idEn: "Acathisti",
      text: Acathisti,
    },
  ],
};

export { prayers };
