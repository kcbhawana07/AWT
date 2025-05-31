function text(){
    let roll=43;
    if(roll<20){
        return "GroupA";
    }else{
        return "GroupB";
    }
}
console.log(text())


function functionmy(){
    const person={
        name:"Bhawana",
        class:"6 sem",
        id:"2022SE17",
        price:11.22,
        rollno:17,
        hobbies:[
            "travelling",
            "writing"
        ]
    }
    console.log(
    person.name
);
for(i=0;person.hobbies.length;i++){
    console.log(person.hobbies[i]);
}

}
console.log(functionmy());





