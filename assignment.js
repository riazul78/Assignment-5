const playersArr =[];
function display(){
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = "";
    for(let i = 0; i < 5; i++){
           
             const allPlayers = playersArr[i].playerName;

             const tr =document.createElement('tr');
             tr.innerHTML = `
             <td>${i + 1}</td>
             <td>${allPlayers}</td>
             `
             playersList.appendChild(tr);
    }

}
function selectPlayer(player){
    const playerName =player.parentNode.children[0].innerText;
    
    const players = {
        playerName:playerName
    }
    playersArr.push(players);
    
    display(playersArr);
}