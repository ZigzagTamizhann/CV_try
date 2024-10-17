document.addEventListener("DOMContentLoaded", function() {

  var mailLink = document.getElementById("mail-link-1");
  mailLink.addEventListener("click", function(event) {
    event.preventDefault();
    var to = "venkatapathivenkat2004@gmail.com";
    var subject = "Contact with venkat";
    var body = "Hi venkat,\n\nThis is _______________"; // You can fill in the blank with any content you want
    var mailToUrl = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=" + encodeURIComponent(to) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(mailToUrl, "_blank");
  });

  var mailLink2 = document.getElementById("mail-link-2");
  mailLink2.addEventListener("click", function(event) {
    event.preventDefault();
    var to = "sec21ee003@sairamtap.edu.in";
    var subject = "Contact with venkat";
    var body = "Hi venkat,\n\nThis is _______________"; // You can fill in the blank with any content you want
    var mailToUrl = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=" + encodeURIComponent(to) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(mailToUrl, "_blank");
  });

  var linkedinLink = document.getElementById("linkedin-link");
  linkedinLink.addEventListener("click", function(event) {
    event.preventDefault();
    var linkedinUrl = "https://www.linkedin.com/in/venkatapathi-k-a21669226";
    window.open(linkedinUrl, "_blank");
  });
  
  var githubLink = document.getElementById("github-link");
  githubLink.addEventListener("click", function(event) {
    event.preventDefault();
    var githubUrl = "https://github.com/ZigzagTamizhann";
    window.open(githubUrl, "_blank");
  });
});
