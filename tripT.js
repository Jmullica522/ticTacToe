
function isWinner() {
var win = false;
if (document.getElementById("gameChecker").innerHTML === "N") {
  return win;
  } else {
    win = true;
    return win;
  }
}

function getClass(gridId) { //reqX being requested grid number
  var gridClass = document.getElementById(gridId).className;
  return gridClass;
}

function isEquals(classList) {
  if (classList[0] === "neutral") {
    return false;
  }
  if (classList[0] === classList[1]) {
    if (classList[1] === classList[2]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function checkAcross() {
  var row= ["top", "cent", "bot"];
  var column = ["Left", "Middle", "Right"];
  var checkList = ["first", "second", "third"];
  for (var i in row) {
    for (var j in column) {
      var gridString = row[i] + column[j];
      checkList[j] = gridString;
    }
    for (var j in checkList) {
    var newClass = getClass(checkList[j]);
    checkList[j] = newClass;
    }
    var win = isEquals(checkList);
    if (win) {
      return win;
      }
  }
  return false;
}

function checkDown() {
  var row= ["top", "cent", "bot"];
  var column = ["Left", "Middle", "Right"];
  var checkList = ["first", "second", "third"];
  for (var i in column) {
    for (var j in row) {
      var gridString = row[j] + column[i];
      checkList[j] = gridString;
    }
    for (var j in checkList) {
      var newClass = getClass(checkList[j]);
      checkList[j] = newClass;
    }
    var win = isEquals(checkList);
    if (win) {
      return win;
    }
  }
  return false;
}

function checkDiagonal() {
  var leftDiag = ["topLeft", "centMiddle", "botRight"];
  var rightDiag = ["topRight", "centMiddle", "botLeft"];
  var checkList = ["a", "b", "c"];
  for (var i in leftDiag) {
    checkList[i] = getClass(leftDiag[i]);
  }
  var win = isEquals(checkList);
  if (win) {
    return true;
  }
  for (var i in rightDiag) {
    checkList[i] = getClass(rightDiag[i]);
  }
  win = isEquals(checkList);
  if (win) {
    return true;
  }
  return false;
}

function checkWin() {
  var win = false;
  if (!win) {
  win = checkAcross();
  }
  if (!win) {
  win = checkDown();
  }
  if (!win) {
  win = checkDiagonal();
  }
  if (win) {
  document.getElementById("gameChecker").innerHTML = "Y";
  alert("Player " + document.getElementById("playerTurn").innerHTML + " wins!");
  }
return win;
}

function changeTurn() {
  var turn = document.getElementById("playerTurn").innerHTML;
  if (turn === "X") {
    document.getElementById("playerTurn").innerHTML = "O";
  } else {
    document.getElementById("playerTurn").innerHTML = "X";
  }
}

function whichClass(turn) {
  if (turn === "X") {
    return "Xbox";
  } else {
    return "Obox";
  }
}

function changeBox(boxId, turn) {
  var boxClass = document.getElementById(boxId).className;
  if (boxClass === "neutral") {
    var newClass = whichClass(turn);
    document.getElementById(boxId).className = newClass;
    document.getElementById(boxId).innerHTML = turn;
  } else {
    return 0;
  }
}

function boxPress(boxId) {
  if (isWinner()) {
    alert("Game already over. Please reset.");
    return 0;
  }
  var pTurn = document.getElementById("playerTurn").innerHTML;
  var winCheck = false;
  changeBox(boxId, pTurn);
  winCheck = checkWin();
  if (!winCheck) {
    changeTurn();
  } else {
    //alert("test");
  }
}
