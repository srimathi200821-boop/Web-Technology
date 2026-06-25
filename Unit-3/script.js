function calculateResult() { 
    let name = document.getElementById("name").value; 
    let roll = document.getElementById("roll").value; 
    let math = parseInt(document.getElementById("math").value); 
    let science = parseInt(document.getElementById("science").value); 
    let english = parseInt(document.getElementById("english").value); 
    // Validation 
    if (!name || !roll || isNaN(math) || isNaN(science) || isNaN(english)) { 
        alert("Please fill all fields correctly!"); 
        return; 
    } 
    if (math < 0 || science < 0 || english < 0 || math > 100 || science > 100 || english > 100) { 
        alert("Marks should be between 0 and 100"); 
        return; 
    } 
    let total = math + science + english; 
    let average = (total / 3).toFixed(2); 
    let grade = ""; 
    if (average >= 90) grade = "A+"; 
    else if (average >= 75) grade = "A"; 
    else if (average >= 60) grade = "B"; 
    else if (average >= 50) grade = "C"; 
    else grade = "Fail"; 
    document.getElementById("result").innerHTML = ` 
        <h3>Result</h3> 
        <p><b>Name:</b> ${name}</p> 
        <p><b>Roll No:</b> ${roll}</p> 
        <p>Math: ${math}</p> 
        <p>Science: ${science}</p> 
        <p>English: ${english}</p> 
        <hr> 
        <p><b>Total:</b> ${total}</p> 
        <p><b>Average:</b> ${average}</p> 
<p><b>Grade:</b> ${grade}</p> 
`; 
} 
function resetForm() { 
document.getElementById("name").value = ""; 
document.getElementById("roll").value = ""; 
document.getElementById("math").value = ""; 
document.getElementById("science").value = ""; 
document.getElementById("english").value = ""; 
document.getElementById("result").innerHTML = ""; 
}