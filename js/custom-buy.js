$(document).ready(function () {
    loadDataTable();
    $('#data-buy').DataTable({
        responsive: true
    });
});

function loadDataTable() {
    var rows = ''
    data.forEach(element => {
        rows += `
            <tr>
                <td>${element.name}</td>
                <td>${element.price}</td>
                <td>${element.amount}</td>
                <td>${element.date}</td>
            </tr>
            `
    });

    $('#data-buy tr:last').after(rows);
}

var data = [
    { name: 'a', price: 200, amount: 20, date: '18/20/2016' },
    { name: 'b', price: 200, amount: 20, date: '18/20/2016' },
    { name: 'c', price: 200, amount: 20, date: '18/20/2016' },
    { name: 'd', price: 200, amount: 20, date: '18/20/2016' },
    { name: 'e', price: 200, amount: 20, date: '18/20/2016' },
    { name: 'f', price: 200, amount: 20, date: '18/20/2016' },
];