const cells = Array.from(document.querySelectorAll('.cell'));
const filled = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

console.log(cells);

cells.forEach(cell => cell.addEventListener('click', () => {
    if (filled[cells.indexOf(cell)] == -1){
        filled[cells.indexOf(cell)] = 1;
        cell.innerHTML = '0';
        if (!check_win(1)){
            computer_turn();
        }
    }
}));

function computer_turn(){
    // We will replace this with an AI that uses the Minimax algorithm
    x = Math.floor(Math.random() * 9)
    while (filled[x] != -1){
        x = Math.floor(Math.random() * 9)
        console.log(x);
    }
    filled[x] = 0;
    cells[x].innerHTML = 'X';
    if (check_win(0)){
        //Insert what to do if AI wins here
    }
}

function check_win(player){
    //Write code here that takes a player (either 0 or 1) and returns if true if they won and false if they didn't
}