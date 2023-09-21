document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the CityBikes API
    fetch("http://api.citybik.es/v2/networks")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Display network data on the webpage
            const networksDiv = document.getElementById("networks");
            networksDiv.innerHTML = generateNetworkList(data.networks);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

// Function to generate HTML for the network list
function generateNetworkList(networks) {
    let html = "<ul>";
    networks.forEach(network => {
        html += `<li><strong>${network.name}</strong> - ${network.location.city}, ${network.location.country}</li>`;
    });
    html += "</ul>";
    return html;
}
