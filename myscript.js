const form = document.getElementById("petForm");
const response = document.getElementById("response");

function output(text) {
    response.innerHTML += '<p>'+text+'</p>';
}

function display() {
    response.innerHTML = "";

    response.innerHTML = "<h3>New request</h3>";

    for (let element of form.elements) {
        if (element.name !== "") {
        if (element.type === "radio") {
            if (element.checked) {
            output(`Selected ${element.name}: ${element.value}`);
            }
        } else if (element.type !== "button" && element.type !== "submit" && element.type !== "fieldset") {
            output(element.name+':'+element.value);
        }
        }
    }

    form.reset();

    const firstInput = form.querySelector('input[type="text"], input:not([type])');
    if (firstInput) firstInput.focus();
}
