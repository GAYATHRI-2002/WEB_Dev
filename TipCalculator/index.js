function calc(){

    const bill = Number(document.querySelector("#bill").value);
    const tip = Number(document.querySelector("#tip").value);

    const tipAmount = (bill * tip)/100;
    const total = tipAmount + bill;
    document.getElementById("total").value = total;
}
const Form = document.querySelector("#tipForm");
Form.addEventListener("submit", function(event){
    event.preventDefault();
    calc();
});


