document.getElementById('financial-analysis-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // รับค่าจากฟอร์ม
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = parseFloat(document.getElementById('savings').value);

    // คำนวณยอดเงินเก็บรายเดือน
    const monthlySavings = income - expenses;
    const savingsRate = (monthlySavings / income) * 100;

    // คำนวณสถานะทางการเงิน
    let financialStatus;
    if (monthlySavings < 0) {
        financialStatus = "คุณมีการใช้จ่ายมากกว่ารายได้ กรุณาลดค่าใช้จ่าย";
    } else if (monthlySavings === 0) {
        financialStatus = "คุณมีรายได้เท่ากับค่าใช้จ่าย ควรพิจารณาเพิ่มรายได้หรือประหยัดเงิน";
    } else {
        financialStatus = "คุณมีเงินเก็บในแต่ละเดือน: " + monthlySavings.toFixed(2) + " บาท";
    }

    // คำนวณระยะเวลาที่อยู่ได้โดยไม่ต้องทำงาน
    const monthsWithoutWork = savings / expenses;
    const yearsWithoutWork = monthsWithoutWork / 12;

    // คำแนะนำในการปรับปรุงชีวิต
    let improvementAdvice;
    if (monthlySavings < 0) {
        improvementAdvice = "พยายามลดค่าใช้จ่ายหรือเพิ่มรายได้เพื่อให้มีเงินออมในอนาคต";
    } else if (monthlySavings === 0) {
        improvementAdvice = "พิจารณาหาโอกาสในการลงทุนเพื่อให้เงินออมเติบโต";
    } else {
        improvementAdvice = "คุณมีการเงินที่ดี ควรพิจารณาลงทุนเพื่อสร้างความมั่นคงในอนาคต";
    }

    // แสดงผลลัพธ์
    const analysisResult = `
        <p>รายได้ประจำเดือน: ${income.toFixed(2)} บาท</p>
        <p>ค่าใช้จ่ายประจำเดือน: ${expenses.toFixed(2)} บาท</p>
        <p>เงินออมปัจจุบัน: ${savings.toFixed(2)} บาท</p>
        <p>ยอดเงินเก็บรายเดือน: ${monthlySavings.toFixed(2)} บาท</p>
        <p>อัตราเงินออม: ${savingsRate.toFixed(2)} %</p>
        <h3>สถานะทางการเงิน: ${financialStatus}</h3>
        <p>คุณสามารถอยู่ได้โดยไม่ต้องทำงาน: ${monthsWithoutWork.toFixed(1)} เดือน (${yearsWithoutWork.toFixed(1)} ปี)</p>
        <h4>คำแนะนำในการปรับปรุงชีวิต: ${improvementAdvice}</h4>
    `;

    document.getElementById('financial-analysis-result').innerHTML = analysisResult;

    // สร้างกราฟแสดงการเงิน
    const ctx = document.getElementById('financial-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['รายได้', 'ค่าใช้จ่าย', 'เงินออม'],
            datasets: [{
                label: 'ยอดเงิน (บาท)',
                data: [income, expenses, savings + monthlySavings], // รวมเงินออม
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
