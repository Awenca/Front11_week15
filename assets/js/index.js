const sum =() => {
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    const result = +x + +y;
    document.getElementById('answer').innerHTML=result;
}

const subtract =() => {
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    const result = +x - +y;
    document.getElementById('answer').innerHTML=result;
};

function multiply(){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    const result = +x * +y;
    document.getElementById('answer').innerHTML=result;
};

function divide (){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    if (y==0) {
        console.log (y);
        alert('Делить на ноль нельзя!');
    }
    else {
        const result = Number (x) / Number (y);
        document.getElementById('answer').innerHTML=result;
    };
};

function changeFon (){
    switch (document.getElementById("changeFon").value) {
        case "dark": document.body.style.backgroundColor = "grey"; break;
        case "white": document.body.style.backgroundColor = 'white'; break;
        case "blue": document.body.style.backgroundColor = 'blue'; break;
    };
}

function openForm(){
    document.getElementById("form").style.display = "block";
}

function submit(){
    const name = document.getElementById('name').value;
    let tel = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let mypassword = document.getElementById('mypassword').value;
    let age = document.getElementById('age').value;
    if (name=='' || name.length<=2){
        alert('Имя не может быть таким коротким')
    }
    else if (tel=='') {
        alert('Введите номер телефона')
    }
    else if (email=='' || email.indexOf('.')==-1 || email.indexOf('@')==-1){
            alert('Введите корректный электронный адрес')
        }
    else if (mypassword=='' || mypassword.length<8) {
        alert('Пароль не может содержать менее 8 символов')
    }
    else if (age=='' || age>123){
        alert('Введите корректный возраст')
    }
    else {
    alert('Добро пожаловать, ' + name +'!');
    }
}