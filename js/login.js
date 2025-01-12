function showRegisterForm() {
	document.getElementById("form-title").innerText = "Registration";
	document.getElementById("register-form").style.display = "block";
	document.getElementById("login-form").style.display = "none";
	document.getElementById("login-message").innerHTML = "";
}

function showLoginForm() {
	document.getElementById("form-title").innerText = "Login";
	document.getElementById("register-form").style.display = "none";
	document.getElementById("login-form").style.display = "block";
	document.getElementById("login-message").innerHTML = "";
}

function register() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("register-password").value;

	if (name && email && password) {
		const userData = {
			name: name,
			email: email,
			password: password,
		};

		localStorage.setItem("userData", JSON.stringify(userData));

		alert("Congratulations! You are successfully registered.");
		showLoginForm();
	} else {
		alert("Please fill in all fields.");
	}
}

function login() {
	const username = document.getElementById("login-username").value;
	const password = document.getElementById("login-password").value;

	const storedUserData = JSON.parse(localStorage.getItem("userData"));

	if (
		storedUserData &&
		username === storedUserData.name &&
		password === storedUserData.password
	) {
		document.getElementById("login-message").innerHTML =
			"<p class='success'>Successful login! You will be redirected to the homepage.</p>";
		setTimeout(() => {
			window.location.href = "/index.html";
		}, 2000);
	} else {
		document.getElementById("login-message").innerHTML =
			"<p class='error'>Incorrect credentials.</p>";
	}
}
