const phones = [
    {
        id: 1,
        name: "iPhone 14",
        price: 70000,
        ram: 6,
        storage: 128,
        battery: 3279,
        rating: 4.6,
        image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
    },
    {
        id: 2,
        name: "Samsung S23",
        price: 65000,
        ram: 8,
        storage: 256,
        battery: 3900,
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg"
    },
    {
        id: 3,
        name: "OnePlus 11",
        price: 55000,
        ram: 12,
        storage: 256,
        battery: 5000,
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg"
    }
];

const phoneA = document.getElementById("phoneA");
const phoneB = document.getElementById("phoneB");
const phoneC = document.getElementById("phoneC");
const comparisonDiv = document.getElementById("comparison");

[phoneA, phoneB, phoneC].forEach(select => {
    phones.forEach(phone => {
        select.add(new Option(phone.name, phone.id));
    });
});

phoneA.addEventListener("change", comparePhones);
phoneB.addEventListener("change", comparePhones);
phoneC.addEventListener("change", comparePhones);

function comparePhones() {
    const selectedPhones = [phoneA, phoneB, phoneC]
        .map(sel => phones.find(p => p.id == sel.value))
        .filter(Boolean);

    if (selectedPhones.length < 2) {
        comparisonDiv.innerHTML = "";
        return;
    }

    const lowestPrice = Math.min(...selectedPhones.map(p => p.price));
    const highestBattery = Math.max(...selectedPhones.map(p => p.battery));

    comparisonDiv.innerHTML = selectedPhones
        .map(phone => renderCard(phone, lowestPrice, highestBattery))
        .join("");
}

function renderCard(phone, bestPrice, bestBattery) {

    const { name, price, ram, storage, battery, rating, image } = phone;

    return `
        <div class="card">
            ${price === bestPrice && battery === bestBattery 
                ? `<div class="badge">Best Value</div>` 
                : ""
            }

            <img src="${image}" alt="${name}">
            <h2>${name}</h2>

            <p class="spec ${price === bestPrice ? 'highlight' : 'bad'}">
                💰 ₹${price}
            </p>
            <p class="spec">🧠 RAM: ${ram} GB</p>
            <p class="spec">💾 Storage: ${storage} GB</p>
            <p class="spec ${battery === bestBattery ? 'highlight' : ''}">
                🔋 Battery: ${battery} mAh
            </p>
            <p class="spec">⭐ Rating: ${rating}</p>
        </div>
    `;
}
