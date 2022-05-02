function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "ngocduy000937@gmail.com",
        Password: "Duynguyen0509!",
        To: 'ngocduy000937@gmail.com',
        From: "ngduy@umich.edu",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
        Attachments: [
        {
            name: "File_Name_with_Extension",
            path: "Full Path of the file"
        }]
    })
        .then(function (message) {
        alert("Mail has been sent successfully")
        });
}