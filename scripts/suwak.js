
function suwak()
{
    var wartosc = document.getElementById("splata").value;
    if(wartosc == 1){
        document.getElementById("wartoscSuwaka").innerHTML = wartosc + " rok";
    }
    else if(wartosc>1 && wartosc<5 || wartosc>21 && wartosc<25 ||  wartosc>31 && wartosc<35){
        document.getElementById("wartoscSuwaka").innerHTML = wartosc + " lata";
    }
    else{
        document.getElementById("wartoscSuwaka").innerHTML = wartosc + " lat";
    }
}