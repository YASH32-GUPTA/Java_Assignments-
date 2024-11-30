document.getElementById("fetchData").addEventListener("click", () => {
    const apiUrl = "https://dog.ceo/api/breeds/image/random"; // Dog API endpoint
    const dataDiv = document.getElementById("data");

    // Clear previous data or messages
    dataDiv.innerHTML = "Loading...";

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display fetched data
            dataDiv.innerHTML = `
                <p>Here is a random dog image for you:</p>
                <img src="${data.message}" alt="Random Dog" style="max-width: 100%; height: auto;">
            `;
        })
        .catch(error => {
            // Display error message
            dataDiv.innerHTML = `<p class="error">Error fetching data: ${error.message}</p>`;
        });
});
