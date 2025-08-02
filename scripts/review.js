
function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    reviewCount++;

    localStorage.setItem('reviewCount', reviewCount);

    const counterElement = document.getElementById('reviewCounter');
    if (counterElement) {
        counterElement.textContent = reviewCount;
    }
}

function setLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateReviewCounter();
    setLastModified();
});