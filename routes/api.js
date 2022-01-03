"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  app.route("/api/check").post((req, res) => {
    const { puzzle, coordinate, value } = req.body;
    if (!puzzle || !coordinate || !value)
      return res.status(400).send("Invalid request");
    const row = coordinate.split("")[0];
    const column = coordinate.split("")[1];
    if (
      coordinate.length !== 2 ||
      !/[a-i]/i.test(row) ||
      !/[0-9]/i.test(column)
    ) {
      console.log("invalid coordinate :>> ", coordinate);
      return res.json({ error: "invalid coordinate" });
    }
    if (!/[1-9]/i.test(value)) {
      console.log("invalid value :>> ", value);
      return res.json({ error: "invalid value" });
    }
    if (puzzle.length !== 81) {
      console.log("invalid puzzle :>> ", puzzle);
      return res.json({ error: "Expected puzzle to be 81 characters long" });
    }
    if (/[^1-9.]/g.test(puzzle)) {
      console.log("invalid puzzle :>> ", puzzle);
      return res.json({ error: "Invalid characters in puzzle" });
    }
    let validCol = solver.checkColPlacement(puzzle, row, column, value);
    let validReg = solver.checkRegionPlacement(puzzle, row, column, value);
    let validRow = solver.checkRowPlacement(puzzle, row, column, value);
    let conflicts = [];
    if (validCol && validReg && validRow) {
      return res.json({ valid: true });
    } else {
      if (!validCol) {
        conflicts.push("column");
      }
      if (!validReg) {
        conflicts.push("region");
      }
      if (!validRow) {
        conflicts.push("row");
      }
      return res.json({ valid: false, conflicts });
    }
  });

  app.route("/api/solve").post((req, res) => {
    // console.log("req.body :>> ", req.body);
    const { puzzle } = req.body;
    if (!puzzle) return res.json({ error: "Required field missing" });
    if (puzzle.length != 81)
      return res.json({ error: "Expected puzzle to be 81 characters long" });
    if (/[^0-9.]/g.test(puzzle))
      return res.json({ error: "Invalid characters in puzzle" });
    let solvedString = solver.solve(puzzle);
    if (!solvedString) return res.json({ error: "Puzzle cannot be solved" });
    return res.json({ solution: solvedString });
  });
};

//
