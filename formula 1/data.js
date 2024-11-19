// Driver Standings Chart
const driverStandingsCtx = document.getElementById('driver-standings-chart').getContext('2d');
const driverStandingsChart = new Chart(driverStandingsCtx, {
    type: 'bar',
    data: {
        labels: ['Driver 1', 'Driver 2', 'Driver 3'], // Example labels
        datasets: [{
            label: 'Points',
            data: [150, 120, 90], // Example data
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)'],
            borderWidth: 1
        }]
    }
});

// Lap Times Chart
const lapTimesCtx = document.getElementById('lap-times-chart').getContext('2d');
const lapTimesChart = new Chart(lapTimesCtx, {
    type: 'line',
    data: {
        labels: ['Lap 1', 'Lap 2', 'Lap 3'],
        datasets: [{
            label: 'Driver 1',
            data: [75.2, 74.5, 73.8], // Example data for lap times in seconds
            borderColor: 'rgb(255, 99, 132)',
            fill: false
        }]
    }
});

// Fastest Laps Chart
const fastestLapCtx = document.getElementById('fastest-lap-chart').getContext('2d');
const fastestLapChart = new Chart(fastestLapCtx, {
    type: 'bar',
    data: {
        labels: ['Driver 1', 'Driver 2', 'Driver 3'],
        datasets: [{
            label: 'Fastest Lap Time (Seconds)',
            data: [73.2, 74.1, 74.7], // Example fastest lap times
            backgroundColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }]
    }
});

// Pit Stop Efficiency Chart
const pitStopCtx = document.getElementById('pit-stop-chart').getContext('2d');
const pitStopChart = new Chart(pitStopCtx, {
    type: 'bar',
    data: {
        labels: ['Driver 1', 'Driver 2', 'Driver 3'],
        datasets: [{
            label: 'Pit Stop Time (Seconds)',
            data: [2.5, 2.7, 2.8], // Example data for pit stop times
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)'],
            borderWidth: 1
        }]
    }
});

// Top Speeds Chart
const topSpeedsCtx = document.getElementById('top-speeds-chart').getContext('2d');
const topSpeedsChart = new Chart(topSpeedsCtx, {
    type: 'bar',
    data: {
        labels: ['Driver 1', 'Driver 2', 'Driver 3'],
        datasets: [{
            label: 'Top Speed (km/h)',
            data: [350, 355, 340], // Example top speeds
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)'],
            borderWidth: 1
        }]
    }
});
