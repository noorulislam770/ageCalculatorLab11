let d = new Date();
let year = 1999
let birthMonth = 7
let day = 9
let age;

let currentMonth = d.getMonth() + 1;
function calculateBirthday(birthYear,birthMonth,birthDay){
    age = d.getFullYear() - birthYear; 
    let extraMonths;
    if (currentMonth < birthMonth){
        if (birthYear != d.getFullYear()){
            age -= 1;
        }
        extraMonths = 12 - (currentMonth - birthMonth);
        if (birthDay < d.getDate()){
            day = d.getDate() - birthDay
        }else{
            day = birthDay - d.getDate()
        }
    }
    else if (currentMonth > birthMonth){
        extraMonths = currentMonth - birthMonth
        if (birthDay < d.getDate()){
            day = d.getDate() - birthDay
        }else{
            day = birthDay - d.getDate()
        }
    }else if (currentMonth == birthMonth){
        if (birthYear != d.getFullYear()){

            if (birthDay < d.getDate()){
                age -= 1
                extraMonths = 11
                day = d.getDate() - birthDay
            }
            
        }else{
            extraMonths = 0
            day = d.getDate() - birthDay
        }
    }
    
    // console.log( "You are " + age + " Years " + extraMonths + " Months and " + day +" Days Old." )
    return {
        age : age,
        months : extraMonths,
        days : day
    }

}

function render(information){
    document.getElementById("year").innerText = "Year  : " + information["age"]
    document.getElementById("month").innerText =  "Months : " + information["months"]
    document.getElementById("day").innerText = "Days   : "+  information["days"]
}




function start(){
    year = Number(document.getElementById("yearInput").value);
    birthMonth = document.getElementById("monthInput").value;
    birthMonth = Number(birthMonth.split("-")[1])
    day = Number(document.getElementById("dayInput").value);
    document.getElementById("yearInput").value = 0
    document.getElementById("monthInput").value = 0
    document.getElementById("dayInput").value = 0
    info = calculateBirthday(year,birthMonth,day);
    render(info)
}

