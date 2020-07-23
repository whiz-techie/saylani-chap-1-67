// task 1



// var b = (2);
// var c = (3);
// var a = (b**c);
// document.write(a);

// task 2

// function isLeapYear() { 
//     var year= document.getElementById("year").value; 
      
//     document.getElementById("GFG").innerHTML  
//         = (year % 100 === 0) ? (year % 400 === 0) 
//                              : (year % 4 === 0); 
// } 


// task 3

// function calarea(a,b,c){
//   var s;
// function cals(a,b,c){

// s = (a+b+c)/2;
// return s
   
// }
// var res = cals (a,b,c);
// var area = res* (res-a)*(res-b)*(res-c);
// return area;

// }
// console.log(calarea(4,4,4));


// task 4


// function main(sub1,sub2,sub3){
//   function average(sub1,sub2,sub3) {
//        var av =(sub1+sub2+sub3)/3;
//         return av;
//       }
// function percentage (sub){
// var p =(sub/100*100);
// return p
//       }
// var result = average(percentage(sub1),percentage(sub2),percentage(sub3));
// return result
//   }
// console.log(main(100,100,100))


// task 5

// var input = prompt("Enter a string .");
// var input2 = prompt("Enter a character to find its index");
// // var input1 = input.split("");

// function findindex(instring, char){
//     var index;
//     for(var i = 0; i < instring.length; i ++ ) {
//        if(instring[i] === char){
//           index = i;
//         }
//         return index;
//     }
// }

// console.log(findindex(input, input2));




// task 6
// var input = prompt("Enter a string to remove the vowels")
// input = input.replace( /[aeiou]/g, '' );              

// console.log(input);


// // task 7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res.length : 0;
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);
  
// task 8
// function conversion(){
// var input1 = document.getElementById("city").value;
// function kmintofeet(input){
//     var result = input * 3280.84;
//     document.write("the distance is " +result + " in feet ."+"<br>")

// }
// function kmintometers(input){
// var result = input * 1000;
// document.write("the distance is " +result + " in meters ."+"<br>")

// }
// function kmintoinches(input){
//     var result = input * 39370.1;
//     document.write("the distance is " +result + " in inches ."+"<br>")

// }
// function kmintocentimeters(input){
//     var result = input * 100000;
//     document.write("the distance is " +result + " in meters ."+"<br>")

// }
// kmintofeet(input1);
// kmintometers(input1);
// kmintoinches(input1);
// kmintocentimeters(input1);
// }


// task 9
// var pay= prompt("Enter overtime hours .");
// pay = parseInt(pay);

// function overtime(input){
// if (input > 40){
//     var res = input * 12;
// document.write("your overtime is " + res)
// }
// else{
//     alert("No overtime pay due");
// }

// }
// overtime(pay)


// task 10

// var amount = prompt("Enter the amount .");
// amount = parseInt(amount);


// function currency(input){
//     var hundreds = 0;
//     var fiftys = 0;
//     var tens = 0;
//      hundreds =Math.floor( input/100);
//      fiftys = Math.floor((input%100)/50);
//      tens = Math.floor(((input % 100) % 50 ) /10);
//      document.write("number of 100 rupee note is " + hundreds + ", number of 50 rupee note is " + fiftys + ", number of 10 rupee note is " + tens)
// }

// document.write(currency(amount));

//  chapter 42 - 46
// task 1

// function buttonclick(){
//     alert("button clicked");
// }

// task 2

// document.getElementById("img").addEventListener("click", imageclick);
// function imageclick(){
//     alert("Thanks for purchasing");
// }

// task 3.........................................................................

// function del(a){
//    var row = a.parentNode.parentNode;
//    row.parentNode.removeChild(row)

// }

// task 4

// function imgclick(){
// document.getElementById("imgchange").src = "./images/img2.png";
// }
// function imgout(){
//     document.getElementById("imgchange").src = "./images/img1.png";

// }


// task 5
// var count = 0;
// function increasefun(){
//     count++;
//     document.getElementById("display").innerHTML = count;

// }
// function decreasefun(){
//     count--;
//     document.getElementById("display").innerHTML = count;


// }
// function resetfun(){
//     count=0;
//     document.getElementById("display").innerHTML = count;

// }



// chapter 49 - 52

// task 1

// function sub(e){

//     var fn =document.getElementById("firstname").value;
//     var ln =document.getElementById("lastname").value;
//     var age =document.getElementById("age").value;
//     var un =document.getElementById("username").value;
//     var pass =document.getElementById("password").value;



//     document.write("Your firstname is :" + fn + "<br>");
//     document.write("Your lastname is :" + ln + "<br>");
//     document.write("Your age is :" + age + "<br>");
//     document.write("Your username is : " + un + "<br>");
//     document.write("Your password is :" + pass + "<br>");
    
// }


// task 2
// function ft(event){
//     event.preventDefault()

// document.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");


// }

// task 3

// function del(a){
//    var row = a.parentNode.parentNode;
//    row.parentNode.removeChild(row)

// }

// var name = prompt("name");
// // var name1 = prompt("name1");
// // var name2 = prompt("name2");
// // var name3 = prompt("name3");
// // var name4 = prompt("name4");

// function onpress(a){
    
//      document.getElementById("tab").appendChild= document.write("<td>" + a + "</td>");
//     }
//     onpress(name)
//     console.log(getElementById("tab").childNode());

// task modal



// var modalele = document.getElementById("modalimged");
// modalele.addEventListener("click", modalered);
// var modalele = document.getElementById("modalimgedone");
// modalele.addEventListener("click", modalered);
// var modalele = document.getElementById("modalimgedtwo");
// modalele.addEventListener("click", modalered);
// var modalele = document.getElementById("modalimgedthree");
// modalele.addEventListener("click", modalered);
// var modalele = document.getElementById("modalimgedfour");
// modalele.addEventListener("click", modalered);
// function modaler(para) {
//   var modal = para.parentNode;
//   modal.classList.remove('closedopen')
//   modal.classList.add("modalooo")
// }
// function modalered() {
//   var modal = this.parentNode;
//   modal.classList.remove('modalooo')
//   modal.classList.add("closedopen")

  
// }


//   function zoomin(){
//       var mypara = document.getElementById("para");
//       var currfontsize = mypara.style.fontSize;
//       currfontsize = currfontsize.slice(0, -2);
//       currfontsize = parseInt(currfontsize)
//       var reallsize;
//       currfontsize += 10;
//       reallsize = currfontsize + "px";
//       mypara.style.fontSize = reallsize;
//       console.log(reallsize);
        

//   }
//   function zoomout(){
//     var mypara = document.getElementById("para");
//     var currfontsize = mypara.style.fontSize;
//     currfontsize = currfontsize.slice(0, -2);
//     currfontsize = parseInt(currfontsize)
//     var reallsize;
//     currfontsize -= 10;
//     reallsize = currfontsize + "px";
//     mypara.style.fontSize = reallsize;
//     console.log(reallsize);
      

// }


// chap 58-67

// var mainc = document.getElementById(main-content);
// document.getElementById(mainc.child);

// var rend = document.getElementByClassname(render);
// document.write(rend.innerHTML);

// var kachra = document.getElementById("firstname").innerHTML;
// kachra = "your first name";
// document.write("first name : " + kachra + "<br>" + "<br>");



// var ln = document.getElementById("firstname").innerHTML;
// ln = "your last name";
// document.write("last name : " + ln + "<br>" + "<br>");


// var email = document.getElementById("firstname").innerHTML;
// email = "your email@gmail.com";
// document.write("email : " + email + "<br>" + "<br>");

var fc = document.getElementsByClassName("content".nodeType);


document.write(fc);


