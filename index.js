function getGenDob(){
    // input variable
    let title = document.getElementById("title").value;
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let fullname = `${title} ${name}`;
    let dob1 = dob.substr(0,4);
    // current year
    let cd = new Date(Date.now());
    let cy = cd.getFullYear();
    // age
    let age = Number(cy) - Number(dob1);
    // all output variable
    let name_op1 = document.getElementById("name_op");
    let gender_op1 = document.getElementById("gender_op");
    let age_op1 = document.getElementById("age_op");

    if(title==="Mr."){
        name_op1.innerHTML = `Name: ${fullname}`;
        gender_op1.innerHTML = `Gender: Male`;
        age_op1.innerHTML = `Age: ${age} year`;
    }
    else if(title==="Mrs."){
        name_op1.innerHTML = `Name: ${fullname}`;
        gender_op1.innerHTML = "Gender: Female";
        age_op1.innerHTML = `Age: ${age} year`;
    }
    else if(title==="Other"){
        name_op1.innerHTML = `Name: ${fullname}`;
        gender_op1.innerHTML = "Gender: Not Specified";
        age_op1.innerHTML = `Age: ${age} year`;
    }
    else{
        name_op1.innerHTML = `Name: Error`;
        gender_op1.innerHTML = "Gender: Error";
        age_op1.innerHTML = `Age: Error`;
    }
}