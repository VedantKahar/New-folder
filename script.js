const data = [
    { barcode: '123', fir: 'FIR001', location: 'Check-in', checkInTime: '09:00 AM', checkOutTime: '05:00 PM' },
    { barcode: '456', fir: 'FIR002', location: 'Check-out', checkInTime: '09:30 AM', checkOutTime: '06:00 PM' },
    // Add more data items here
];

function search() {
    const searchCategory = document.getElementById('searchCategory').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filteredData = data.filter(item => {
        if (searchCategory === 'barcode') return item.barcode.includes(searchTerm);
        if (searchCategory === 'fir') return item.fir.toLowerCase().includes(searchTerm);
        if (searchCategory === 'location') return item.location.toLowerCase().includes(searchTerm);
        if (searchCategory === 'time') return item.checkInTime.includes(searchTerm) || item.checkOutTime.includes(searchTerm);
    });

    populateTable(filteredData);
}

function populateTable(dataArray) {
    const tableBody = document.getElementById('dataBody');
    tableBody.innerHTML = '';
    
    dataArray.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.barcode}</td>
            <td>${item.fir}</td>
            <td>${item.location}</td>
            <td>${item.checkInTime}</td>
            <td>${item.checkOutTime}</td>
        `;
        tableBody.appendChild(row);
    });
}
