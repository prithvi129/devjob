
var form = document.getElementById("form")
form.addEventListener("submit", async function(e){
e.preventDefault()
var firstname = document.getElementById("first_name");
var lastname = document.getElementById("last_name");
var email = document.getElementById("email");
var jobrole = document.getElementById("job_role");
var address = document.getElementById("address");
var city = document.getElementById("city");
var pincode = document.getElementById("pincode");
var phonenumber = document.getElementById("phoneNumber");
var date = document.getElementById("date");
var resume = document.getElementById("resume");

if (firstname.value.trim() === '') {
firstname.focus();
}

// Validate last name
if (lastname.value.trim() === '') {
lastname.focus();
}

// Validate email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email.value)) {
email.focus();
}

// Validate job role
if (jobrole.value.trim() === '') {
jobrole.focus();
}

// Validate address
if (address.value.trim() === '') {
addressInput.focus();
}

// Validate city
if (city.value.trim() === '') {
city.focus();
}

// Validate pincode
if (pincode.value.trim() === '') {
pincode.focus();

}

// Validate phone number
if (phoneNumber.value.trim() === '') {
phoneNumber.focus(); 
}

// Validate date
if (date.value.trim() === '') {
dateInput.focus();
}

// Validate resume link
if (resume.value.trim() === '') {
resumeInput.focus();
}else{
const formData = {
"firstname": firstname.value,
"lastname": lastname.value,
"email": email.value,
"jobrole": jobrole.value,
"address": address.value,
"city": city.value,
"pincode": pincode.value,
"phonenumber": phoneNumber.value,
"date": date.value,
"resume": resume.value,
};
const sheetdbApiUrl = 'https://sheetdb.io/api/v1/nnpt6pdy0u5gg';
try {
const response = await fetch(sheetdbApiUrl, {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify(formData),
});

if (!response.ok) {
throw new Error('Failed to submit data to SheetDB.');
}

// Handle successful submission (e.g., show success message, reset the form, etc.)
alert('Job application submitted successfully!');
this.reset();
} catch (error) {
console.error(error);
// Handle error (e.g., show error message)
}
}
})
