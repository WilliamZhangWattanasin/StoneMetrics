const investments = [];

document.getElementById('investment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const investmentName = document.getElementById('investment-name').value.trim();
    const investmentAmount = parseFloat(document.getElementById('investment-amount').value);
    const expectedReturn = parseFloat(document.getElementById('expected-return').value);
    const investmentYears = parseInt(document.getElementById('investment-years').value);

    // คำนวณผลตอบแทนรวม
    const totalReturn = investmentAmount * Math.pow((1 + (expectedReturn / 100)), investmentYears);

    // เพิ่มการลงทุนใหม่ลงในรายการ
    const investment = {
        name: investmentName,
        amount: investmentAmount,
        returnRate: expectedReturn,
        years: investmentYears,
        totalReturn: totalReturn
    };

    investments.push(investment);
    displayInvestments();
});

function displayInvestments() {
    const investmentTableBody = document.querySelector('#investment-table tbody');
    investmentTableBody.innerHTML = ''; // ล้างตารางเดิม

    let totalInvestmentAmount = 0;

    // แสดงรายการการลงทุน
    investments.forEach(investment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${investment.name}</td>
            <td>${investment.amount.toFixed(2)}</td>
            <td>${investment.returnRate.toFixed(2)}</td>
            <td>${investment.years}</td>
            <td>${investment.totalReturn.toFixed(2)}</td>
        `;
        investmentTableBody.appendChild(row);

        totalInvestmentAmount += investment.amount;
    });

    // แสดงยอดลงทุนรวมทั้งหมด
    document.getElementById('total-investment-amount').textContent = 'ยอดลงทุนรวมทั้งหมด: ' + totalInvestmentAmount.toFixed(2) + ' บาท';
}
