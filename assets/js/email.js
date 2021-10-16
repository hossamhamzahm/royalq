const form = document.getElementById("contact-form");
const Name = form.querySelector("input[name='name']")
const mobileNumber = form.querySelector("input[name='mobileNumber']")
const email = form.querySelector("input[name='email']")
const message = form.querySelector("textarea[name='message']")
const country = document.querySelector('.btn-select');


function getFormElements(){
    let body = `Name: ${Name.value}\n`
    body += `Email: ${email.value}\n`
    body += `Country: ${country.value}\n`
    body += `Mobile Number: ${mobileNumber.value}\n`
    body += `Message: ${message.value}\n`

    return body
}


function sendMail(){
    let body = getFormElements();

    fetch('http://localhost:3000/sendMail', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            to: 'hos.ahmed@nu.edu.eg',
            from: "royalqroyalqroyalq@gmail.com",
            password: "Prosoft5@", 
            subject: "<RoyalQ Inquiry>",
            body: body
        })
    }).then(res => {
        $('#exampleModal').modal('show');
        document.getElementById('contact-form').classList.remove('was-validated')
        Name.value = "";
        email.value = "";
        country.value = "";
        country.innerHTML = `<li><img src="flags/flag-svg.svg" alt=""><span>Country</span></li>`;
        country.nextElementSibling.nextElementSibling.classList.add('d-none');
        country.nextElementSibling.nextElementSibling.classList.remove('d-block');
        mobileNumber.value = "";
        message.value = "";
    })
}