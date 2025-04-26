document.getElementById('filterCity').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll('#cityTable tbody tr');

    rows.forEach(row => {
        let city = row.children[1].textContent.toLowerCase();
        if (city.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

document.getElementById('filterSelect').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let options = document.querySelectorAll('#citySelect option');

    options.forEach(option => {
        if (option.textContent.toLowerCase().includes(filter)) {
            option.style.display = '';
        } else {
            option.style.display = 'none';
        }
    });
});

document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let selectedCity = document.getElementById('citySelect').value;
    document.getElementById('formOutput').textContent = `Vybrali jste město: ${selectedCity}`;
    console.log('Vybrané město:', selectedCity);
});
