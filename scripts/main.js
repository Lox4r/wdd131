// Product Array
const products = [
    {
        id: 'fc-1888',
        name: 'flux capacitor'
    },
    {
        id: 'fc-2050',
        name: 'power laces'
    },
    {
        id: 'fs-1987',
        name: 'time circuits'
    },
    {
        id: 'ac-2000',
        name: 'low voltage reactor'
    },
    {
        id: 'jj-1969',
        name: 'warp equalizer'
    }
];

// Function to populate the product dropdown
function populateProductDropdown() {
    const selectElement = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use id for the value
        option.textContent = product.name; // Use name for the display text
        selectElement.appendChild(option);
    });
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
    populateProductDropdown();
    setLastModified();
});