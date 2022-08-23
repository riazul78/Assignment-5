const playersArr =[];
function display(playersHere){
    const playersList = document.getElementById('ol');
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
    
    if (playersArr.length >= 5) {
        alert('maximum players added');
        const ol = document.getElementById('ol li');
        ol.style.display = 'none';
        
    }
    else {
        const playerBtn = player;
        playerBtn.setAttribute('disabled', '');  
    }

    const players = 
    {
        playerName:playerName
    }
    playersArr.push(players);
    display(playersArr);
}