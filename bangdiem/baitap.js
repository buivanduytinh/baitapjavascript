function  functionOK() {
    var hk1 = parseInt (document.getElementById("s1").value); 
    var hk2 = parseInt (document.getElementById("s2").value); 
    var y = document.getElementById('year');
    var value = y[y.selectedIndex].value; 
    var result;
    if (value==1)
    {
        result = ((hk1 + hk2) / 2);
    }
    else if (value==2)
    {
        result = ((hk1 + (hk2*2)) / 3);
    }
    else if (value==3)
    {
        result = ((hk1 + (hk2*3)) / 4);
    }
    else if (value==4)
    {
        result = ((hk1 + (hk2*4)) / 5);
    }
    document.getElementById("sum").value = result;
    if(result>=9)
        {
            document.getElementById(sum).innerHTML="xuất sắc";
            document.getElementById(sum).style.color="yellow";
        }
    if(result>=7 && result<9)
        {
            document.getElementById(sum).innerHTML="giỏi";
            document.getElementById(sum).style.color="red";
        }
}
function functionCANCEL() {
        document.getElementById("s1").value = "";
        document.getElementById("s2").value = "";
        document.getElementById("sum").value = "";

}