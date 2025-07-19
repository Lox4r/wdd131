// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    // Adjusted temperature to meet the wind chill calculation criteria
    const temperature = 5;  // Changed from 15 to 5
    const windSpeed = 10;   // Still above 4.8 km/h
    const windChillElement = document.getElementById("wind-chill");
    const windChillNote = document.getElementById("wind-chill-note");

    // Wind chill is calculated only if temperature is 10°C or less and wind speed is greater than 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
        windChillNote.style.display = "none";
    } else {
        windChillElement.textContent = "N/A";
        windChillNote.style.display = "block";
    }
}

// Set Footer Information (specifically the current time)
function setFooterInfo() {
    // Get the current date and time
    const currentDate = new Date();

    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = formattedDate;
    }
}

// Event listener to run functions once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setFooterInfo();      // Call this to display the current time
    displayWindChill();   // Call this to display the wind chill (now it will calculate)
});