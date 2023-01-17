function sendEmail() {
    user = document.getElementById("name")
    email = document.getElementById("emailform")
    subject = document.getElementById("subject")
    message = document.getElementById("message")
    var params = {
        from_name : user.value,
        email : email.value,
        subject : subject.value,
        message : message.value
    }
    valid = user.validity.valid && email.validity.valid && message.validity.valid
    if (valid) {
        user.value = ""
        email.value = ""
        subject.value = ""
        message.value = ""
        emailjs.send("service_hrwo5lj","template_lr8nuyt", params).then(() => {
            alert("Your email has been sent!")
        });
    }
}