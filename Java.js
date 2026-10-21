// HTML form ko select kiya
const form = document.getElementById('registre');

form.addEventListener('submit', function(event) {
    // Inputs se name aur roll number nikala, aur extra spaces hataye (.trim() se)
    // .toLowerCase() lagaya taaki agar koi 'adarsh' ya 'ADARSH' likhe toh bhi match ho jaye
    const NameInput = document.getElementById('name').value.trim().toLowerCase();
    const rollInput = document.getElementById('roll').value.trim();

    // 1. Pehla Check: Agar koi field khali hai
    if (NameInput === "" || rollInput === "") {
        event.preventDefault(); // Form submit hone se roko
        alert("Rukiye! Kripya apna Name aur Roll Number dono bharein.");
        return; 
    }

    // 2. Members ka data (Name ke sath unka sahi Roll Number)
    const validMembers = {
        "adarsh": "463",
        "anush": "101",   // Agar HTML me naam 'Anush' hai
        "anuj": "101",    // Aapke message ke mutabik 'Anuj' bhi handle kiya hai
        "aditya": "102"
    };

    // 3. Doosra Check: Kya jo naam dala gaya hai, woh valid members ki list mein hai?
    if (validMembers[nameInput] !== undefined) {
        
        // Agar naam sahi hai, toh check karo ki kya roll number us naam se match karta hai
        const correctRoll = validMembers[nameInput];

        if (rollInput !== correctRoll) {
            event.preventDefault(); // Galat roll number hone par submit roko
            alert("Access Denied! Is naam ke liye yeh Roll Number galat hai.");
        }
        // Agar Naam aur Roll number dono sahi match ho gaye, toh bina ruke 'project.html' khul jayega

    } else {
        // Agar naam list mein hi nahi hai (Adarsh, Anush/Anuj, Aditya ke alawa koi aur hai)
        event.preventDefault(); // Submit roko
        alert("Access Denied! Aap G2 group ke authorized member nahi hain.");
    }
});