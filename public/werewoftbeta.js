// Define roles for the Werewolf game
var member = prompt("How many people in your party")
function playerdead(){
  player = player - 1
  document.getElementById("result").innerHTML="เหลือ " + player + " คน"
}
if (member == 5){
    var player = 5
    const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue'];
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
  var note;
  document.getElementById("My_note").onclick = function(){
  note = document.getElementById("Note").value;
  document.getElementById("Shownote").innerHTML += note +"<br>";
  } 
  
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function RestartGame(){

    shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();
      player = 0
      player = player + 5
      document.getElementById("result").innerHTML="เหลือ " + player + " คน"
      document.getElementById("history").innerHTML ="";
      document.getElementById("Shownote").innerHTML ="";
    }

    function startGame() {
      players = [];
      for (let i = 1; i <= member; i++) {
        var name_player = prompt("ชื่อ")
        players.push({ id: name_player, role: '' });
      }
      
      
      shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

    }

    function displayPlayercardFormod(){
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id} - ${player.role}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function displayPlayerCards() {
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
    
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);

        

      });
    }
    
    function revealRole(playerId) {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} เป็น ${player.role}`);
    }
    //----------------------------------------------------------------------
    let votingPhase = false; 

    function startVotingPhase() {
      if (votingPhase) {
        alert('พร้อมสำหรับการโหวต');
        return;
      }
    
      if (players.some(player => player.role === '')) {
        alert('Roles have not been assigned to all players. Start the game first.');
        return;
      }
    
      votingPhase = true;


      players.forEach(player => {
        player.votes = 0;
      });
      alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
    }
    
    function voteForPlayer(playerId) {
      if (!votingPhase) {
        alert('It\'s not the voting phase yet!');
        return;
      }
    
      const votedPlayer = players.find(player => player.id === playerId);

      votedPlayer.votes++;

      

      alert(`${votedPlayer.id} ตาย`);
      playerdead()
      document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
      changeCardColor(votedPlayer);


      checkEliminationStatus();
    }
    
    function changeCardColor(playerId) {
      const playerCard = document.getElementById(`player-${playerId}-dead`);
    }
    function checkEliminationStatus() {
      const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
        currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
      );
    
      const eliminationThreshold = Math.ceil(players.length / 2);
    
      if (maxVotesPlayer.votes >= eliminationThreshold) {
        markPlayerAsDead(maxVotesPlayer);
    
        endVotingPhase();
      }
    }

    function endVotingPhase() {
    votingPhase = false;

    alert('การโหวตได้สิ้นสุดลง');
    
    }
    function revealRole(playerId) {
      if (votingPhase) {
        voteForPlayer(playerId);
      } else {
        const player = players.find(p => p.id === playerId);
        alert(`${player.id} is a ${player.role}`); 
      }
    }
    function markPlayerAsDead(player) {
    player.isAlive = false;
    
    alert(`Player ${player.id} (${player.role}) ตาย.`);
    playerdead()
    function updatePlayerCards() {
      players.forEach(player => {
        const playerCard = document.getElementById(`player-${player.id}`);
        
        if (!player.isAlive) {
          playerCard.classList.add('dead');
        } else {
          playerCard.classList.remove('dead');
        }
      });
    }
}
}
if (member == 6){
  var player = 6
  const roles = ['Villager-blue', 'Silence witch-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Witch-red'];
  document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
  var note;
  document.getElementById("My_note").onclick = function(){
  note = document.getElementById("Note").value;
  document.getElementById("Shownote").innerHTML += note +"<br>";
  } 
  
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function RestartGame(){

    shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();
      player = 0
      player = player + 6
      document.getElementById("result").innerHTML="เหลือ " + player + " คน"
      document.getElementById("history").innerHTML ="";
      document.getElementById("Shownote").innerHTML ="";
    }

    function startGame() {
      players = [];
      for (let i = 1; i <= member; i++) {
        var name_player = prompt("ชื่อ")
        players.push({ id: name_player, role: '' });
      }
      
      
      shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

    }

    function displayPlayercardFormod(){
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id} - ${player.role}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function displayPlayerCards() {
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
    
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function revealRole(playerId) {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} เป็น ${player.role}`);
    }
    //----------------------------------------------------------------------
    let votingPhase = false; 

    function startVotingPhase() {
      if (votingPhase) {
        alert('พร้อมสำหรับการโหวต');
        return;
      }
    
      if (players.some(player => player.role === '')) {
        alert('Roles have not been assigned to all players. Start the game first.');
        return;
      }
    
      votingPhase = true;


      players.forEach(player => {
        player.votes = 0;
      });
      alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
    }
    
    function voteForPlayer(playerId) {
      if (!votingPhase) {
        alert('It\'s not the voting phase yet!');
        return;
      }
    
      const votedPlayer = players.find(player => player.id === playerId);

      votedPlayer.votes++;

      alert(`${votedPlayer.id} ตาย`);
      playerdead()
      document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
      changeCardColor(votedPlayer);


      checkEliminationStatus();
    }
    
    function changeCardColor(playerId) {
      const playerCard = document.getElementById(`player-${playerId}`);
    }
    function checkEliminationStatus() {
      const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
        currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
      );
    
      const eliminationThreshold = Math.ceil(players.length / 2);
    
      if (maxVotesPlayer.votes >= eliminationThreshold) {
        markPlayerAsDead(maxVotesPlayer);
    
        endVotingPhase();
      }
    }

    function endVotingPhase() {
    votingPhase = false;

    alert('การโหวตได้สิ้นสุดลง');
    
    }
    function revealRole(playerId) {
      if (votingPhase) {
        voteForPlayer(playerId);
      } else {
        const player = players.find(p => p.id === playerId);
        alert(`${player.id} is a ${player.role}`); 
      }
    }
    function markPlayerAsDead(player) {
    player.isAlive = false;
    
    alert(`Player ${player.id} (${player.role}) ตาย.`);
    playerdead()
    function updatePlayerCards() {
      players.forEach(player => {
        const playerCard = document.getElementById(`player-${player.id}`);
        
        if (!player.isAlive) {
          playerCard.classList.add('dead');
        } else {
          playerCard.classList.remove('dead');
        }
      });
    }
}
}
if (member == 7){
  var player = 7
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Silence witch-blue'];
  document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
  var note;
  document.getElementById("My_note").onclick = function(){
  note = document.getElementById("Note").value;
  document.getElementById("Shownote").innerHTML += note +"<br>";
  } 
  
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function RestartGame(){

    shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

      player = 0
      player = player + 7
      document.getElementById("result").innerHTML="เหลือ " + player + " คน"
      document.getElementById("history").innerHTML ="";
      document.getElementById("Shownote").innerHTML ="";
    }

    function startGame() {
      players = [];
      for (let i = 1; i <= member; i++) {
        var name_player = prompt("ชื่อ")
        players.push({ id: name_player, role: '' });
      }
      
      
      shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

    }

    function displayPlayercardFormod(){
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id} - ${player.role}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function displayPlayerCards() {
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
    
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function revealRole(playerId) {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} เป็น ${player.role}`);
    }
    //----------------------------------------------------------------------
    let votingPhase = false; 

    function startVotingPhase() {
      if (votingPhase) {
        alert('พร้อมสำหรับการโหวต');
        return;
      }
    
      if (players.some(player => player.role === '')) {
        alert('Roles have not been assigned to all players. Start the game first.');
        return;
      }
    
      votingPhase = true;


      players.forEach(player => {
        player.votes = 0;
      });
      alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
    }
    
    function voteForPlayer(playerId) {
      if (!votingPhase) {
        alert('It\'s not the voting phase yet!');
        return;
      }
    
      const votedPlayer = players.find(player => player.id === playerId);

      votedPlayer.votes++;

      alert(`${votedPlayer.id} ตาย`);
      playerdead()
      document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
      changeCardColor(votedPlayer);


      checkEliminationStatus();
    }
    
    function changeCardColor(playerId) {
      const playerCard = document.getElementById(`player-${playerId}`);
    }
    function checkEliminationStatus() {
      const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
        currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
      );
    
      const eliminationThreshold = Math.ceil(players.length / 2);
    
      if (maxVotesPlayer.votes >= eliminationThreshold) {
        markPlayerAsDead(maxVotesPlayer);
    
        endVotingPhase();
      }
    }

    function endVotingPhase() {
    votingPhase = false;

    alert('การโหวตได้สิ้นสุดลง');
    
    }
    function revealRole(playerId) {
      if (votingPhase) {
        voteForPlayer(playerId);
      } else {
        const player = players.find(p => p.id === playerId);
        alert(`${player.id} is a ${player.role}`); 
      }
    }
    function markPlayerAsDead(player) {
    player.isAlive = false;
    
    alert(`Player ${player.id} (${player.role}) ตาย.`);
    playerdead()
    function updatePlayerCards() {
      players.forEach(player => {
        const playerCard = document.getElementById(`player-${player.id}`);
        
        if (!player.isAlive) {
          playerCard.classList.add('dead');
        } else {
          playerCard.classList.remove('dead');
        }
      });
    }
}
}
if (member == 8){
  var player = 8
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue'];
  document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
  var note;
  document.getElementById("My_note").onclick = function(){
  note = document.getElementById("Note").value;
  document.getElementById("Shownote").innerHTML += note +"<br>";
  } 
  
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function RestartGame(){

    shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

      player = 0
      player = player + 8
      document.getElementById("result").innerHTML="เหลือ " + player + " คน"
      document.getElementById("history").innerHTML ="";
      document.getElementById("Shownote").innerHTML ="";
    }

    function startGame() {
      players = [];
      for (let i = 1; i <= member; i++) {
        var name_player = prompt("ชื่อ")
        players.push({ id: name_player, role: '' });
      }
      
      
      shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

    }

    function displayPlayercardFormod(){
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id} - ${player.role}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function displayPlayerCards() {
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
    
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function revealRole(playerId) {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} เป็น ${player.role}`);
    }
    //----------------------------------------------------------------------
    let votingPhase = false; 

    function startVotingPhase() {
      if (votingPhase) {
        alert('พร้อมสำหรับการโหวต');
        return;
      }
    
      if (players.some(player => player.role === '')) {
        alert('Roles have not been assigned to all players. Start the game first.');
        return;
      }
    
      votingPhase = true;


      players.forEach(player => {
        player.votes = 0;
      });
      alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
    }
    
    function voteForPlayer(playerId) {
      if (!votingPhase) {
        alert('It\'s not the voting phase yet!');
        return;
      }
    
      const votedPlayer = players.find(player => player.id === playerId);

      votedPlayer.votes++;

      alert(`${votedPlayer.id} ตาย`);
      playerdead()
      document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
      changeCardColor(votedPlayer);


      checkEliminationStatus();
    }
    
    function changeCardColor(playerId) {
      const playerCard = document.getElementById(`player-${playerId}`);
    }
    function checkEliminationStatus() {
      const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
        currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
      );
    
      const eliminationThreshold = Math.ceil(players.length / 2);
    
      if (maxVotesPlayer.votes >= eliminationThreshold) {
        markPlayerAsDead(maxVotesPlayer);
    
        endVotingPhase();
      }
    }

    function endVotingPhase() {
    votingPhase = false;

    alert('การโหวตได้สิ้นสุดลง');
    
    }
    function revealRole(playerId) {
      if (votingPhase) {
        voteForPlayer(playerId);
      } else {
        const player = players.find(p => p.id === playerId);
        alert(`${player.id} is a ${player.role}`); 
      }
    }
    function markPlayerAsDead(player) {
    player.isAlive = false;
    
    alert(`Player ${player.id} (${player.role}) ตาย.`);
    playerdead()
    function updatePlayerCards() {
      players.forEach(player => {
        const playerCard = document.getElementById(`player-${player.id}`);
        
        if (!player.isAlive) {
          playerCard.classList.add('dead');
        } else {
          playerCard.classList.remove('dead');
        }
      });
    }
}
}
if (member == 9){
  var player = 9
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-yellow'];
  document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
  var note;
  document.getElementById("My_note").onclick = function(){
  note = document.getElementById("Note").value;
  document.getElementById("Shownote").innerHTML += note +"<br>";
  } 
  
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function RestartGame(){

    shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

      player = 0
      player = player + 9
      document.getElementById("result").innerHTML="เหลือ " + player + " คน"
      document.getElementById("history").innerHTML ="";
      document.getElementById("Shownote").innerHTML ="";
    }

    function startGame() {
      players = [];
      for (let i = 1; i <= member; i++) {
        var name_player = prompt("ชื่อ")
        players.push({ id: name_player, role: '' });
      }
      
      
      shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

    }

    function displayPlayercardFormod(){
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id} - ${player.role}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function displayPlayerCards() {
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
    
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function revealRole(playerId) {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} เป็น ${player.role}`);
    }
    //----------------------------------------------------------------------
    let votingPhase = false; 

    function startVotingPhase() {
      if (votingPhase) {
        alert('พร้อมสำหรับการโหวต');
        return;
      }
    
      if (players.some(player => player.role === '')) {
        alert('Roles have not been assigned to all players. Start the game first.');
        return;
      }
    
      votingPhase = true;


      players.forEach(player => {
        player.votes = 0;
      });
      alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
    }
    
    function voteForPlayer(playerId) {
      if (!votingPhase) {
        alert('It\'s not the voting phase yet!');
        return;
      }
    
      const votedPlayer = players.find(player => player.id === playerId);

      votedPlayer.votes++;

      alert(`${votedPlayer.id} ตาย`);
      playerdead()
      document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
      changeCardColor(votedPlayer);


      checkEliminationStatus();
    }
    
    function changeCardColor(playerId) {
      const playerCard = document.getElementById(`player-${playerId}`);
    }
    function checkEliminationStatus() {
      const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
        currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
      );
    
      const eliminationThreshold = Math.ceil(players.length / 2);
    
      if (maxVotesPlayer.votes >= eliminationThreshold) {
        markPlayerAsDead(maxVotesPlayer);
    
        endVotingPhase();
      }
    }

    function endVotingPhase() {
    votingPhase = false;

    alert('การโหวตได้สิ้นสุดลง');
    
    }
    function revealRole(playerId) {
      if (votingPhase) {
        voteForPlayer(playerId);
      } else {
        const player = players.find(p => p.id === playerId);
        alert(`${player.id} is a ${player.role}`); 
      }
    }
    function markPlayerAsDead(player) {
    player.isAlive = false;
    
    alert(`Player ${player.id} (${player.role}) ตาย.`);
    playerdead()
    function updatePlayerCards() {
      players.forEach(player => {
        const playerCard = document.getElementById(`player-${player.id}`);
        
        if (!player.isAlive) {
          playerCard.classList.add('dead');
        } else {
          playerCard.classList.remove('dead');
        }
      });
    }
}
}
if (member == 10){
  var player = 10
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Cursed-half_red_half_blue'];
  document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
  var note;
  document.getElementById("My_note").onclick = function(){
  note = document.getElementById("Note").value;
  document.getElementById("Shownote").innerHTML += note +"<br>";
  } 
  
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    function RestartGame(){

    shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

      player = 0
      player = player + 10
      document.getElementById("result").innerHTML="เหลือ " + player + " คน"
      document.getElementById("history").innerHTML ="";
      document.getElementById("Shownote").innerHTML ="";
    }

    function startGame() {
      players = [];
      for (let i = 1; i <= member; i++) {
        var name_player = prompt("ชื่อ")
        players.push({ id: name_player, role: '' });
      }
      
      
      shuffleArray(roles);
      
      players.forEach((player, index) => {
        player.role = roles[index];
      });
      
      displayPlayerCards();

    }

    function displayPlayercardFormod(){
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id} - ${player.role}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function displayPlayerCards() {
      const playerListContainer = document.getElementById('player-list');
      playerListContainer.innerHTML = '';
    
      players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.textContent = `Player ${player.id}`;
        playerCard.addEventListener('click', () => revealRole(player.id));
        playerListContainer.appendChild(playerCard);
      });
    }
    
    function revealRole(playerId) {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} เป็น ${player.role}`);
    }
    //----------------------------------------------------------------------
    let votingPhase = false; 

    function startVotingPhase() {
      if (votingPhase) {
        alert('พร้อมสำหรับการโหวต');
        return;
      }
    
      if (players.some(player => player.role === '')) {
        alert('Roles have not been assigned to all players. Start the game first.');
        return;
      }
    
      votingPhase = true;


      players.forEach(player => {
        player.votes = 0;
      });
      alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
    }
    
    function voteForPlayer(playerId) {
      if (!votingPhase) {
        alert('It\'s not the voting phase yet!');
        return;
      }
    
      const votedPlayer = players.find(player => player.id === playerId);

      votedPlayer.votes++;

      alert(`${votedPlayer.id} ตาย`);
      playerdead()
      document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
      changeCardColor(votedPlayer);


      checkEliminationStatus();
    }
    
    function changeCardColor(playerId) {
      const playerCard = document.getElementById(`player-${playerId}`);
    }
    function checkEliminationStatus() {
      const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
        currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
      );
    
      const eliminationThreshold = Math.ceil(players.length / 2);
    
      if (maxVotesPlayer.votes >= eliminationThreshold) {
        markPlayerAsDead(maxVotesPlayer);
    
        endVotingPhase();
      }
    }

    function endVotingPhase() {
    votingPhase = false;

    alert('การโหวตได้สิ้นสุดลง');
    
    }
    function revealRole(playerId) {
      if (votingPhase) {
        voteForPlayer(playerId);
      } else {
        const player = players.find(p => p.id === playerId);
        alert(`${player.id} is a ${player.role}`); 
      }
    }
    function markPlayerAsDead(player) {
    player.isAlive = false;
    
    alert(`Player ${player.id} (${player.role}) ตาย.`);
    playerdead()
    function updatePlayerCards() {
      players.forEach(player => {
        const playerCard = document.getElementById(`player-${player.id}`);
        
        if (!player.isAlive) {
          playerCard.classList.add('dead');
        } else {
          playerCard.classList.remove('dead');
        }
      });
    }
}
}
if (member == 11){
  var player = 11
  const roles = ['Witch-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Cursed-half_red_half_blue'
,'Villager-blue'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 11
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";
  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 12){
  var player = 12
  const roles = ['Witch-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Cursed-half_red_half_blue'
,'Villager-blue','Cupid-blue'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 12
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";
  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 13){
  var player = 13
  const roles = ['Witch-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Cursed-half_red_half_blue'
,'Villager-blue','Apprentice Seer-blue','Cupid-blue'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 13
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";

  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 14){
  var player = 14
  const roles = ['Witch-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Villager-blue'
,'Lycan','Cursed-half_red_half_blue','Cupid-blue','Apprentice Seer-blue'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 14
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";
  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 15){
  var player = 15
  const roles = ['Witch-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Apprentice Seer-blue','Villager-blue','Silence witch-blue','Fool-Yellow','Villager-blue'
,'Lycan','Cursed-half_red_half_blue','Cupid-blue','Mayor-blue','Bomber-blue'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 15
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";
  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 16){
  var player = 16
  const roles = ['Witch-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Apprentice Seer-blue'
,'Villager-blue','Cursed-half_red_half_blue','Cupid-blue','Mayor-blue','Bomber-blue','Werewolf-red'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 16
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";
  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 17){
  var player = 17
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Werewolf-red'
,'Apprentice Seer-blue','Cursed-half_red_half_blue','Cupid-blue','Mayor-blue','Bomber-blue','Werewolf-red','Witch-blue'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 17
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";

  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 18){
  var player = 18
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Werewolf-red'
,'Apprentice Seer-blue','Cursed-half_red_half_blue','Cupid-blue','Mayor-blue','Bomber-blue','Werewolf-red','Witch-blue','Villager Idiot'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 18
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";
  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 19){
  var player = 19
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Werewolf-red'
,'Apprentice Seer-blue','Cursed-half_red_half_blue','Cupid-blue','Mayor-blue','Bomber-blue','Werewolf-red','Witch-blue','Villager Idiot','Lycan'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 19
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";

  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}
if (member == 20){
  var player = 20
  const roles = ['Villager-blue', 'Villager-blue', 'Werewolf-red', 'Seer-blue','Bodyguard-blue','Wolf cub-red','Villager-blue','Silence witch-blue','Fool-Yellow','Werewolf-red'
,'Apprentice Seer-blue','Cursed-half_red_half_blue','Cupid-blue','Mayor-blue','Bomber-blue','Werewolf-red','Witch-blue','Villager Idiot','Lycan','Doppelganger'];
document.getElementById("result").innerHTML="เหลือ " + player + " คน"
  
var note;
document.getElementById("My_note").onclick = function(){
note = document.getElementById("Note").value;
document.getElementById("Shownote").innerHTML += note +"<br>";
} 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function RestartGame(){

  shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

    player = 0
    player = player + 20
    document.getElementById("result").innerHTML="เหลือ " + player + " คน"
    document.getElementById("history").innerHTML ="";
    document.getElementById("Shownote").innerHTML ="";
  }

  function startGame() {
    players = [];
    for (let i = 1; i <= member; i++) {
      var name_player = prompt("ชื่อ")
      players.push({ id: name_player, role: '' });
    }
    
    
    shuffleArray(roles);
    
    players.forEach((player, index) => {
      player.role = roles[index];
    });
    
    displayPlayerCards();

  }

  function displayPlayercardFormod(){
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id} - ${player.role}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function displayPlayerCards() {
    const playerListContainer = document.getElementById('player-list');
    playerListContainer.innerHTML = '';
  
    players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.classList.add('player-card');
      playerCard.textContent = `Player ${player.id}`;
      playerCard.addEventListener('click', () => revealRole(player.id));
      playerListContainer.appendChild(playerCard);
    });
  }
  
  function revealRole(playerId) {
    const player = players.find(p => p.id === playerId);
    alert(`${player.id} เป็น ${player.role}`);
  }
  //----------------------------------------------------------------------
  let votingPhase = false; 

  function startVotingPhase() {
    if (votingPhase) {
      alert('พร้อมสำหรับการโหวต');
      return;
    }
  
    if (players.some(player => player.role === '')) {
      alert('Roles have not been assigned to all players. Start the game first.');
      return;
    }
  
    votingPhase = true;


    players.forEach(player => {
      player.votes = 0;
    });
    alert('โปรดพิจารณาดูดีๆก่อนโหวตเพื่อนออกนะ');
  }
  
  function voteForPlayer(playerId) {
    if (!votingPhase) {
      alert('It\'s not the voting phase yet!');
      return;
    }
  
    const votedPlayer = players.find(player => player.id === playerId);

    votedPlayer.votes++;

    alert(`${votedPlayer.id} ตาย`);
    playerdead()
    document.getElementById("history").innerHTML +=(`Player ${votedPlayer.id} เป็น ${votedPlayer.role} ตาย <br>`);
    changeCardColor(votedPlayer);


    checkEliminationStatus();
  }
  
  function changeCardColor(playerId) {
    const playerCard = document.getElementById(`player-${playerId}`);
  }
  function checkEliminationStatus() {
    const maxVotesPlayer = players.reduce((maxPlayer, currentPlayer) =>
      currentPlayer.votes > maxPlayer.votes ? currentPlayer : maxPlayer
    );
  
    const eliminationThreshold = Math.ceil(players.length / 2);
  
    if (maxVotesPlayer.votes >= eliminationThreshold) {
      markPlayerAsDead(maxVotesPlayer);
  
      endVotingPhase();
    }
  }

  function endVotingPhase() {
  votingPhase = false;

  alert('การโหวตได้สิ้นสุดลง');
  
  }
  function revealRole(playerId) {
    if (votingPhase) {
      voteForPlayer(playerId);
    } else {
      const player = players.find(p => p.id === playerId);
      alert(`${player.id} is a ${player.role}`); 
    }
  }
  function markPlayerAsDead(player) {
  player.isAlive = false;
  
  alert(`Player ${player.id} (${player.role}) ตาย.`);
  playerdead()
  function updatePlayerCards() {
    players.forEach(player => {
      const playerCard = document.getElementById(`player-${player.id}`);
      
      if (!player.isAlive) {
        playerCard.classList.add('dead');
      } else {
        playerCard.classList.remove('dead');
      }
    });
  }
}
}


