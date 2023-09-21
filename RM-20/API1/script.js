document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the Open Brewery DB API
    fetch("https://api.openbrewerydb.org/breweries")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Display brewery data on the webpage
            const breweriesDiv = document.getElementById("breweries");
            breweriesDiv.innerHTML = generateBreweryList(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

// Function to generate HTML for the brewery list
function generateBreweryList(breweries) {
    let html = "<ul>";
    breweries.forEach(brewery => {
        html += `<li><strong>${brewery.name}</strong> - ${brewery.city}, ${brewery.state}</li>`;
    });
    html += "</ul>";
    return html;
}
