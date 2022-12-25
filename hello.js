let raceNumber = Math.floor(Math.random() * 1000);
const registerWhen = true;
const age = 18;
if(registerWhen && age > 18){
    raceNumber += 1000;
}

if(age > 18 && registerWhen ) {
    console.log(`race will start at 9:30 am ${raceNumber}`);
}
else if (age > 18 && !registerWhen){
    console.log(`race will start at 11:00am ${raceNumber}`);
}
else if(age < 18){
    console.log(`Youth registrants run at 12:30 pm ${raceNumber}`);
}
else{
    console.log(`Please contact to the registartion desk!`)
}

