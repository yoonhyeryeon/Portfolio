let inputBox = document.querySelectorAll('.input-con');
let inputValue = document.querySelectorAll('.input-con').value;
let label = document.querySelectorAll('.label');




for (let j = 0; j < inputBox.length; j++) {
    let input = inputBox[j];
    input.addEventListener('input', function () {
        if (input.value) {
            label[j].classList.add('existence');
            label[j].style.color=`#1876bc`;
        } else {
            label[j].classList.remove('existence');
            label[j].style.color=`#999`;
        }
    })
}




