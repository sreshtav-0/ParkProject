function findPark() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    // Use the browser's Geolocation API to get the user's coordinates
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            findNearestPark(latitude, longitude);
        }, () => {
            alert('Failed to get your location');
        });
    } else {
        alert('Geolocation is not supported by this browser');
    }
}

function findNearestPark(lat, lng) {
    // Mock data for nearest park
    const park = {
        name: 'Central Park',
        location: {
            address: 'New York, NY 10024, USA',
            distance: '500'
        }
    };
    displayResult(park);
}

function displayResult(park) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Nearest Park</h2>
        <p>Name: ${park.name}</p>
        <p>Address: ${park.location.address}</p>
        <p>Distance: ${park.location.distance} meters</p>
    `;
}