// chap 4

// task1

// var val, bad, haj;

// task 2

// illegal variables
// var 123
// var alert
// var *
// var %
// var Grade(Test)

// legal
// var Grade 
// var _GradeOnTest
// var Grade_On_Test
// var $GradeTest
// var na1

// task 3

// document.write("Variable names can only contain . nums, $ and _ .For Example : Smy_1stVariable ")
// document.write("Variable must begin with a varer. $ or _ .For Example : sname . _ name or name")
// document.write("Variable  names are case sensitive")
// document.write("Variable name should not be Js key words")


// chap 5

// task 1

// var num1 = prompt ("enter 1st number");
// var num2 = prompt ("enter 2nd number");
// var add = num1 + num2;

// document.write("The sum of number1 + number2 is : " + add);

// task 2

// var sub = number1 - number2;

// document.write("The sum of number1 - number2 is " + sub);

// var mul = number1 * number2;

// document.write("The sum of number1 * number2 is " + mul);


// var div = number1 / number2;

// document.write("The sum of number1 / number2 is " + div);


// var mod = number1 % number2

// document.write("The sum of number1 % number2 is " + mod);


// task 3

// var pkr = 600;

// var costof5 = pkr * 5;

// document.write("cost of five tickets to any  movie is " + costof5)

// task 4

// var usertable = prompt("")
//     for(var  k=0; k < 11; k++){
//         document.write(usertable +  " x " + k + " = "+ usertable * k +"<br>");
                        
//     }


// task 5


// var tempcelsius = 50
// var tempfahrenheit = 20



// var convert_into_f = (tempcelsius * 9 / 5) + 32;
// var convert_into_c = (tempfahrenheit - 32 ) * 55 / 9;

// document.write(tempcelsius + "&degC is " + convert_into_f + "&degF");
// document.write("<br></br>");
// document.write(tempfahrenheit+ "&degF is " + convert_into_c + "&degC" );

// task 6













// var item1 = prompt("Enter at what price do you want to buy your first item " );
// var qua1 = prompt("Enter the quantity of your first item  : ");

// item1 = parseInt(item1);
// qua1 = parseInt(qua1);

// var item2 = prompt("Enter at what price do you want to buy as your second item  : ");
// var qua2 = prompt("Enter the quantity of your first item  : ");

// item2 = parseInt(item2);
// qua2 = parseInt(qua2);

// var deliver = 200;
// var total_products =  (item1 * qua1) + (item2 * qua2) + deliver;


// document.write("Price of Item 1 : " + item1 +"<br>" );
// document.write("Quantity of item 1 :" + qua1 +"<br>");
// document.write("Price of Item 2 : " + item2 +"<br>" );
// document.write("Quantity of item 2 :" + qua2 +"<br>");
// document.write("delivery fee : " + deliver +"<br>" );


// document.write("Total price of item 1 and 2 is : " + total_products);









// task 7

// var Total_marks_of = 100;
// var Obtaianed_marks_of = 70;
// var Comted_marks = Obtaianed_marks_of / Total_marks_of * 100;

// document.write("")
// document.write("")
// document.write("")





// // task 8
// var pl = 104;
// var yt = prompt(" US Dollar ");
// document.write("US Dollar to pkr = " + yt * pl );

// var piw = 28;
// var yot = prompt("Saudi Riyal ");
// document.write("Saudi Riyal to pkr = " + yot * piw );
// task 9

 

// var y = prompt ("Current Year");

// var yy = prompt("Birth year");

// document.write(y - yy);


// task 10

// var snak = prompt(" your favourite snack") ;

// var ge = prompt ("Your current age");
// ge = parseInt(ge)
// var mage = prompt("max age");
// mage = parseInt(mage)
// var es = prompt("how much you will eat per day");
// es = parseInt(es)
// var ree = (ge - mage);

// document.write("you will eat " + ( ree * 365 * es ) + snak + " untill the age of " + mage);


// task 11

// var mhx;
// document.write("Value of declared variable is : " + mhx + "<br>");
// var mhx = 50;
// document.write("Initialize variable at : " + mhx + "<br>");
// var inct = mhx++;
// document.write("Increment value of variable is : " + inct + "<br>");
// var adv = mhx + 7;
// document.write("value after add is : " + adv + "<br>");
// var decr = mhx--;
// document.write("value after decrement is : " + decr + "<br>");
// var ddv = mhx % 3
// document.write("value after dividing is : " +ddv + "<br>");

// task 12 
// var cir_rad = 50;
// var cir_far = 2 * 3.142 * cir_rad;
// var cir_area = 3.142 * cir_rad * cir_rad;
// document.write ("<h1>Geometrizer</h1>")
// document.write ("The  area is : " + cir_area)
// document.write ("The  circumference is : " + cir_far)
// document.write ("The  radius is : " + cir_rad)

// task 13

// chap6/9

// task 1

// var int_num = prompt("enter any num : ");
// document.write(" <h1>Resu</h1><br>");
// document.write(" The value of a is :  "+ int_num + "<br>");
// document.write(" ______________________________________________________________<br>");

// document.write("<br>");
// document.write(" The value of ++a is :  "+ ++int_num + "<br>");
// document.write(" Now the value of a is :  "+  int_num + "<br>");
// document.write("<br>");

// document.write(" The value of a++ is :  "+ int_num++ + "<br>");
// document.write(" Now the value of a is :  "+  int_num + "<br>");
// document.write("<br>");


// document.write(" The value of --a is :  "+ --int_num + "<br>");
// document.write(" Now the value of a is :  "+  int_num + "<br>");
// document.write("<br>");


// document.write(" The value of a-- is :  "+ int_num-- + "<br>");
// document.write(" Now the value of a is :  "+  int_num + "<br>");
// document.write(4 "<br>");

// task 2

// var a = 2, b = 1;
// document.write("a is :" + --a +"<br>");
//  a = 2, b = 1;
// document.write("b is :" + --b + "<br>");
//  a = 2, b = 1;
// var resu = --a - --b + ++b + b--;
// document.write("result is :" + resu);
// task 3

// alert("Greetings Humble Travler Named : " + dataname + " A SPECIAL THANKS TO " + dataname + " FOR OPENIG AND ADDMIREING THIS WEBSITE." );
// task 4

// task 5


// var inputnumtomultiply = prompt("Enter the number to dispaly multiplication table :");
//  inputnumtomultiply = parseInt(inputnumtomultiply);

// function multiplyinput(desirednum=5){
//     for(var i = 1; i <= 10; i++){
//         var result = desirednum + " * " + i + " = " + i*desirednum + "<br>";
//         document.write(result);
//     }
// }
// multiplyinput(inputnumtomultiply) // provided default parameter, still not working...









// // var usertable = prompt("")
// //     for(var  k=0; k < 11; k++){
// //         document.write(usertable +  " x " + k + " = "+ usertable * k +"<br>");
                        
//    }

// task 6


// var sub1 = prompt("enter 1st subject name : ");

// var sub1 = prompt("enter 2nd subject name : ");

// var sub1 = prompt("enter 3rd subject name : ");


// var l_sub1 = prompt("Enter Marks Obtained For subject1");

// var l_sub2 = prompt("Enter Marks Obtained For subject2");

// var l_sub3 = prompt("Enter Marks Obtained For subject3");

// var sub_total = 100;

// var Total_total = 300;

// var result_sub1 = l_sub1 / sub_total * 100;

// var result_sub2 = l_sub2 / sub_total * 100;

// var result_sub3 = l_sub3 / sub_total * 100;

// var Total_obtained = parseInt(l_sub1) + parseInt(l_sub2) + parseInt(l_sub3);

// var Total_percentage = (result_sub1 + result_sub2 + result_sub3 )/3;


// document.write("<table><tr><td> <h1>Subject</h1></td><td><h1>Total Marks</h1></td><td><h1>Obtained Marks</h1></td><td><h1>Percentage</h1></td></tr><tr><td> " + subject1 + "</td><td> " + sub_total + "</td><td> " + l_sub1 + "</td> <td> " + result_sub1 + "</td></tr><tr><td> " + subject2 + "</td><td> " + sub_total + "</td><td> " + l_sub2 + "</td><td> " + result_sub2 + "</td></tr><tr><td> " + subject3 + "</td><td> " + sub_total + "</td><td> " + l_sub3 + "</td><td> " + result_sub3 + "</td></tr><tr><td><h3>TOTAL</h3></td><td> " + Total_total + "</td><td> " + Total_obtained + "</td><td> " + Total_percentage + "</td></tr></table>");













