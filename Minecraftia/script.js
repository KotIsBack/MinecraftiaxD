// Fetch the server status from an API (replace with your actual server IP and API URL)
fetch('https://api.minetools.eu/ping/your.server.ip/25565')
    .then(response => response.json())
    .then(data => {
        const playersOnline = document.getElementById('players-online');
        if (data.players) {
            playersOnline.textContent = data.players.online;
        } else {
            playersOnline.textContent = "Server offline";
        }
    })
    .catch(error => {
        console.log('Error fetching server status:', error);
        document.getElementById('players-online').textContent = "Error loading";
    });
