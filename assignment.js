const playersArr =[];
function display(playersHere){
    const playersList = document.getElementById('ol');
    playersList.innerHTML = "";
    for(let i = 0; i < playersHere.length; i++){
           
             const allPlayers = playersHere[i].playerName;

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

// calculate-part
document.getElementById('calculate-btn').addEventListener('click', function(){
         const perPlayer = document.getElementById('per-player');
         const perCost = perPlayer.value;
         const totalCost = parseFloat(perCost)

         const perPlayerTotal = playersArr.length * totalCost;

         const playerExpenses = document.getElementById('player-expenses');
         playerExpenses.innerText = perPlayerTotal;
         perPlayer.value = '';
})
//  total-budget-part
document.getElementById('calculate-total-btn').addEventListener('click', function(){
         const manager = document.getElementById('manager');
         const managerValue =manager.value;
         const perManagerCost = parseFloat(managerValue);

         const coach = document.getElementById('coach');
         const coachValue =coach.value;
         const perCoachCost = parseFloat(coachValue);

         const playerExpenses = document.getElementById('player-expenses');
         const expensesValue = playerExpenses.innerText;
         const convertExpensesToNumber = parseFloat(expensesValue);

         const calculateTotal = convertExpensesToNumber + perManagerCost + perCoachCost;
        //  console.log(calculateTotal);

        const total = document.getElementById('total');
        total.innerText = calculateTotal;
})