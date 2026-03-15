

        // document.getElementById('myForm')
        // .addEventListener('submit', function(e) {
//             e.preventDefault();
//             alert('Thank you for contacting us!');
//             this.reset();
//         });

// const btn = document.querySelector('myBtn');

// btn.addEventListener('click', function() {
//   alert('Button was clicked!');
// });

const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
e.preventDefault();
const username = document.querySelector('#username').value;
const email = document.querySelector('#email').value;
const phone = document.querySelector('#phone').value;
const message = document.querySelector('#message').value;
const issue = document.querySelector('#Issue').value;

if (username.length<=3) {
	alert("userrname must be at least 5 characters long");
    return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}


if (phone.length < 10 ) {
    console.log(phone.length)
    alert("Please enter a valid 10-digit phone number.");
    return;
}

if (message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return;

}

if (issue.length < 5) {
    alert("Issue must be at least 5 characters long.");
    return;

}
console.log(username)
console.log(email)
console.log(phone)
console.log(message)
console.log(issue)
alert('Thank you for contacting us!');
});

