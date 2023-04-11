
//Creating a Closure and calling the Child function (BY SAIF) Question 1
function Add(a){
    

    return function(b){
        console.log("(Question 1) Answer is: "+(a+b));
    }

}
var func=Add(1);
func(2)


//recursive function to find value in an array (question 2)
var z = 0;
console.log("\nQUESTION 2")
function Find(s){
    let a =["person1","saifullah","person2","person3",4];
    //console.log(z+"a");

    //Recursion...
    if(a[z] === s){
        console.log(s+" FOUND IN INDEX: "+z);
    }
    else{
        console.log(s+" NOT FOUND IN INDEX: "+z);
        z+=1;
        if(z < a.length){
            Find(s);
        }
    }

} 
var val ="saifullah";
Find(val);


//Question no 3

function Newele(paragraph){

    var para = document.createElement("p");
    var word = document.createTextNode(paragraph);
    para.appendChild(word);
    document.body.style = "white-space:pre;"

    var element = document.getElementById("div1");
    element.appendChild(para);

}
var para ="3 Write a function that adds a new paragraph element to the bottom of an HTML document\u000a.The function should take a string argument that will be used as the text content of the new \u000aparagraph element"
Newele(para);




function Addlist(lis_val){
    var  lis= document.createElement("li");
    var word = document.createTextNode(lis_val)
    lis.appendChild(word);

    var ele = document.getElementById("lists");
    ele.appendChild(lis)
}

Addlist("SAIFULLAH ");
Addlist("PERSON 1");
Addlist("PERSON 2 ");
Addlist("TESTING ");




//Question 5
function col(id,color){
    document.getElementById(id).style.backgroundColor= color;
}

col("lists","red");




//Question 6
console.log("\nQUESTION 6")
function Storedata(key,obj){
    window.localStorage.setItem(key,JSON.stringify(obj));
    console.log("DATA STORED");

}


var obj ={
    name : "saif",
    age : "21",
    university :"SMIU",
    department :"BS-SOFTWARE ENGINEERING"   
}

Storedata("key",obj)
//console.log(window.localStorage.getItem("key"));


console.log("\nQUESTION 7");

function Retdata(key){

    let data=window.localStorage.getItem(key);
    console.log(JSON.parse(data));

}
Retdata("key");
console.log("DATA RETRIVED");


console.log("\nQUESTION 8 (TO SAVE PROPERTIES IN LOCAL STORAGE)");


var obj1 ={
    name : "saif",
    age : "21",
    university :"SMIU",
    department :"BS-SOFTWARE ENGINEERING"   
}





function properties(pass,obj1){
    localStorage.setItem(pass,JSON.stringify(obj1));

    for(var [key,value] of Object.entries(obj1)){
        localStorage.setItem(key,JSON.stringify(value));
    }

}

properties("hello",obj1);

let data2=window.localStorage.getItem("hello");
console.log(JSON.parse(data2));

let data3=window.localStorage.getItem("name");
let data4=window.localStorage.getItem("age");
let data5=window.localStorage.getItem("university");
console.log(JSON.parse(data3));
console.log(JSON.parse(data4));
console.log(JSON.parse(data5));




