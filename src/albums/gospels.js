import { John } from "./Gospels/John";
import { Luke } from "./Gospels/Luke";
import { Mark } from "./Gospels/Mark";
import { Matthew } from "./Gospels/Matthew";

const gospels = {
  name: "Евангелле",
  idBe: "Евангелле",
  idEn: "Gospels",
  text: [
    {
      name: "Святое Дабравесце паводле Матфея",
      idBe: "Мф.",
      idEn: "Mattew",
      text: Matthew,
    },
    {
      name: "Святое Дабравесце паводле Марка",
      idBe: "Мк.",
      idEn: "Mark",
      text: Mark,
    },
    {
      name: "Святое Дабравесце паводле Лукі",
      idBe: "Лк.",
      idEn: "Luke",
      text: Luke,
    },
    {
      name: "Святое Дабравесце паводле Іаана",
      idBe: "Ін.",
      idEn: "John",
      text: John,
    },
  ],
};

export { gospels };
