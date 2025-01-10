document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterestRate = parseFloat(document.getElementById('interest').value);
    const years = parseInt(document.getElementById('years').value);
    const extraPayment = parseFloat(document.getElementById('extra-payment').value);

    // คำนวณค่าผ่อนบ้านรายเดือน
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
                           (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // แสดงค่าผ่อนบ้านรายเดือน
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2) + ' บาท';

    // สร้างตารางการผ่อนชำระ
    const amortizationTableBody = document.querySelector('#amortization-table tbody');
    amortizationTableBody.innerHTML = ''; // ล้างตารางเดิม

    let balance = principal;
    let month = 0;

    while (balance > 0) {
        month++;
        const interest = balance * monthlyInterestRate;
        const principalPayment = monthlyPayment + extraPayment - interest;
        if (principalPayment < 0) principalPayment = 0; // ป้องกันการชำระน้อยกว่าดอกเบี้ย
        balance -= principalPayment;

        // สร้างแถวใหม่ในตาราง
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${month}</td>
            <td>${(monthlyPayment + extraPayment).toFixed(2)}</td>
            <td>${interest.toFixed(2)}</td>
            <td>${principalPayment.toFixed(2)}</td>
            <td>${Math.max(balance, 0).toFixed(2)}</td>
        `;
        amortizationTableBody.appendChild(row);
    }

    // คำนวณระยะเวลาใหม่เมื่อมีการจ่ายเงินเพิ่ม
    const newTerm = month / 12; // แปลงเป็นปี
    document.getElementById('new-term').textContent = `คุณจะชำระหนี้หมดใน ${newTerm.toFixed(2)} ปี (ลดลงจาก ${years} ปี)`;
});
