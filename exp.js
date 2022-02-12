let yname = document.querySelector("#match");
let email = document.querySelector("#match1");
let mobileNo = document.querySelector("#match2");
let postalCode = document.querySelector("#match3");

// Evenet Listener

yname.addEventListener('click', username);
email.addEventListener('click', checkEmail);
mobileNo.addEventListener('click', checkMobileNo);
postalCode.addEventListener('click', checkPostCode);

// Get input from user.

function form() {
   clearAlert();
   let div = document.createElement('div');
   div.setAttribute("id", "shu");
   let input = div.appendChild(document.createElement('input'));
   input.type = 'text';
   input.className = 'form-control';
   input.style.marginBottom = '10px'
   console.log(div);
   let container = document.querySelector('.container');
   let alt = document.querySelector('#btn');
   container.insertBefore(div, null);
   showAlert("N.B: Press Anywhere to check", "success");

}

// Show & remove alert

function showAlert(message, className) {
   let div = document.createElement('div');
   div.setAttribute("id", "showalert");
   div.className = `alert ${className}`;
   div.appendChild(document.createTextNode(message));
   let container = document.querySelector('.container');
   container.insertBefore(div, null);
   console.log(div);
}


function clearAlert() {
   let currentAlert = document.querySelector(".form-control");
   if (currentAlert) {
      currentAlert.remove();
   }
}

function clearAlert2() {
   let currentAert = document.querySelector("#showalert");
   if (currentAert) {
      currentAert.remove();
   }
}

// Check Name

function username(e) {
   clearAlert2();
   form();

   let input = document.querySelector(".form-control");
   console.log(input);
   input.placeholder = "Name must starts with capital letter";
   let btn = yname.innerText;
   check(btn);

   e.preventDefault();

};

// Check Email

function checkEmail(e) {
   clearAlert();
   clearAlert2();
   form();
   let input = document.querySelector(".form-control");
   input.placeholder = "username@gmail.com";
   let btn = email.innerText;
   check(btn);


   e.preventDefault();

};

// Check Mobile Number.

function checkMobileNo(e) {
   clearAlert();
   clearAlert2();
   form();
   let input = document.querySelector(".form-control");
   input.placeholder = "+8801555555555";
   let btn = mobileNo.innerText;
   check(btn);


   e.preventDefault();
}

// Check Postal Code.

function checkPostCode(e) {
   clearAlert();
   clearAlert2();
   form();
   let input = document.querySelector(".form-control");
   input.placeholder = "Post Code Must be 4 digit";
   let btn = postalCode.innerText;
   check(btn);


   e.preventDefault();

}

// For Validation.

function check(btn) {
   switch (btn) {
      case "Name":

         let uname = document.querySelector(".form-control");
         uname.addEventListener('blur', () => {
            let regex = /^[A-Z][a-zA-Z]/;
            let str = uname.value;
            let test = regex.test(str);
            console.log(test);
            if (test) {
               uname.classList.remove('is-invalid');
               uname.classList.add('is-valid');
               clearAlert2();
               showAlert("Looks Good", "success");


            } else {
               uname.classList.add('is-invalid');
               clearAlert2();
               showAlert("please Choose an valid Name!", "danger");
            }


         });
         break;
      case "Email":
         let email = document.querySelector(".form-control");
         email.addEventListener('blur', () => {
            let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
            let str = email.value;
            let test = pattern.test(str);
            //console.log(test);
            if (test) {
               email.classList.remove('is-invalid');
               email.classList.add('is-valid');
               clearAlert2();
               showAlert("Email is Valid", "success");


            } else {
               email.classList.add('is-invalid');
               clearAlert2();
               showAlert("Pleae choos an valid email!", "danger");
            }
         });
         break;

      case "Mobile No":
         let mobile = document.querySelector(".form-control")
         mobile.addEventListener('blur', () => {
            let re = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
            let str = mobile.value;
            let test = re.test(str);
            console.log(test);
            if (test) {
               mobile.classList.remove('is-invalid');
               mobile.classList.add('is-valid');
               clearAlert2();
               showAlert("Number is valid!", "success");


            } else {
               mobile.classList.add('is-invalid');
               clearAlert2();
               showAlert("Please choose an valid Number!", "danger");
            }
         });
         break;

      case "Postal Code":
         let post = document.querySelector(".form-control");
         post.addEventListener('blur', () => {
            let re = /(\d{4})/;
            let str = post.value;
            let test = re.test(str);
            console.log(test);
            if (test) {
               post.classList.remove('is-invalid');
               post.classList.add('is-valid');
               clearAlert2();
               showAlert("Post code is valid", "success");


            } else {
               post.classList.add('is-invalid');
               clearAlert2();
               showAlert("Please choose an valid post code!", "danger");
            }
         });
   }
}



