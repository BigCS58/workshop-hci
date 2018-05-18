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
                <td>${element.percentage}</td>
            </tr>
            `
    });

    $('#data-buy tr:last').after(rows);
}

var data = [
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', percentage: 500, datetime: '18/20/2016' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', percentage: 500, datetime: '18/20/2016' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', percentage: 500, datetime: '18/20/2016' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', percentage: 500, datetime: '18/20/2016' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', percentage: 500, datetime: '18/20/2016' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', percentage: 500, datetime: '18/20/2016' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', percentage: 500, datetime: '18/20/2016' },
];