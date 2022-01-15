import Easters from "./Songs/Easters";
import Christmas from "./Songs/Christmas";
import Prayal from "./Songs/Prayal";
import Folk from "./Songs/Folk";

const Songs = {
  name: "Пабожныя Спевы",
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

export default Songs;
