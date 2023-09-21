// Function to fetch data from the COVID-19 India API
function fetchData() {
    fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
        .then(response => response.json())
        .then(data => {
            // Process the data as needed
            const latestData = data['TT']['dates'][Object.keys(data['TT']['dates']).pop()];
            document.getElementById('totalCases').textContent = `Total Cases: ${latestData.total.confirmed}`;
            document.getElementById('totalDeaths').textContent = `Total Deaths: ${latestData.total.deceased}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the fetchData function when the page loads
window.onload = fetchData;
