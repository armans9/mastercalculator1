function limpiar()
{
    document.getElementById('my').reset(); 
}

function suma()
{
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);
    alert(num1+num2); 
}

function resta()
{
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);
    alert(num1-num2); 
}

function multiplicacion()
{
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);
    alert(num1*num2); 
}

function division() 
{
    var num1 = Number(document.getElementById('n1').value);
    var num2 = Number(document.getElementById('n2').value);
    alert(num1/num2); 
}