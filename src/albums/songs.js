import { Christmas } from "./Songs/Christmas";
import { Easters } from "./Songs/Easters";
import { Folk } from "./Songs/Folk";
import { Prayal } from "./Songs/Prayal";

const songs = {
  name: "Духоўныя Спевы",
  idEn: "Songs",
  text: [
    {
      name: "Велікодныя спевы",
      idEn: "Easters",
      text: Easters,
    },
    {
      name: "Калядныя спевы",
      idEn: "Christmas",
      text: Christmas,
    },
    {
      name: "Малітоўныя спевы",
      idEn: "Prayal",
      text: Prayal,
    },
    {
      name: "Народныя спевы",
      idEn: "Folk",
      text: Folk,
    },
  ],
};

export { songs };
