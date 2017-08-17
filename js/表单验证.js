document.form1.uName.onkeyup=function(){
var reguname=/^[A-Za-z0-9]{8}$/
if(reguname.test(this.value)){
document.getElementById("sp1").className="a";
img1.src="../images/right.png"
}
else{document.getElementById("sp1").className="b"
	img1.src="../images/error.png"
}
}
document.form1.pwd.onkeyup=function(){
var regpwd=/^[A-Za-z0-9]{6}$/
if(regpwd.test(this.value)){
document.getElementById("sp2").className="a";
img2.src="../images/right.png"
}
else{document.getElementById("sp2").className="b"
	img2.src="../images/error.png"
}
}
function subt(){
var num1=document.getElementById("sp1").className.indexOf("a");
var num2=document.getElementById("sp2").className.indexOf("a");


if(num1!=-1&&num2!=-1){
return true;
}


else{
return false;}
}
