const cells = Array.from(document.querySelectorAll('.cell'));
const filled = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

console.log(cells);

cells.forEach(cell => cell.addEventListener('click', () => {
    if (filled[cells.indexOf(cell)] == -1){
        filled[cells.indexOf(cell)] = 1;
        cell.innerHTML = '0'
        computer_turn();
    }
}));

function computer_turn(){
    // Insert logic for computer's turn here
}