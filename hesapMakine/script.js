"use";
var buttons = document.getElementsByTagName("button"),
uzunluk = buttons.length,
i=0,
sonuç= document.getElementById("sonuç");

for(i=0; i<uzunluk;i++){

    buttons[i].onclick=hesapla;
}
function hesapla(){
   var deger = this.innerHTML;
   if(deger=="="){
try{
    sonuç.value = eval(sonuç.value)
} catch (e){
    sonuç.value = "0";
}
return;
   }
sonuç.value += deger;
}