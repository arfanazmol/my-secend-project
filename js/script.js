let input = document.querySelector('.input')
let button = document.querySelector('.button')
let result = document.querySelector('.result')

console.log(input)
console.log(button)
console.log(result)


/*--------------------function ---------------------------------*/
button.addEventListener('click', function () {
    if (input.value == '') {
        alert('please enter the crrect number')

    } else {
        result.innerHTML = ''
        let i = 1;
        while( i < 11) {
            result.innerHTML+=input.value + 'x' + i + '=' + input.value * i + '<br>'
            i++
        }
    }

})