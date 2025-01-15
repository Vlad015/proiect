const form=document.querySelector("form");

function sendMail(){
    Email.send({
        Host : "smtp.mailendo.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    sendMail();
})
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