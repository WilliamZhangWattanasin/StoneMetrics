document.getElementById('retirement-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const currentAge = parseInt(document.getElementById('current-age').value);
    const retirementAge = parseInt(document.getElementById('retirement-age').value);
    const currentSavings = parseFloat(document.getElementById('current-savings').value);
    const monthlySavings = parseFloat(document.getElementById('monthly-savings').value);
    const expectedReturn = parseFloat(document.getElementById('expected-return').value) / 100;

    // คำนวณจำนวนปีที่เหลือจนถึงการเกษียณ
    const yearsToRetirement = retirementAge - currentAge;

    // คำนวณเงินออมทั้งหมดเมื่อถึงเวลาเกษียณ
    const totalSavings = currentSavings * Math.pow((1 + expectedReturn), yearsToRetirement) + 
                         (monthlySavings * 12) * ((Math.pow((1 + expectedReturn), yearsToRetirement) - 1) / expectedReturn);

    // แสดงผลลัพธ์
    const retirementPlan = `
        <p>อายุปัจจุบัน: ${currentAge} ปี</p>
        <p>อายุที่ต้องการเกษียณ: ${retirementAge} ปี</p>
        <p>เงินออมปัจจุบัน: ${currentSavings.toFixed(2)} บาท</p>
        <p>เงินออมต่อเดือน: ${monthlySavings.toFixed(2)} บาท</p>
        <p>อัตราผลตอบแทน: ${(expectedReturn * 100).toFixed(2)} % ต่อปี</p>
        <h3>ยอดเงินออมทั้งหมดเมื่อถึงการเกษียณ: ${totalSavings.toFixed(2)} บาท</h3>
    `;

    document.getElementById('retirement-plan').innerHTML = retirementPlan;
});
