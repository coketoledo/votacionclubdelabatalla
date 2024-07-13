Last login: Fri Jul 12 22:44:11 on ttys000
coketoledo@MacBook-Pro-de-Jorge ~ % // scripts.js
let votes = {
    team1: 0,
    team2: 0,
    team3: 0
};

function vote(team) {
    votes[team]++;
    updateResults();
}

function updateResults() {
    document.getElementById('team1-votes').innerText = votes.team1;
    document.getElementById('team2-votes').innerText = votes.team2;
    document.getElementById('team3-votes').innerText = votes.team3;
}






