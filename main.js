// DECLARE VARIABLES

let firstName=document.getElementById("firstName")
let firstError=document.getElementById("firstError")
let middleName=document.getElementById("middleName")
let middleError=document.getElementById("middleError")
let lastName=document.getElementById("lastName")
let lastError=document.getElementById("lastError")
let gender=document.getElementById("gender")
let genderError=document.getElementById("genderError")
let nationality=document.getElementById("nationality")
let nationalityError=document.getElementById("nationalityError")
let dob=document.getElementById("dob")
let dobError=document.getElementById("dobError")
let phoneNumber=document.getElementById("phoneNumber")
let phoneError=document.getElementById("phoneError")
let email=document.getElementById("email")
let emailError=document.getElementById("emailError")
let homeAddress=document.getElementById("homeAddress")
let addressError=document.getElementById("addressError")
let subject1=document.getElementById("subject1")
let subject1Error=document.getElementById("subject1Error")
let subject2=document.getElementById("subject2")
let subject2Error=document.getElementById("subject2Error")
let subject3=document.getElementById("subject3")
let subject3Error=document.getElementById("subject3Error")
let subject4=document.getElementById("subject4")
let subject4Error=document.getElementById("subject4Error")
let subject5=document.getElementById("subject5")
let subject5Error=document.getElementById("subject5Error")
let subject6=document.getElementById("subject6")
let subject6Error=document.getElementById("subject6Error")
let subject7=document.getElementById("subject7")
let subject7Error=document.getElementById("subject7Error")
let subject8=document.getElementById("subject8")
let subject8Error=document.getElementById("subject8Error")
let score1=document.getElementById("score1")
let score1Error=document.getElementById("score1Error")
let score2=document.getElementById("score2")
let score2Error=document.getElementById("score2Error")
let score3=document.getElementById("score3")
let score3Error=document.getElementById("score3Error")
let score4=document.getElementById("score4")
let score4Error=document.getElementById("score4Error")
let score5=document.getElementById("score5")
let score5Error=document.getElementById("score5Error")
let score6=document.getElementById("score6")
let score6Error=document.getElementById("score6Error")
let score7=document.getElementById("score7")
let score7Error=document.getElementById("score7Error")
let score8=document.getElementById("score8")
let score8Error=document.getElementById("score8Error")
let btn=document.getElementById("btn")

let pointAward = 0

// EVENT LISTENER

btn.addEventListener("click", function (){

    validateData()
})

function validateData(){

    
    if (firstName.value == ""){
        firstError.innerHTML = "* First Name can't be left empty"
    }else {
        firstError.innerHTML = ""
    }
    
    if (lastName.value == ""){
        lastError.innerHTML = "* Last Name can't be left empty"
    }else {
        lastError.innerHTML = ""
    }
    
    if (gender.value == ""){
        genderError.innerHTML = "* Gender can't be left empty"
    }else {
        genderError.innerHTML = ""
    }
    if (nationality.value != ""){
        nationalityError.innerHTML = ""
    }else {
        nationalityError.innerHTML = "* Nationality is Required"
    }

    if (dob.value == ""){
        dobError.innerHTML = "* Date of Birth"
    }else {
        dobError.innerHTML = ""
    }

    if (phoneNumber.value == "") {
        phoneError.innerHTML = "* Phone number is required"
    }else{
        phoneError.innerHTML = ""
    }

    if (email.value == "") {
        emailError.innerHTML = "* Your Email is Required"
    }else{
        emailError.innerHTML = ""
    }

    if (homeAddress.value == "") {
        addressError.innerHTML = "* Home Address is Required"
    }else{
        addressError.innerHTML = ""
    }

    if (subject1.value == "") {
        subject1Error.innerHTML = "* Required"
    }else{
        subject1Error.innerHTML = ""
    }
    
    if (subject2.value == "") {
        subject2Error.innerHTML = "* Required"
    }else{
        subject2Error.innerHTML = ""
    }
    
    if (subject3.value == "") {
        subject3Error.innerHTML = "* Required"
    }else{
        subject3Error.innerHTML = ""
    }
    
    if (subject4.value == "") {
        subject4Error.innerHTML = "* Required"
    }else{
        subject4Error.innerHTML = ""
    }
    
    if (subject5.value == "") {
        subject5Error.innerHTML = "* Required"
    }else{
        subject5Error.innerHTML = ""
    }
    
    if (subject6.value == "") {
        subject6Error.innerHTML = "* Required"
    }else{
        subject6Error.innerHTML = ""
    }
    
    if (subject7.value == "") {
        subject7Error.innerHTML = "* Required"
    }else{
        subject7Error.innerHTML = ""
    }
    
    if (subject8.value == "") {
        subject8Error.innerHTML = "* Required"
    }else{
        subject8Error.innerHTML = ""
    }
    
    if (score1.value == "") {
        score1Error.innerHTML = "* Required"
    }else{
        score1Error.innerHTML = ""
    }
    
    if (score2.value == "") {
        score2Error.innerHTML = "* Required"
    }else{
        score2Error.innerHTML = ""
    }    

    if (score3.value == "") {
        score3Error.innerHTML = "* Required"
    }else{
        score3Error.innerHTML = ""
    }
    
    if (score4.value == "") {
        score4Error.innerHTML = "* Required"
    }else{
        score4Error.innerHTML = ""
    }    

    if (score5.value == "") {
        score5Error.innerHTML = "* Required"
    }else{
        score5Error.innerHTML = ""
    }
    
    if (score6.value == "") {
        score6Error.innerHTML = "* Required"
    }else{
        score6Error.innerHTML = ""
    }
    
    if (score7.value == "") {
        score7Error.innerHTML = "* Required"
    }else{
        score7Error.innerHTML = ""
    }
    
    if (score8.value == "") {
        score8Error.innerHTML = "* Required"
    }else{
        score8Error.innerHTML = ""
    }
        
    if (firstName.value != "" && lastName.value != "" && gender.value != "" && nationality.value != "" && dob.value != "" && phoneNumber.value != "" && email.value != "" && homeAddress.value != "" && subject1.value != "" && subject2.value != "" &&  subject3.value != "" &&  subject4.value != "" &&  subject5.value != "" && subject6.value != "" && subject7.value != "" && subject8.value != "" && score1.value != "" &&  score2.value != "" &&  score3.value != "" &&  score4.value != "" && score5.value != "" && score6.value != "" && score7.value != "" && score8.value != ""){
        proceed()
    }
    
}


function proceed(){
      

    if(accountBal.value > loan.value){
        pointAward += 10        
    }else{
        pointAward -= 10
    }
   
    if(creditHistory.value == "1"){
        pointAward += 0
    }else{
        pointAward += 10
    }

    if(lastDeposit.value == "1"){
        pointAward += 5
    }else{
        pointAward += 0
    }
    
    if(lastDate.value == "1"){
        pointAward += 0
    }else{
        pointAward += 10
    }

    if(repayment.value == "1"){
        pointAward += 5
    }else{
        pointAward += 0
    }

    if(acctType.value == "1"){
        pointAward += 10
    }else{
        pointAward += 5
    }

    process()
    
}

function process(){
    if (pointAward > 30){
        messageTxt.innerHTML = "You have " + pointAward + " points and " + "your Loan request has been accepted"
        messageTxt.style.color = "green"
    }else {
        messageTxt.innerHTML =  "You have " + pointAward + " points and " + "your Loan request has been rejected !"
        messageTxt.style.color = "red"
    }

    endService()
}

function endService(){

    title.value = ""
    firstName.value = ""
    middleName.value = ""
    lastName.value = ""
    accountBal.value = ""
    loan.value = ""
    acctType.value = ""
    creditHistory.value = ""
    lastDeposit.value = ""
    date.value = ""
    repayment.value = ""

}