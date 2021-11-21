import React from "react";
import BottomArrows from "./BottomArrows";

function MiddleColumn() {
  return (
    <div className="w3-col m6">
      <div className="w3-card w3-round w3-white w3-container w3-margin-left w3-margin-right">
        <h4 className="w3-center">
          <strong>Евангелле</strong>
        </h4>
        <hr />
        <p>1. Кніга радаводу Іісуса Хрыста, Сына Давідавага, Сына Аўраа́мавага.</p>
        <p>
          2. Аўраа́м нарадзíў Ісаа́ка; Ісаа́к нарадзíў Іа́кава; Іа́каў нарадзíў Іу́ду
          і
        </p>
        <BottomArrows />
      </div>
    </div>
  );
}

export default MiddleColumn;
