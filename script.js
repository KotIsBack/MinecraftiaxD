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

    // Sample event data
const events = {
    1: { title: "Server Maintenance", description: "Scheduled maintenance for server optimization." },
    10: { title: "Building Contest", description: "Join us for a building contest! Prizes for the best builds!" },
    15: { title: "Community Game Night", description: "Play games with the community and win prizes!" },
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
