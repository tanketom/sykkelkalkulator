// Set default values
window.onload = function() {
    document.getElementById('purchasePrice').value = 32000; // Default pris da kjøpt
    document.getElementById('purchaseDate').value = '2020-07'; // Default tidspunkt kjøpt
    document.getElementById('kilometers').value = 6000; // Default kilometer sykla
    document.getElementById('serviceCost').value = 5158; // Default kostnad service og deler
};

function calculateCosts() {
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const purchaseDate = new Date(document.getElementById('purchaseDate').value);
    const kilometers = parseFloat(document.getElementById('kilometers').value);
    const serviceCost = parseFloat(document.getElementById('serviceCost').value);

    const currentDate = new Date();
    const yearsOwned = (currentDate - purchaseDate) / (1000 * 60 * 60 * 24 * 365);

    const totalCost = purchasePrice + serviceCost;
    const costPerYear = totalCost / yearsOwned;
    const costPerKm = totalCost / kilometers;

    const carCostPerYear = 100000; // Gjennomsnittskostnad for bil per år
    const carCostPerKm = carCostPerYear / 10000; // Kostnad per kilometer for bil
    const carCost = carCostPerKm * kilometers;

    document.getElementById('costPerYear').innerText = `Kostnad per år: ${costPerYear.toFixed(2)} kr`;
    document.getElementById('costPerKm').innerText = `Kostnad per kilometer: ${costPerKm.toFixed(2)} kr`;
    document.getElementById('carCost').innerText = `Kostnad for bil: ${carCost.toFixed(2)} kr`;
}
