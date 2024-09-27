var readline=require("readline-sync");
var weight=readline.questionint("please input your weight");
var height=readline.questionInt("please input your height");
var bmi = weight / ((height / 100) ** 2);
if (bmi<19) {
    console.log("underweight") 
} else if(bmi>24){
    console.log("healthy")
    
    
}
    

    

console.log("Hello, Your BMI is:" + bmi);

