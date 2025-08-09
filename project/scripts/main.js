
function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; 

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const saleTag = product.sale ? '<span class="sale-tag">Sale!</span>' : '';

        productCard.innerHTML = `
            ${saleTag}
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

const shoes = [
    { name: "Running Sneaker", price: 89.99, image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/runningshoes-2048px-09522.jpg?auto=webp&quality=75&width=1024", sale: false },
    { name: "Casual Loafer", price: 65.50, image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27845830/2024/2/26/9e6b17c2-73de-4757-980b-8a74cd070dcb1708925509722MastHarbourMenColourblockedSuedeLoafers1.jpg", sale: true },
    { name: "Hiking Boot", price: 120.00, image: "https://cdn.thewirecutter.com/wp-content/media/2023/12/hikingboots-2048px-7708.jpg?auto=webp&quality=75&width=1024", sale: false },
    { name: "Formal Oxford", price: 99.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ6SIBO7itXUnfakMIqvmK5PdwdIUnzAAH5w&s", sale: true },
];

displayProducts(shoes);

const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        localStorage.setItem('newsletterEmail', email);

        alert(`Thank you for subscribing, ${email}!`);
        emailInput.value = '';
    });
}

function updateFooter() {
    const currentYearSpan = document.getElementById('current-year');
    const lastModifiedAnchor = document.getElementById('last-modified');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedAnchor) {
        lastModifiedAnchor.textContent = `Last Modified: ${document.lastModified}`;
    }
}

updateFooter();