$(document).ready(function () {
    loadDataTable();
    $('#data-buy').DataTable({
        responsive: true
    });
});

function deletedData(btn){
    var row = btn.parentNode.parentNode;
    setTimeout(function(){
        $("#deletedModal").modal("hide");
    }, 1000);
    row.parentNode.removeChild(row);
    
    
}


function loadDataTable() {
    var rows = ''
    data.forEach(element => {

        rows += `
            <tr id="myData">
                <td>${element.date}</td>
                <td>${element.name}</td>
                <td>${element.amount}</td>
                <td>${element.unit}</td>
                <td>${element.amountPerunit}</td>
                <td>${element.price}</td>
                <td ${element.status == 'ยังไม่จัดส่ง' ? 'style=\"color:red\"' : 'style=\"color:green\"'}>${element.status}</td>
                <td style="text-align:center;">
                    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" contenteditable="false">แก้ไข</button>
                    <button class="btn btn-danger"   data-toggle="modal" data-target="#deletedModal" onclick="deletedData(this)">ลบ</button>
                </td>
            </tr>
            `
    });

    $('#data-buy tr:last').after(rows);
}






var data = [
    { name: 'สุราขาว40ดีกรี 625มล.', amount: 50, unit: 'ลัง', amountPerunit: 14, price: 500, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'สุราขาว40ดีกรี 330มล.', amount: 50, unit: 'ลัง', amountPerunit: 12, price: 1000, date: '18/20/2016', status: 'ยังไม่จัดส่ง' },
    { name: 'สุราผสมเสือดำ 625มล.', amount: 30, unit: 'ลัง', amountPerunit: 10, price: 700, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'สุราผสมเสือดำ 330มล.', amount: 20, unit: 'ลัง', amountPerunit: 12, price: 300, date: '18/20/2016', status: 'ยังไม่จัดส่ง' },
    { name: 'สุราแสงโสมกลม 700มล.', amount: 30, unit: 'ลัง', amountPerunit: 15, price: 500, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'สุราแสงโสมแบน 300มล.', amount: 40, unit: 'ลัง', amountPerunit: 15, price: 600, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'สุราหงส์ทองกลม 700มล.', amount: 40, unit: 'ลัง', amountPerunit: 12, price: 700, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'สุราหงส์ทองแบน 350มล.', amount: 30, unit: 'ลัง', amountPerunit: 14, price: 900, date: '18/20/2016', status: 'ยังไม่จัดส่ง' },
    { name: 'สุราเบลนด์285 700มล.', amount: 50, unit: 'ลัง', amountPerunit: 12, price: 1200, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'เบียร์สิงห์ใหญ่ 630มล.', amount: 100, unit: 'ลัง', amountPerunit: 12, price: 500, date: '18/20/2016', status: 'ยังไม่จัดส่ง' },
    { name: 'มาม่า ต้มยำกุ้ง 55กรัม', amount: 20, unit: 'แพ็ค', amountPerunit: 40, price: 300, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'มาม่า ต้มยำกุ้ง น้ำข้น 55กรัม', amount: 20, unit: 'แพ็ค', amountPerunit: 40, price: 400, date: '18/20/2016', status: 'จัดส่งแล้ว' },
    { name: 'มาม่า หมูสับ 55กรัม', amount: 20, unit: 'แพ็ค', amountPerunit: 40, price: 350, date: '18/20/2016', status: 'ยังไม่จัดส่ง' },
];