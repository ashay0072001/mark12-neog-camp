const forDateOfBirth = document.querySelector("#date-of-birth")
const forLuckyNumber = document.querySelector("#lucky-number")
const forButtonClick = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")


function compareValues(sum, forLuckyNumber){
    if(sum%forLuckyNumber===0){
        outputBox.value = "your birthday is lucky 🎉";
    }
    else{
        outputBox.value="your birthday is not lucky🥺";
    }
}

function checkBirthDateIsLucky(){
    const dob = forDateOfBirth.value;
    const sum = calculateSum(dob);

    if(sum&&dob){
    compareValues(sum,forLuckyNumber.value);
    }
    else{
    outputBox.value="please fill both the boxes😶 ";
    }

}

function calculateSum(dob){
dob = dob.replaceAll("-","");
let sum = 0;
for(let i = 0;i<dob.length;i++){
    sum = sum + Number(dob.charAt(i));

}
return sum;
}



forButtonClick.addEventListener("click", checkBirthDateIsLucky)
    
