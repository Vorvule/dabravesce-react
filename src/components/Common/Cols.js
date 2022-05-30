const sideColumns = ["LeftColumn", "RightColumn"];

const allCols = { left: true, middle: true, right: true };
const middleCol = { left: false, middle: true, right: false };

export class Cols {
  static getInitial() {
    return this.screenIsLarge() ? allCols : middleCol;
  }

  // static showColumnById(id) {
  //   if (this.screenIsLarge()) return;
  //   if (this.toggleShowSideColumn(id)) return;

  //   this.hideAll();
  //   this.showColumnWithId(id);
  // }

  // helpers:

  static screenIsLarge() {
    return window.innerWidth > 992;
  }

  // static toggleShowSideColumn(id) {
  //   if (this.sideColumnVisible(id)) {
  //     this.showColumnById("MiddleColumn");
  //     return true;
  //   }
  // }

  static sideColumnVisible(id) {
    const isSideColumn = sideColumns.includes(id);

    const isVisibleColumns = !document
      .getElementById(id)
      .classList.contains("w3-hide-small");

    return isSideColumn && isVisibleColumns;
  }

  static hideAll() {
    document.getElementById("MiddleColumn").classList.add("w3-hide");
    sideColumns.forEach((id) => {
      document.getElementById(id).classList.add("w3-hide-small");
      document.getElementById(id).classList.add("w3-hide-medium");
    });
  }

  static showColumnWithId(id) {
    if (id === "MiddleColumn") {
      document.getElementById(id).classList.remove("w3-hide");
    } else {
      document.getElementById(id).classList.remove("w3-hide-small");
      document.getElementById(id).classList.remove("w3-hide-medium");
    }
  }
}
