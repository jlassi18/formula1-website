// Function to toggle the display of historical data within the same div
function toggleHistoricalData(button) {
    // Get the corresponding historical data div
    const historicalData = button.nextElementSibling;

    // Toggle the visibility of the historical data
    if (historicalData.style.display === "none" || historicalData.style.display === "") {
        historicalData.style.display = "block";
        button.textContent = "Hide Historical Data";
    } else {
        historicalData.style.display = "none";
        button.textContent = "View Historical Data";
    }
}
