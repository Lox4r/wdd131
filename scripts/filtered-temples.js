const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-33711-main.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    }
];

function displayTemples(filteredTemples) {
    const container = document.getElementById("templeContainer");
    container.innerHTML = "<h1>Latter-day Saint Temples</h1>";

    filteredTemples.forEach(temple => {
        const templeCard = `
            <div class="temple-card">
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            </div>
        `;
        container.innerHTML += templeCard;
    });
}

function filterTemples(criteria) {
    let filtered = temples;
    if (criteria === "old") {
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    } else if (criteria === "new") {
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    } else if (criteria === "large") {
        filtered = temples.filter(t => t.area > 90000);
    } else if (criteria === "small") {
        filtered = temples.filter(t => t.area < 10000);
    }
    displayTemples(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filterCriteria = event.target.dataset.filter;
            filterTemples(filterCriteria);
        });
    });
});

document.getElementById("lastModified").textContent = new Date().toLocaleString();
