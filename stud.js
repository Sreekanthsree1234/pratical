// let user = {
//     name: "Sreekanth",
//     course:"fullstack"
//     skills:"HTMLCSS,JS"
// };

// document.getElementById("showProfileBtn").addEventListener("click", function() {

//     // Set profile data dynamically
//     document.getElementById("sname").innerText = user.name;
//     document.getElementById("scourse").innerText = user.course;
//     document.getElementById("sskills").innerText = user.skills;

//     // Show popup
//     document.getElementById("order").style.display = "block";
// });

// document.getElementById("closeBtn").addEventListener("click", function() {

//     // Hide popup
//     document.getElementById("order").style.display = "none";
// });
 let student = {
        name: "Sreekanth",
        roll: "2025A123",
        dept: "Computer Science",
        email: "sreekanth@example.com"
    };

    // Show Profile Button
    document.getElementById("showProfileBtn").addEventListener("click", function() {

        // Insert dynamic data
        document.getElementById("pName").innerText = student.name;
        document.getElementById("pRoll").innerText = student.roll;
        document.getElementById("pDept").innerText = student.dept;
        document.getElementById("pEmail").innerText = student.email;

        // Show popup
        document.getElementById("popupBackground").style.display = "block";
    });

    // Close Button
    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("popupBackground").style.display = "none";
    });