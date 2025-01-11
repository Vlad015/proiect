/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var topnav=document.querySelector(".topnav");
    var x = document.getElementById("myLinks");
    var icon=document.querySelector(".logo");
    if (x.style.display === "block") {
      x.style.display = "none";
      topnav.style.height="20%";
    } else {
      x.style.display = "block";
      topnav.style.height="auto";
      
    }
  }
  
   