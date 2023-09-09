let a=parseInt(prompt("Enter 1st number"))
let b=parseInt(prompt("Enter 2nd number"))
let c=parseInt(prompt("Enter 3rd number"))

document.write("a = "+a+"<br>")
document.write("b = "+b+"<br>")
document.write("c = "+c+"<br>")

if(a>b && a>c){
	document.write("1st number "+a+" is bigger")
}

else if(b>a && b>c){
	document.write("2nd number "+b+" is bigger")
}

else if(c>b && c>a){
	document.write("3rd number "+c+" is bigger")
}

else{
	document.write("pls enter only number")
}