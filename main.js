let messagesRef = firebase.database().ref();



//Form submission
document.getElementById("contactForm").addEventListener('submit', submitData);

function submitData(e) {
    //Prevent defaualt
    e.preventDefault();

    let name = getInput('name');
    let email = getInput('email');
    let phone = getInput('phone');
    let message = getInput('message');

    console.log(name);
    sendFirebase(name, email, phone, message);
}

function getInput(id) {
    return document.getElementById(id).value;
}


//Send to firebase
function sendFirebase(name, email, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    })
}