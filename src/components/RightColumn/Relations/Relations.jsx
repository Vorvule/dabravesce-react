import React from "react";
import { LinkItem } from "./LinkItem";

export const Relations = () => {
  const android = "https://play.google.com/store/apps/details?id=by.dabravesce";
  const github = "https://github.com/Vorvule/dabravesce-react";

  return (
    <div className="w3-padding">
      <h4 className="w3-center">
        <strong>Дачыненні</strong>
      </h4>
      <hr />

      <ul className="w3-ul" id="relations">
        <LinkItem
          title="Дачыненне на Android"
          url={android}
          fa="fa-android"
          constantText="Android"
          hidableText=" на Google Play"
        />
        <LinkItem
          title="Рэпазіторый на Gihub"
          url={github}
          fa="fa-github"
          constantText="Github"
          hidableText="-рэпазіторый"
        />
      </ul>

      <br />
    </div>
  );
};
