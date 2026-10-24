alert("Authorized person only");
alert("Project of G2");
const students = [
    { name: "Anush", roll: "101" },
    { name: "Aditya", roll: "102" },
{name:"Adarsh", roll:"463"}
];

document.getElementById("registre").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim().toLowerCase();
    const roll = document.getElementById("roll").value.trim();

    const authorized = students.some(student =>
        student.name.toLowerCase() === name &&
        student.roll === roll
    );

    if (authorized) {
        window.location.href = "project.html";
    } else {
        alert("Invalid Name or Roll Number!");
    }
});