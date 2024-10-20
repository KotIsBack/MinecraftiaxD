// Fetch the server status from the mcapi.us API
fetch('https://mcapi.us/server/status?ip=these-register.gl.joinmc.link&port=25565') // Replace with your server's IP and port
    .then(response => response.json())
    .then(data => {
        const playersOnline = document.getElementById('players-online');
        const serverStatus = document.getElementById('server-status-message');
        
        // Check if the server is online
        if (data.online) {
            serverStatus.textContent = "Server is Online!";
            playersOnline.textContent = `${data.players.now} players online`; // Show current players
        } else {
            serverStatus.textContent = "Server is Offline!";
            playersOnline.textContent = "";
        }
    })
    .catch(error => {
        console.log('Error fetching server status:', error);
        document.getElementById('server-status-message').textContent = "Error loading status";
        document.getElementById('players-online').textContent = "";
    });

    // Sample event data
const events = {
    1: { title: "Server Maintenance", description: "Scheduled maintenance for server optimization." },
    10: { title: "Building Contest", description: "Join us for a building contest! Prizes for the best builds!" },
    15: { title: "Community Game Night", description: "Play games with the community and win prizes!" },
    31: {title: "Halloween", description:"Make sure to bring your scariest skin for tonight!"},
};

// Get modal elements
const modal = document.getElementById("event-modal");
const span = document.getElementsByClassName("close")[0];

// Function to open the modal with event details
function openModal(date) {
    const event = events[date] || { title: "No Events", description: "No events scheduled." };
    document.getElementById("event-title").textContent = event.title;
    document.getElementById("event-description").textContent = event.description;
    modal.style.display = "block";
}

// Function to close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Attach click event to each date
const dates = document.querySelectorAll('.date');
dates.forEach(date => {
    date.addEventListener('click', () => {
        openModal(date.textContent);
    });
});
