import { Christmas } from "./Songs/Christmas";
import { Easters } from "./Songs/Easters";
import { Folk } from "./Songs/Folk";
import { Prayal } from "./Songs/Prayal";

const songs = {
  name: "Духоўныя Спевы",
  idEn: "Songs",
  text: [
    {
      name: "Велікодныя",
      idEn: "Easters",
      text: Easters,
    },
    {
      name: "Калядныя",
      idEn: "Christmas",
      text: Christmas,
    },
    {
      name: "Малітоўныя",
      idEn: "Prayal",
      text: Prayal,
    },
    {
      name: "Народныя",
      idEn: "Folk",
      text: Folk,
    },
  ],
};

export { songs };
