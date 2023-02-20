function sendMail() {
    var m1 = document.getElementById("s1").value;
    var m2 = document.getElementById("s2").value;
    var m3 = document.getElementById("s3").value;
    var m4 = document.getElementById("s4").value;
    var m5 = document.getElementById("s5").value;
    if(m1 != "" && m2 != "" &&  m3 != "" && m4 != "" && m5 != "")
    {
    let mail = "Imię: " + m1 +"%0D%0A" + "Nazwisko: " + m2 +"%0D%0A" + "Telefon: " + m3 +"%0D%0A" + "E-mail: " + m4 +"%0D%0A" + "Problem: " +"%0D%0A" + m5 +"%0D%0A";
    window.open("mailto:jzaton1@zse-e.edu.pl?subject=Kalkulator&body=" + mail);
    }
}