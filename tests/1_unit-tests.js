const chai = require("chai");
const assert = chai.assert;

const Solver = require("../controllers/sudoku-solver.js");
let solver = new Solver();

let validPuzzle =
  "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.";
suite("UnitTests", () => {
  suite("solver tests", () => {
    // Logic handles a valid puzzle string of 81 characters
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });

    // Logic handles a puzzle string with invalid characters (not 1-9 or .)
    // test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", (done) => {
    //   let invalidPuzzle =
    //     "1.5..2.84..63.12.7.2..5...g..9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.";
    //   assert.equal(solver.solve(invalidPuzzle), false);
    //   done();
    // });
    // Logic handles a puzzle string that is not 81 characters in length
    // Logic handles a valid row placement
    // Logic handles an invalid row placement
    // Logic handles a valid column placement
    // Logic handles an invalid column placement
    // Logic handles a valid region (3x3 grid) placement
    // Logic handles an invalid region (3x3 grid) placement
    // Valid puzzle strings pass the solver
    // Invalid puzzle strings fail the solver
    // Solver returns the expected solution for an incomplete puzzle
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
      //make an string of numbers with 81 characters length
      let complete =
        "135762984946381257728459613694517832812936745357824196473298561581673429269145378";
      assert.equal(solver.solve(validPuzzle), complete);
      done();
    });
  });
});
