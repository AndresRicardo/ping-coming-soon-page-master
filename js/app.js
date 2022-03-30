const inputEmail = document.querySelector("#inputEmail");
const errorMsg = document.querySelector("#errorMsg");
const successMsg = document.querySelector("#successMsg");

const inputEmailId = "inputEmail";
const submitId = "submit";
const errorMsgId = "errorMsg";
const successMsgId = "successMsg";

const emailRegExp = new RegExp(
    "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$"
);

function showError() {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
}

function showSuccess() {
    errorMsg.style.display = "none";
    successMsg.style.display = "block";
}

document.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.id === submitId) {
        if (!emailRegExp.test(inputEmail.value.toLowerCase())) {
            console.log("regexp nok");
            showError();
            return;
        }
        showSuccess();
        console.log("regexp ok");
    }
});
