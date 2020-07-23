


// chap 21-25

// task 1

// var fnam = prompt("Your First Name");
// var lnam = prompt("Your Last Name");

// document.write("Your full name is yes I guessed it it's " + fnam + lnam);

// task 2

// var favmob = prompt("Your Fav Mobile");

// document.write("Your fav mobile is "  +favmob.length);

// task 3

// var pkis = prompt("Write pakistani");

// var pkl = pkis.toLowerCase();

// var segi = pkl.lastiOf("n");

// document.write("The i Of N is : " + segi );

// task 4


// var pks = prompt("Write Hellow world");

// var pkm = pks.toLowerCase();

// var segndex = pkm.lastiOf("i");

// document.write("The i Of i is : " + segndex );

// task 5

// var someChars = pkis;

// var someChars = pkis.slice(3, 4);

// document.write(someChars);

// task 6

// var fnam = prompt("Your First Name");
// var lnam = prompt("Your Last Name");

// document.write("Your full name is yes I guessed it again it's " + fnam .concat (lnam));

// task 7

// var h = "Hyderabad";

// var newText = h.replace("Hyder", "Isla");
// document.write(newText);

// task 8

// var message = "Ali and Sami are best friends. They play cricket and football together";


// var message = message.replace(/and/g, "&");

// document.write("message");

// task 9


// var st1 = "472";
// var st2 = parseInt("st1");

// document.write("Value: " + st1 + "<br>" + "Type: string" + "<br>" + "Value: " + st2 + "<br>" + "Value: number")

// task 10

// var pea = "peanuts";

// pea = pea.toUpperCase;

// document.write(pea);

// task 11

// var inmu = p("Enter any programing language");
// var title = inmu.charAt(0);
// title = title.toUpperCase();
// var res = title + inmu.slice(1);
// d(res);

// task 12

// var num = 35.36;
// num = String(num);
// num = num.replace(".", "");
// d(num);

// task 13

// var string = prompt("Enter your name :");
// var not = ("@ . , !");
// if(string.match(notallowed)){
//     alert("Enter a valid name");
// }else{
//     alert("Thank you")
// }

// task 14

// var cok = prompt("this is abc bakery jo tojhaa chaia wo likh day");
// cok = cok.toLowerCase;
// if (cok = "cookie"){
//  alert("its our 1 & only item");

// }else{
//     alert("sorry");
// }

// task 15
// var k = 6;
// var m = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
// var pass = prompt("Enter your name :");
// var notp = ("a 1 ");
// if(pass.match(notp)){
// }else{
//     alert("not Thank you");
// }
// var passo = pass.slice("0", "1");
// var pass1 = pass.length;
// else if(pass1 = k);
// else if(passo.match(m)){
//     alert("thank you");
// }


// task 16

// var university ="university of karachi";
// university = university.split("");
// for (var i = 0; i < university.length; i++) {
//    document.write(university[i] + "<br>");
    
// }

// task 17

// var ui = prompt("enter");
// var uil = ui.length-1;
// var final = ui.charAt(uil)
// document.write(final);

// task 18

// chap 26-30

// task 1
// var numb = prompt("please enter a positive number");
// var numr = Math.trunc(numb);
// var numf = Math.floor(numb);
// var numc = Math.ceil(numb);


// document.write("number : " + numb + "<br>" + "roundof value : " + numr + "<br>" + "floor value : " + numf + "<br>" + "ceil value : " + numc);

// task 2

// var numb = prompt("please enter a negative number");
// var numr = Math.round(numb);
// var numf = Math.floor(numb);
// var numc = Math.ceil(numb);
// document.write("number : " + numb + "<br>" + "roundof value : " + numr + "<br>" + "floor value : " + numf + "<br>" + "ceil value : " + numc);

// task 3

// var in1 = prompt("a number please");
// var in2 = Math.abs(in1);
// document.write(in2);

// task 4

// var dice = Math.ceil(Math.random() * 10);
// document.write("Random Dice Value Is : " + dice);

// task 5

// var dice = Math.ceil(Math.random() * 2);
// if (
//     dice === 2
// ){
    
//     document.write( "coin value Heads");
// }
// else{
// document.write("coin value Tails");
// }

// task 6

// var rn = Math.ceil(Math.random() * 100);
// document.write(rn);

// task 7

// var kg = prompt("enter your weight please");
// var rkg = parseInt(kg);
// var rekg = Math.round(rkg)
// document.write("The Weight of user is " + rekg + " kilograms");

// task 8


// var une = prompt("Enter a number from 1 to 10");
// function guesstheNum (a) {
// var randomnum = Math.ceil(Math.random() * 10 - 1);
// if (a === randomnum) {
//     alert("Bingo");
// }else{
//     alert("sorry");
// }

// }
// guesstheNum(une)

// chap 31 -34

//  task 1

//  var today = new Date();
// document.write(today);

// task 2
// var today = new Date();
// var montharr = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var currmonth = today.getMonth();
// document.write("Current month : " + montharr[currmonth]);

// task 3

//  var today = new Date();
// var currmonth = today.toString();
// var thismonth = currmonth.slice(0,3)
// document.write(thismonth);

// task 4


//  var today = new Date();
// var currmonth = today.toString();
// var thismonth = currmonth.slice(0,3)
// document.write(thismonth);
// if(today = "sun"){
//     document.write(" its funday");
// }

// task 5

// var today = new Date();
// if(
//     today < 16
// ){
// document.write(" First 15 days of the week");
// }else if(
//     today > 16
// ){
//     document.write(" Over the first 15 days of the week");
// }

// task 6

// task 7

// var date = new Date();

// var currdate = date.getHours();
// if(
//     currdate < 12
// ){
//     document.write("It's am");
// }else{
//     document.write("it's pm");
// }

// task 8

// var date = new Date("Thu, Dec 31, 2020");
// var latdat = date;

// task 9

// var date = new Date("Jun 18, 2015");
// var latdat = date;
// document.write("First ramadan according to the chapter was at " + latdat);

// task 10

// var date = new Date("Dec 5, 2015, ");
// var nedate = new Date("2015");
// var lamedat = date - nedate;
// var lamedate = lamedat / 1000 / 60;
// document.write("days passed since 2015 till " + lamedate);

// task 11


// var dt = new Date();
// var gt = new Date();
// dt.setHours( dt.getHours() + 1 );
// document.write("<br><br>current date: " + gt)
// document.write("<br>1 Hour ago, it was " + dt );

// task 12

// var dt = new Date();
// var gt = new Date();
// dt.setFullYear( dt.getFullYear() - 100 );
// document.write("<br><br>current date: " + gt)
// document.write("<br>100 Years ago From Now, it was " + dt );

// task 13

// var dob = new Date();
// var adf = prompt("Enter Your Age");
// var dobint = dob.getFullYear();
// var age = parseInt(adf);
// var dateofbirth = dobint - age;
// document.write("<br><br>Your Age Is " + adf);
// document.write("<br>Your Birth Year Is " + dateofbirth);

// task 14

// var customername = prompt("Your Name");
// var month = prompt("Enter Month");
// var nou = prompt("Enter Number Of Units");
// var cpu = prompt("Enter Charges Per Unit");
// var nap = nou * cpu;
// var lps = 350;
// var gapadd = nap + lps;
// document.write("<br><h1>K-Electric Bill</h1>");
// document.write("<br><br>Customer Name: " + customername);
// document.write("<br>Month: " + month);
// document.write("<br>Number Of Units: " + nou);
// document.write("<br>Charges Per Unit: " + cpu);
// document.write("<br><br>Net Amount Payable(Within Due Date): " + nap);
// document.write("<br>Late Payment Surcharge: 350");
// document.write("<br>Gross Amount Payable(after Due Date): " + gapadd);





















// chap 35-38

// task 1

// var date = new Date();
// document.write(date)

// task 2

// var fnam = prompt("Your First Name");
// var lnam = prompt("Your Last Name");

// document.write("Your full name is yes I guessed it it's " + fnam + lnam);

// task 3

// var n1 = prompt("num1");
// var n2 = prompt("num2");
// var nn = parseInt(n1);
// var nn1 = parseInt(n2);
// var nn2 = (nn + nn1);
// document.write("the sum of your numbers is" + nn2);

// task 4


// var num = parseInt(prompt("enter a number"));
// var num1 = parseInt(prompt("enter a number"));
// var oop =  prompt ("enter an oprator");

// if(oop == "+" ){
    
//     var result = num + num1;
    
//     document.write("sum = " + result);
// }
// else if(oop == "-" ){
//     document.write("sum = " + num - num1);
// }
// else if(oop == "*" ){
//     document.write("sum = " + num * num1);
// }
// else if(oop == "/" ){
//     document.write("sum = " + num / num1);
// }

// task 5


// function adc(num){
//     var result = num * num;
//     alert(result);
// }
// var input = parseInt(prompt("Enter a number to find out its square value : "));
// adc(input);

// task 6


// var usint = parseInt(prompt("Enter a number to find its factorial :"));

// function factorial(num) {
    
//     var result = num;
     
//     if (num === 0 || num === 1) 
//       return 1; 
    
//     while (num > 1) { 
//       num--; 
//       result *= num; 
     
//     }
       
    
//     document.write(result);
//   }

// factorial(usint);

// task 7

// var c = parseInt(prompt("first num"));
// var di = parseInt(prompt("last num"));

// for(var i=c; i <= di ; i++){
//     document.write(i + "<br>");
// }

// task 8

// function findhypo(a, b){
//     function findsqr( a, b){
//         return (a*a) + (b*b);
//     }
//     var result;
//    result = Math.sqrt(findsqr(a,b));
//     document.write(result);
// }
// var in1= parseInt(prompt("Enter base : "));
// var in2= parseInt(prompt("Enter perpendicular : "));

// findhypo(in1, in2);

// task 9

// var val = 5;
// function calarea(asvalue, asarg){
//     var a = asarg * asvalue;
//     return a

// }

// document.write(calarea(val, 5));

// task 10

// function palindrome(inputstr){
//     var revstr = inputstr.split("").reverse().join("");
//     if(inputstr === revstr){
//         alert("true");
//     }else{
//         alert("false");
//     }

// }
// var str = "racecar";
// palindrome(str);

// task 11

// function titleCase(str) {
//     var str = "I'm a little tea pot";
//     var splitstr = str.toLowerCase().split("  ");
//   console.log(splitstr);
//   var newstr=[];
//     for (var i = 0; i < splitstr.length; i++) {
       
//     newstr =  splitstr[i].charAt(0).toUpperCase();

//       }
  
//       newstr = newstr.join(" ");
//   document.write(newstr);
  
//     }
//   titleCase();

// task 12
//    
  
// task 13

