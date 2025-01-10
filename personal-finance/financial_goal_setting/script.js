document.getElementById('goal-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const goalName = document.getElementById('goalName').value;
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);

    // คำนวณจำนวนเดือนที่ต้องใช้ในการบรรลุเป้าหมาย
    const amountNeeded = goalAmount - currentSavings;
    const monthsNeeded = amountNeeded > 0 ? Math.ceil(amountNeeded / monthlyContribution) : 0;

    // สร้างผลลัพธ์
    let resultMessage;
    if (monthsNeeded > 0) {
        resultMessage = `
            <p>เป้าหมาย: ${goalName}</p>
            <p>จำนวนเงินเป้าหมาย: ${goalAmount.toFixed(2)} บาท</p>
            <p>เงินออมปัจจุบัน: ${currentSavings.toFixed(2)} บาท</p>
            <p>ยอดผ่อนต่อเดือน: ${monthlyContribution.toFixed(2)} บาท</p>
            <p>จำนวนเดือนที่ต้องใช้ในการบรรลุเป้าหมาย: ${monthsNeeded} เดือน</p>
        `;
    } else {
        resultMessage = `
            <p>เป้าหมาย: ${goalName}</p>
            <p>คุณมีเงินออมเพียงพอแล้ว!</p>
        `;
    }

    // แสดงผลลัพธ์
    document.getElementById('goal-result').innerHTML = resultMessage;
});
