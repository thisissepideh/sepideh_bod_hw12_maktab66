let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];




const form = document.getElementById('form1');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formElement = e.target
    const formData = new FormData(formElement)


    formElement.querySelectorAll(".is-invalid").forEach(el => {
        el.classList.remove("is-invalid")
    })
    formElement.querySelectorAll(".invalid-feedback").forEach(el => {
        el.remove();
    })

    validateInput();
});



function validateInput() {

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();



    function invalidSet(element, message) {

        const inputElem = document.getElementById(element)
        inputElem.classList.add("is-invalid")
        const errorElement = document.createElement("div");
        errorElement.className = "invalid-feedback"
        errorElement.innerText = message
        inputElem.parentElement.append(errorElement)

    }


    new Promise(function(resolve, reject) {
        if (firstName.length < 3) {
            invalidSet("first-name", "first name is not valid")
            resolve(false)
        } else
            resolve(true)
    }).then(function(result) {
        if (lastName.length < 3) {
            invalidSet("last-name", "last name is not valid")
            return false
        } else if (!result) {
            return false
        } else {
            return true
        }

    }).then(function(result) {
        if (result) {
            modal.style.display = "block"
            setTimeout(e => {
                callback()
            }, 8000);
        }
    });

    function callback() {
        modal.style.display = "none"
    }



}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}