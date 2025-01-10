const expenses = {};

document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const category = document.getElementById('category').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);

    // ตรวจสอบว่าหมวดหมู่มีอยู่หรือไม่
    if (!expenses[category]) {
        expenses[category] = 0;
    }

    // เพิ่มจำนวนเงินเข้าไปในหมวดหมู่
    expenses[category] += amount;

    // แสดงการใช้จ่ายทั้งหมด
    displayExpenses();
});

function displayExpenses() {
    const expenseTableBody = document.querySelector('#expense-table tbody');
    expenseTableBody.innerHTML = ''; // ล้างตารางเดิม

    let totalExpense = 0;

    // แสดงยอดรวมการใช้จ่ายในแต่ละหมวดหมู่
    for (const category in expenses) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${category}</td>
            <td>${expenses[category].toFixed(2)}</td>
        `;
        expenseTableBody.appendChild(row);

        totalExpense += expenses[category];
    }

    // แสดงยอดใช้จ่ายทั้งหมด
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2) + ' บาท';
}
