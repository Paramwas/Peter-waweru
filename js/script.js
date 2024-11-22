/*=============================Additionally this java script is used as text switcher between the text's i listed below.====================*/

var typed = new Typed(".typing", {
     strings:["An ICT Technician.", "currently a software development student.", "prompt engineer."],
     typedSpeed:100,
     BackSpeed:100,
     loop:true
})
function toggleDescription() {
     var desc = document.getElementById("project-description");
     // Toggle the 'show' class to trigger the animation
     if (desc.style.display === "none" || desc.style.display === "") {
       desc.style.display = "block";
       setTimeout(function() {
         desc.classList.add("show");
       }, 10); // Slight delay to allow the display property to be applied
     } else {
       desc.classList.remove("show");
       setTimeout(function() {
         desc.style.display = "none";
       }, 500); // Delay hiding the description after the animation
     }
   }
   
   