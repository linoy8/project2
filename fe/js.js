let username, email, phone, message, issue;

const form = document.getElementById("myForm");
const getB = document.getElementById("getB");
const postB = document.getElementById("postB");

function getFormData() {
  return {
    username: document.querySelector("#username").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    message: document.querySelector("#message").value,
    issue: document.querySelector("#Issue").value,
  };
}

function validate(data) {
  if (data.username.length < 5) {
    alert("username must be at least 5 characters long");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(data.email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(data.phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  if (data.message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return false;
  }

  if (data.issue.length < 5) {
    alert("Issue must be at least 5 characters long.");
    return false;
  }

  return true;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = getFormData();

  if (!validate(data)) return;

  username = data.username;
  email = data.email;
  phone = data.phone;
  message = data.message;
  issue = data.issue;

  console.log(data);

  alert("Thank you for contacting us!");
});

getB.addEventListener("click", () => {
  const data = getFormData();

  if (!validate(data)) return;

  fetch(`http://localhost:3000/get?name=${data.username}&email=${data.email}`)
    .then((res) => res.text())
    .then((data) => alert(data))
    .catch((err) => console.error(err));
});

postB.addEventListener("click", () => {
  const data = getFormData();

  console.log(data);

  if (!validate(data)) return;

  fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: data.username, email: data.email, phone: data.phone, message: data.message, issue: data.issue }),
  })
    .then((res) => res.text())
    .then((data) => alert(data))
    .catch((err) => console.error(err));
});
