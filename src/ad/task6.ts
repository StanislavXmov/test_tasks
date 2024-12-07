const task6 = (map: string) => {
  const mapList: string[][] = [];
  let startRow = 0;
  let startColumn = 0;

  map.split("\n").filter(Boolean).forEach((r, i)=> {
    const row = r.split("");
    const columnIndex = row.indexOf("^")
    if (columnIndex >= 0) {
      startColumn = columnIndex;
      startRow = i;
    }
    mapList.push(row);
  });

  let result = 0;

  const check = (row: number, column: number): "STOP" | "DONE" | "GO" => {
    if (!mapList[row] || !mapList[row][column]) {
      result++;
      return "DONE";
    } else if (mapList[row][column] === "#") {
      return "STOP";
    } else {
      return "GO";
    }
  }

  const go = (dir: "UP" | "DOWN" | "LEFT" | "RIGHT", row: number, column: number) => {
    if (dir === "UP") {
      const type = check(row - 1, column);
      if (type === "GO") {
        mapList[row][column] = "X";
        go("UP", row - 1, column);
      } else if (type === "STOP") {
        mapList[row][column] = "X";
        go("RIGHT", row, column + 1);
      }
    } else if (dir === "RIGHT") {
      const type = check(row, column + 1);
      if (type === "GO") {
        mapList[row][column] = "X";
        go("RIGHT", row, column + 1);
      } else if (type === "STOP") {
        mapList[row][column] = "X";
        go("DOWN", row + 1, column);
      }
    } else if (dir === "DOWN") {
      const type = check(row + 1, column);
      if (type === "GO") {
        mapList[row][column] = "X";
        go("DOWN", row + 1, column);
      } else if (type === "STOP") {
        mapList[row][column] = "X";
        go("LEFT", row, column - 1);
      }
    } else if (dir === "LEFT") {
      const type = check(row, column - 1);
      if (type === "GO") {
        mapList[row][column] = "X";
        go("LEFT", row, column - 1);
      } else if (type === "STOP") {
        mapList[row][column] = "X";
        go("UP", row - 1, column);
      }
    }
  }

  go("UP", startRow, startColumn);

  // console.log(mapList, startRow, startColumn);

  
  for (let i = 0; i < mapList.length; i++) {
    for (let j = 0; j < mapList[i].length; j++) {
      if (mapList[i][j] === "X") {
        result++;
      }
    }
  }
  console.log(result);
}