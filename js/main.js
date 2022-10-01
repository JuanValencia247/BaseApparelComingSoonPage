const form = document.querySelector('.section-container__form');
const input = document.querySelector('.section-container__form-input');
const error = document.querySelector('.section-container__form-validation');

form.addEventListener('click', (e)=>{
    
    const regularExprecion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regularExprecion.test(input.value) == true){
        input.style.border = '1px solid hsl(0, 36%, 7)';
        input.style.backgroundImage = `url('')`;
        error.innerHTML = '';
    }else{
        e.preventDefault();
        input.style.border = '1px solid red';
        input.style.backgroundImage = `url('./images/icon-error.svg')`;
        error.innerHTML = 'Please provide a valid email.';
    }
});