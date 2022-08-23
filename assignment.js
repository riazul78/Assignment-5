const playersArr =[];
function display(playersHere){
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = "";
    for(let i = 0; i < playersHere.length; i++){
           
             const allPlayers = playersArr[i].playerName;

             const li =document.createElement('li');
             li.innerText = allPlayers;
             playersList.appendChild(li);
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