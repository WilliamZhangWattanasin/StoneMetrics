const debts = [];

document.getElementById('debt-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const debtName = document.getElementById('debt-name').value.trim();
    const totalDebt = parseFloat(document.getElementById('total-debt').value);
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    // เพิ่มหนี้ใหม่ลงในรายการ
    const debt = {
        name: debtName,
        total: totalDebt,
        monthly: monthlyPayment,
        months: Math.ceil(totalDebt / monthlyPayment),
        status: totalDebt <= 0 ? "หมดหนี้" : "ค้างชำระ"
    };

    debts.push(debt);
    displayDebts();
});

function displayDebts() {
    const debtTableBody = document.querySelector('#debt-table tbody');
    debtTableBody.innerHTML = ''; // ล้างตารางเดิม

    let totalDebtAmount = 0;

    // แสดงรายการหนี้
    debts.forEach(debt => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${debt.name}</td>
            <td>${debt.total.toFixed(2)}</td>
            <td>${debt.monthly.toFixed(2)}</td>
            <td>${debt.months}</td>
            <td>${debt.status}</td>
        `;
        debtTableBody.appendChild(row);

        totalDebtAmount += debt.total;
    });

    // แสดงยอดหนี้รวมทั้งหมด
    document.getElementById('total-debt-amount').textContent = 'ยอดหนี้รวมทั้งหมด: ' + totalDebtAmount.toFixed(2) + ' บาท';
}
