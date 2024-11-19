// Function to show additional information when a button is clicked
function showMoreInfo(section) {
    const info = document.getElementById(`${section}-info`);
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}
function showFullMap() {
    document.getElementById("seating-info").classList.remove("hidden");
}

function hideFullMap() {
    document.getElementById("seating-info").classList.add("hidden");
}
function showMapOverlay() {
    document.getElementById("map-overlay").classList.remove("hidden");
}

function hideMapOverlay() {
    document.getElementById("map-overlay").classList.add("hidden");
}
