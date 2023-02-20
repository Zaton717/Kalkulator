function kalkulacja()
{

    if(document.getElementById("kwota").value=="" || document.getElementById("kwota").value<=0 ||  document.getElementById('kwota').value == "Podaj poprawną wartość")
    {
        document.getElementById('kwota').value = 0;
    }
    if(document.getElementById("oprocentowanie").value=="" || document.getElementById('oprocentowanie').value <= 0 || document.getElementById('oprocentowanie').value == "Podaj poprawną wartość")
    {
        document.getElementById('oprocentowanie').value = 0;
    }
    if(document.getElementById("prowizja").value=="")
    {
        document.getElementById('prowizja').value = 0;
    }
    if(document.getElementById("nadplata").value=="")
    {
        document.getElementById('nadplata').value = 0;
    }
if(document.getElementById("kwota").value!=0  && document.getElementById("oprocentowanie").value!=0 && document.getElementById("oprocentowanie").value<=20.5)
{   
    var ubezpieczenie = 0;
    if(document.forms[0].elements[6].checked)
    {
        var ubezpieczenie = parseFloat(0.01);
    }
    if(document.forms[0].elements[7].checked)
    {
        var ubezpieczenie = parseFloat(0.02);
    }
    if(document.forms[0].elements[8].checked)
    {
        var ubezpieczenie = parseFloat(0.03);
    }
    var kwota = parseFloat(document.getElementById("kwota").value);
    var okresSplaty = parseFloat(document.getElementById("splata").value);
    var oprocentowanie = parseFloat(document.getElementById("oprocentowanie").value)/100;
    var prowizja = parseFloat(document.getElementById("prowizja").value)/100;
    var nadplata = parseFloat(document.getElementById("nadplata").value);
    var miesiace = parseFloat(okresSplaty)*12;
    var waluta=1;
    if(document.getElementById("waluta").value == "eur")
    {
        waluta=4.68;
    }
    if(document.getElementById("waluta").value == "usd")
    {
        waluta=4.4;
    }
    if(document.getElementById("waluta").value == "gbp")
    {
        waluta=5.3;
    }
    if(document.getElementById("waluta").value == "chf")
    {
        waluta=4.76;
    }

    var q = 1 + (oprocentowanie/miesiace);
    
    kwota = kwota - nadplata;
    var kwotaSplaty = kwota + (kwota*prowizja) + (kwota*ubezpieczenie);

    var rata = (kwotaSplaty * Math.pow(q,miesiace) * (q-1)/((Math.pow(q,miesiace))-1));

    document.getElementById("rata").value=(rata * waluta).toFixed(2) + " pln"; 
    document.getElementById("kwotaSplaty").value=((rata * miesiace)* waluta).toFixed(2)  + " pln";
    document.getElementById("koszt").value=(((rata * miesiace)* waluta)-kwota).toFixed(2) + " pln";
    document.getElementById("rataWaluta").value=rata.toFixed(2) + " " + document.getElementById("waluta").value;    
    
}
if(document.getElementById("kwota").value==0)
{
    document.getElementById('kwota').value = "Podaj poprawną wartość";
}
if (document.getElementById('oprocentowanie').value == 0 || document.getElementById('oprocentowanie').value >= 20.5)
{
    document.getElementById('oprocentowanie').value = "Podaj poprawną wartość";
}
}