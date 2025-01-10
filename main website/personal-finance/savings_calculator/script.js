document.getElementById('deposit-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterestRate = parseFloat(document.getElementById('interest').value);
    const years = parseInt(document.getElementById('years').value);
    const monthlyDeposit = parseFloat(document.getElementById('monthly-deposit').value);

    // คำนวณยอดเงินฝากรวม
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    let totalAmount = principal;

    // สร้างตารางการฝาก
    const depositTableBody = document.querySelector('#deposit-table tbody');
    depositTableBody.innerHTML = ''; // ล้างตารางเดิม

    for (let year = 1; year <= years; year++) {
        let interest = 0;

        for (let month = 1; month <= 12; month++) {
            // คำนวณดอกเบี้ยในแต่ละเดือน
            interest += totalAmount * monthlyInterestRate;
            // เพิ่มยอดเงินฝากรายเดือน
            totalAmount += monthlyDeposit;
        }

        // เพิ่มดอกเบี้ยรวม
        totalAmount += interest;

        // สร้างแถวใหม่ในตาราง
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${year}</td>
            <td>${(principal + monthlyDeposit * year * 12).toFixed(2)}</td>
            <td>${interest.toFixed(2)}</td>
            <td>${totalAmount.toFixed(2)}</td>
        `;
        depositTableBody.appendChild(row);
    }

    // แสดงยอดเงินฝากรวม
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2) + ' บาท';
});
