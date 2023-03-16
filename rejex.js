// JavaScript RegEx 

// const pattern = /a/;
// const pattern = /^$/;
// const result = pattern.test('DCTPG8658G');
// console.log(result);










// const url = 'https://jsonplaceholder.typicode.com/users/';

// login
// const pattern="/^[6-9]{1}[0-9]{9}$/";
// const 
$(document).ready(function () {
    $("#loginForm").submit(function () {
        console.log('result');
        console.log('submitted');
        $('#loginForm').trigger("reset");
        $('#userdata').text('hello');
    });
});

