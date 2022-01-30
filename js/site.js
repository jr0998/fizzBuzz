function getValues() {
    let set = []
    let lBound = document.getElementById("lowerBound").value;
    let uBound = document.getElementById("upperBound").value;

    lBound = parseInt(lBound);
    uBound = parseInt(uBound);

    if (Number.isInteger(lBound) && Number.isInteger(uBound)) {
        set = testValues(lBound, uBound);
        displayTable(set);
    } else {
        alert("Values entered not Integers");
    }
}

function testValues(lB, uB) {
    let tblValue = [];
    for (let i = lB; i <= uB; i++) {
        tblValue.push(i);
    }
    return tblValue;
}

function displayTable(tblVal) {
    let template = `<tr>`;
    for (let i = 0; i < tblVal.length; i++) {
        if(tblVal[i] % 3 == 0 && tblVal[i] % 5 == 0 ){
            template+= `<td><strong>FizzBuzz</strong></td></tr><tr>`;
        }
        else if(tblVal[i] % 5 == 0){
            template+= `<td><strong>Buzz</strong></td></tr><tr>`;
        }
        else if(tblVal[i] % 3 == 0){
            template+= `<td><strong>Fizz</strong></td>`;
        }
        else{
        template+= `<td>${tblVal[i]}</td>`;            
        }
    }
    document.getElementById("results").innerHTML = template;
}