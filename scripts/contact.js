user = document.getElementById("name")
email = document.getElementById("emailform")
subject = document.getElementById("subject")
message = document.getElementById("message")
function sendEmail() {
    var params = {
        from_name : user.value,
        email : email.value,
        subject : subject.value,
        message : message.value
    }
    valid = user.validity.valid && email.validity.valid && message.validity.valid
    if (valid) {
        emailjs.send("service_hrwo5lj","template_lr8nuyt", params).then(() => {
            alert("Your email has been sent!")
        });
    }
}