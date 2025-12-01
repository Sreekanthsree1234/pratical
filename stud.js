let user = {
    name: "Sreekanth",
    course:"fullstack"
    skills:"HTMLCSS,JS"
};

document.getElementById("showProfileBtn").addEventListener("click", function() {

    // Set profile data dynamically
    document.getElementById("pname").innerText = user.name;
    document.getElementById("pcourse").innerText = user.course;
    document.getElementById("pskills").innerText = user.skills;

    // Show popup
    document.getElementById("order").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {

    // Hide popup
    document.getElementById("order").style.display = "none";
});
