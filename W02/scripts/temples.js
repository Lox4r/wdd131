function filterImages(category) {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the last modified date
    const lastModifiedDate = new Date(document.lastModified);

    // Format the date with proper padding for single digits
    const month = String(lastModifiedDate.getMonth() + 1).padStart(2, '0');
    const day = String(lastModifiedDate.getDate()).padStart(2, '0');
    const year = lastModifiedDate.getFullYear();
    const hours = String(lastModifiedDate.getHours()).padStart(2, '0');
    const minutes = String(lastModifiedDate.getMinutes()).padStart(2, '0');
    const seconds = String(lastModifiedDate.getSeconds()).padStart(2, '0');

    // Create formatted date string
    const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

    // Display the formatted date in the footer
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = formattedDate;
    }
});
