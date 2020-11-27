let request = document.getElementById('request-quote');
let btn = document.getElementById('request-button');
let fio = document.getElementById('full-name');
let email = document.getElementById('email-address');
let phone = document.getElementById('phone-number');


email.onblur = function() {
    if ( !( this.value.includes('@') && this.value.includes('.') ) ) { 
            this.classList.add('invalid');
        error.innerHTML = 'Пожалуйста, введите правильный email.';    
    } 
};

email.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = '';
    };
}    

fio.onblur = function() {
    for (let char of this.value) {
        if ( !char.match(/[\p{L}\p{Zs}]/gu) ) {
           this.classList.add('invalid');
            error.innerHTML = 'Пожалуйста, вводите только буквы.';
         } 
    }
};


fio.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = '';
    };
}  

phone.onblur = function() {
    for (let char of this.value) {
        if ( !char.match(/[\d\p{Pd}\p{Pe}\p{Ps}'+']/gu) ) {
           this.classList.add('invalid');
            error.innerHTML = 'Пожалуйста, вводите только цифры и +()-.';
         } 
    }      
}

phone.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error.innerHTML = '';
    };
}  

btn.onclick = function () {    
    let input = request.getElementsByTagName('input');
    for (let item of input) {
        if (item.classList.contains('invalid')) {
            break;
        } else {
            console.log(`Полное имя: ${fio.value}, почта: ${email.value}, номер телефона: ${phone.value}`);
        }
    }

}

let subscribe = document.getElementById('subscribe')
let btnSubscribe = document.getElementById('button-subscribe');
let nameSubscribe = document.getElementById('name-subscribe');
let emailSubscribe = document.getElementById('email-subscribe');


emailSubscribe.onblur = function() {
    if ( !( this.value.includes('@') && this.value.includes('.') ) ) { 
            this.classList.add('invalid');
        error2.innerHTML = 'Пожалуйста, введите правильный email.';    
    } 
};

emailSubscribe.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error2.innerHTML = '';
    };
}    

nameSubscribe.onblur = function() {
    for (let char of this.value) {
        if ( !char.match(/[\p{L}\p{Zs}]/gu) ) {
           this.classList.add('invalid');
            error2.innerHTML = 'Пожалуйста, вводите только буквы.';
         } 
    }
};


nameSubscribe.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      error2.innerHTML = '';
    };
}  


btnSubscribe.onclick = function () {    
    let input = subscribe.getElementsByTagName('input');
    for (let item of input) {
        if (item.classList.contains('invalid')) {
            break;
        } else {
            console.log(`Полное имя: ${nameSubscribe.value}, почта: ${emailSubscribe.value}`);
        }
    }
}

