import { useState } from "react";
const MultiStepForm =() =>{
    const [step , setStep] =useState(1);
    const [fornmData , setFormData] =useState(

    )
}

function stepOne(){
    return<>
    This should ask for email</>
}
function stepOne(){
    return<>
    This should ask for email</>
}
function stepOne(){
    return<>
    This should ask for email</>
}

function simpleform(){
    const[nameid,setform]=useState()
    return(

        <div>
            <form id="simple_form">
                <input type="name" id="name">Name</input>
                <input type="email" id="email">Email</input>
                <input type="text" id="college">College</input>
            </form>
        </div>
    );
}
export default simpleform;
