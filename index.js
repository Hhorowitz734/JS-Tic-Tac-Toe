const cells = Array.from(document.querySelectorAll('.cell'));
const filled = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
const win_combs = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

console.log(cells);

cells.forEach(cell => cell.addEventListener('click', () => {
    if (filled[cells.indexOf(cell)] == -1){
        filled[cells.indexOf(cell)] = 1;
        cell.innerHTML = '0';
        if (!check_win(1)){
            computer_turn();
        }
        else {
            console.log('WIN!'); //Implement player win logic here
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
        //Display lose and pause game
    }
}

function check_win(player){
    //Write code here that takes a player (either 0 or 1) and returns if true if they won and false if they didn't
    for (let comb of win_combs){
        if (filled[comb[0]] == player && filled[comb[1]] == player && filled[comb[2]] == player){
            return true
        }
    }
    return false
}