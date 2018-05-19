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
                <td style="text-align:center;">
                    <button class="btn btn-danger"   data-toggle="modal" data-target="#deletedModal" >ลบ</button>
                </td>
            </tr>
            `
    });

    $('#data-buy tr:last').after(rows);
}

var data = [
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/05/2561 18:02:00' },
    { name: 'เรือดำน้ำ', amount: 50, unit: 'คัน', price: 500, datetime: '18/05/2561 17:40:00' },
    { name: 'รถถัง', amount: 50, unit: 'คัน', price: 500, datetime: '18/05/2561 16:28:00' },
    { name: 'เรือดำน้ำ', amount: 50, unit: 'คัน', price: 500, datetime: '18/04/2561 16:27:00' },
    { name: 'เรือดำน้ำ', amount: 50, unit: 'คัน', price: 500, datetime: '18/04/2561 16:26:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/04/2561 16:25:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/04/2561 16:24:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/03/2561 14:44:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/03/2561 14:20:00' },
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ขวด', price: 500, datetime: '18/03/2561 14:10:00' },
    { name: 'รถถัง', amount: 50, unit: 'คัน', price: 500, datetime: '18/03/2561 12:01:00' },
];