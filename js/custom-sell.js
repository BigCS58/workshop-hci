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
                <td>${element.datetime}</td>
                <td>${element.name}</td>
                <td>${element.amount}</td>
                <td>${element.unit}</td>
                <td>${element.price}</td>
            </tr>
            `
    });

    $('#data-buy tr:last').after(rows);
}

var data = [
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/20/2016 18:01:00' },
];