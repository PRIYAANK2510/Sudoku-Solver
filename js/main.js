import { drawBoard } from "./draw_board.js";
import { insertValues, solve, populateValues} from "./solver.js";

const solveButton = document.querySelector(".solve-button")

function main() {
    solveButton.addEventListener('click', () => {
        insertValues();

        if(solve()) {
            populateValues();
        } else {
            alert("Can't solve this puzzle!");
        }
    })
}
window.onload = function() {
    drawBoard();
}
main();