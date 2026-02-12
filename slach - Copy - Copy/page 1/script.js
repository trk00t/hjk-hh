document.getElementById('onboardingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // هنا يمكنك إضافة منطق إرسال البيانات
    const formData = {
        dateOfBirth: this.querySelector('input[type="date"]').value,
        cancerType: this.querySelectorAll('input[type="text"]')[0].value,
        treatmentDuration: this.querySelectorAll('input[type="text"]')[1].value
    };

    console.log('Form Data:', formData);


    // يمكنك هنا الانتقال للصفحة التالية
    // window.location.href = 'next-page.html';
});

// تحريك شريط التقدم
// تحريك شريط التقدم
const progressFill = document.querySelector('.progress-fill');
progressFill.style.transition = 'width 0.5s ease'; // Already in CSS
// setTimeout(() => {
//     if (progressFill) progressFill.style.width = '20%';
// }, 100);