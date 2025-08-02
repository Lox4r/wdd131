// Function to update the review counter
function updateReviewCounter() {
    // Get the current count from local storage, or default to 0
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    // Increment the counter
    reviewCount++;

    // Save the new count back to local storage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the updated count on the page
    const counterElement = document.getElementById('reviewCounter');
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}

// Function to set the last modified date
function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}

// Call the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateReviewCounter();
    setLastModified();
});