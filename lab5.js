function getSize(){
    return document.getElementById("size").value;
}


function getMeet() {
    var Meet=[];  
    var pep = document.getElementById("Pepperoni");  
    var saus = document.getElementById("Sausage");  
    var be = document.getElementById("Beef");
    var an = document.getElementById("Anchovy");
    var chick = document.getElementById("Chicken");
    
    if (pep.checked == true){
        Meet.push("Pepperoni");
    } 
    
    if (saus.checked == true){
        Meet.push("Sausage");
    }

    if (be.checked == true){
        Meet.push("Ground Beef");
    }

    if (an.checked == true){
        Meet.push("Anchovy");
    }

    if (chick.checked == true){
        Meet.push("Chicken");
    }

    return Meet;
}  

function getVeg() {
    var veg=[];  
    
    var tom = document.getElementById("Tomatoes");  
    var on = document.getElementById("Onions");  
    var ol = document.getElementById("Olives");
    var mush = document.getElementById("Mushrooms");
    var pin = document.getElementById("Pineapple");
    var sp = document.getElementById("Spinach");
    var jal = document.getElementById("Jalapeno");
    
    if (tom.checked == true){
        veg.push("Tomatoes");
    } 
    
    if (on.checked == true){
        veg.push("Onions");
    }

    if (ol.checked == true){
        veg.push("Olives");
    }

    if (mush.checked == true){
        veg.push("Mushrooms");
    }

    if (pin.checked == true){
        veg.push("Pineapple");
    }

    if (sp.checked == true){
        veg.push("Spinach");
    }

    if (jal.checked == true){
        veg.push("Jalapeno");
    }

    return veg;
}  

function getCheese(){
    var reg = document.getElementById("Regular"); 
    var none= document.getElementById("None");
    var extra= document.getElementById("Extra");
    
    var r=0;

    if (reg.checked == true){
        return 1;
    }
    else if(none.checked == true){
        return 2;
    }
    else {
        return 3;
    }
}

function ChangePizzaSize(){
    var y=getSize();
    
    if (y=="1"){
        document.getElementById("mypizza").width = "100";
        document.getElementById("price").innerHTML="6";
        document.getElementById("psize").innerHTML="Small";
    }

    if (y=="2"){
        document.getElementById("mypizza").width = "150";
        document.getElementById("price").innerHTML="10";
        document.getElementById("psize").innerHTML="Medium";
    }

    if (y=="3"){
        document.getElementById("mypizza").width = "200";
        document.getElementById("price").innerHTML="14";
        document.getElementById("psize").innerHTML="Large";
    }

    if (y=="4"){
        document.getElementById("mypizza").width = "250";
        document.getElementById("price").innerHTML="16";
        document.getElementById("psize").innerHTML="X-Large";
    }
}

function Total(){
    sz=getSize();
    m=getMeet();
    v=getVeg();
    c=getCheese();

    var pr=6;
    
    if (sz == "2"){
        pr=10;
    }
    else if(sz == "3"){
        pr=14;
    }
    else if(sz == "4"){
        pr=16;
    }

    var ch=0;
    
    if(c=="3"){
        ch=3;
    }

    var total= pr + (m.length)*2 + v.length + ch;
    
    return total;
}

function fillSummary(){

    var fname=document.getElementById("Fname").value;
    var lname=document.getElementById("Lname").value;
    var email=document.getElementById("Email").value;
    var phone=document.getElementById("pnum").value;
    var city=document.getElementById("city").value;
    var addr=document.getElementById("address").value;
    var dlvr=document.getElementById("dlvrTo");
    
    dlvr.innerHTML="Name: " + fname + " " + lname + "<br>E-mail: " + email + "<br>Phone Number: "+phone+"<br>Address: "+addr;

    var output=document.getElementById('orderList');
    var s= getSize();
    var size;
    if (s==1){
        size="-Small size";
    }
    else if (s==2){
        size="-Medium size";
    }
    else if (s==3){
        size="-Large size";
    }
    else if (s==4){
        size="-X-Large size";
    }
    var order="<li>"+size+"</li>";

    var c=getCheese();
    var cheese;
    if (c==1){
        cheese="Regular Cheese";
    }
    else if (c==2){
        cheese="No Cheese";
    }
    else if (c==3){
        cheese="Extra Cheese";
    }
    

    var m=getMeet();
    for (let i=0 ; i<m.length ; i++){
        order+= "<li>"+m[i]+"</li>";
    }

    var v=getVeg();
    for (let i=0 ; i<v.length ; i++){
        order+= "<li>"+v[i]+"</li>";
    }

    output.innerHTML=order;

    var tot= document.getElementById('total');
    tot.innerHTML="Total: "+ Total() + "$";
}

function checkInfo(){
    var fname=document.getElementById("Fname").value;
    var lname=document.getElementById("Lname").value;
    var email=document.getElementById("Email").value;
    var phone=document.getElementById("pnum").value;
    var city=document.getElementById("city").value;
    var addr=document.getElementById("address").value;

    var msg="Missing: ";
    var x=1;

    if (fname==''){
        msg+="\nFirst Name";
    }

    if (lname==''){
        msg+="\nLast Name";
    }

    if (email==''){
        msg+="\nE-mail";
    }

    if (phone==''){
        msg+="\nPhone Number";
    }

    if (city==''){
        msg+="\nCity";
    }

    if (addr==''){
        msg+="\nAddress";
    }

    if (msg != "Missing: "){
        alert(msg);
        x=0;
    }

    return x;

}

function gotoPage(form){
    var P1=document.getElementById('Page1');
    var P2=document.getElementById('Page2');
    var P3=document.getElementById('OrderSummary');

    if (form== 'form1'){
        P1.style.display='block';
        P2.style.display='none';
        P3.style.display='none';
        document.body.style.backgroundColor='#01dddd';
    }

    else if (form== 'form2'){
        P1.style.display='none';
        P2.style.display='block';
        P3.style.display='none';
        document.body.style.backgroundColor='#e93a57';
    }

    else if (form== 'form3'){
        if (checkInfo()==1){
            fillSummary();
            P1.style.display='none';
            P2.style.display='none';
            P3.style.display='block';
            document.body.style.backgroundColor='#3fc38e';
        }
    }
}




