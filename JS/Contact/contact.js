

//input animation

const inputs = document.querySelectorAll(".contact-input");

inputs.forEach(ipt => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });

    ipt.addEventListener("blur", () => {
        ipt.parentNode.classList.remove("focus");
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
    });
});



//Send Whatsapp

function sendToWhatsapp(event) {
    event.preventDefault();
    let number = "+917977392545"
    let FirstName = document.getElementById('FirstName').value;
    let LastName = document.getElementById('LastName').value;
    let Name = FirstName + " " + LastName;
    let Email = document.getElementById('Email').value;
    let Events = document.getElementById('Event').value;
    let Message = document.getElementById('Message').value;
    var url = "https://wa.me/" + number + "?text="
        + "Hey It's " + Name + "%0a"
        + "Email : " + Email + "%0a"
        + "Event : " + Events + "%0a"
        + "Message : " + Message + "%0a%0a";

    window.open(url, '_blank').focus();
}





//Send Mail
function sendMail(event) {
    event.preventDefault();
    var params = {
        Name: document.getElementById('FirstName').value + " " + document.getElementById('LastName').value,
        Email: document.getElementById('Email').value,
        Events: document.getElementById('Event').value,
        Message: document.getElementById('Message').value,
    };

    emailjs.send("service_i385pgr", "template_dsi3rwg", params)
        .then(open_popup());

}





//Handel Two Submit Buttons
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const submitter = event.submitter;

    let EForm = document.getElementById('Enq-form');



    if (submitter.id === 'submitOne') {
        sendToWhatsapp(event);


    } else if (submitter.id === 'submitTwo') {
        sendMail(event);

    }
    EForm.reset();

    return false; // Prevent the form from submitting
}
