document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-input');
    const regReqBtn = document.querySelector('.reg_req_btn');

    const patterns = {
        id: /^[a-zA-Z0-9]{5,12}$/,
        pw: /^[a-zA-Z0-9!@#$%^&*]{6,20}$/,
        email: /^[^@]+@[^@]+\.[^@]+$/,
        phone: /^\d{10,11}$/
    };

    function validateInput(inputElement) {
        const type = inputElement.id.split('_')[0];
        const value = inputElement.value;
        const checkElement = document.querySelector(`.${type}_input_check`);

        if (value.trim() === '') {
            checkElement.textContent = '';
            inputElement.style.borderColor = '#ccc';
            return false;
        }

        const isValid = patterns[type].test(value);
        checkElement.textContent = isValid ? "사용 가능 합니다." : "입력 조건이 맞지 않습니다";
        checkElement.style.color = isValid ? "#6ab04c" : "#eb4d4b";
        inputElement.style.borderColor = isValid ? '#6ab04c' : '#eb4d4b';
        return isValid;
    }

    function updateButtonStatus() {
        regReqBtn.disabled = !Array.from(formInputs).every(input => validateInput(input));
    }

    // 초기에 버튼 비활성화
    regReqBtn.disabled = true;

    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
            updateButtonStatus();
        });
    });
});