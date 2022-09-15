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
let termsConditions=document.getElementById("termsConditions")
let termsError=document.getElementById("termsError")
let btn=document.getElementById("btn")

let todayDate = new Date()
let userDob = new Date(dob.value)
let old = todayDate.getFullYear() - userDob.getFullYear()
console.log ("You are " + old + " years old")

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

    if (termsConditions.value != "1") {
        termsError.innerHTML = "* Kindly Check the box"
    }else{
        termsError.innerHTML = ""
    }
        
    if (firstName.value != "" && lastName.value != "" && gender.value != "" && nationality.value != "" && dob.value != "" && phoneNumber.value != "" && email.value != "" && homeAddress.value != "" && subject1.value != "" && subject2.value != "" &&  subject3.value != "" &&  subject4.value != "" &&  subject5.value != "" && subject6.value != "" && subject7.value != "" && subject8.value != "" && score1.value != "" &&  score2.value != "" &&  score3.value != "" &&  score4.value != "" && score5.value != "" && score6.value != "" && score7.value != "" && score8.value != "" && termsConditions.value != ""){
        proceed()
    }
    
}


function proceed(){
      

    if(nationality.value = "africa"){
        pointAward += 50        
    }else if(nationality.value = "asia"){
        pointAward += 40
    }else if(nationality.value = "southAmerica"){
        pointAward += 30
    }else if(nationality.value = "northAmerica"){
        pointAward += 20
    }else if(nationality.value = "restWorld"){
        pointAward += 10
    }
   
    if(score1.value == 100 || score1.value == 99 || score1.value == 98 || score1.value == 97 || score1.value == 96 || score1.value == 95 || score1.value == 94 || score1.value == 93 || score1.value == 92 || score1.value == 91 || score1.value == 90){
        pointAward += 150
    }else if(score1.value == 89 || score1.value == 88 || score1.value == 87 || score1.value == 86 || score1.value == 85){
        pointAward += 140
    }else if(score1.value == 84 || score1.value == 83 || score1.value == 82 || score1.value == 81 || score1.value == 80 || score1.value == 79 || score1.value == 78 || score1.value == 77 || score1.value == 76 || score1.value == 75){
        pointAward += 120
    }else if(score1.value == 74 || score1.value == 73 || score1.value == 72 || score1.value == 71 || score1.value == 70 || score1.value == 69 || score1.value == 68 || score1.value == 67 || score1.value == 66 || score1.value == 65 ){
        pointAward += 100
    }else if(score1.value == 64 || score1.value == 63 || score1.value == 62 || score1.value == 61 || score1.value == 60){
        pointAward += 80
    }else if(score1.value == 59 || score1.value == 58 || score1.value == 57 || score1.value == 56 || score1.value == 55 || score1.value == 54 || score1.value == 53 || score1.value == 52 || score1.value == 51 || score1.value == 50){
        pointAward += 50
    }else if(score1.value == 49 || score1.value == 48 || score1.value == 47 || score1.value == 46 || score1.value == 45 || score1.value == 44 || score1.value == 43 || score1.value == 42 || score1.value == 41 || score1.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }

    if(score2.value == 100 || score2.value == 99 || score2.value == 98 || score2.value == 97 || score2.value == 96 || score2.value == 95 || score2.value == 94 || score2.value == 93 || score2.value == 92 || score2.value == 91 || score2.value == 90){
        pointAward += 150
    }else if(score2.value == 89 || score2.value == 88 || score2.value == 87 || score2.value == 86 || score2.value == 85){
        pointAward += 140
    }else if(score2.value == 84 || score2.value == 83 || score2.value == 82 || score2.value == 81 || score2.value == 80 || score2.value == 79 || score2.value == 78 || score2.value == 77 || score2.value == 76 || score2.value == 75){
        pointAward += 120
    }else if(score2.value == 74 || score2.value == 73 || score2.value == 72 || score2.value == 71 || score2.value == 70 || score2.value == 69 || score2.value == 68 || score2.value == 67 || score2.value == 66 || score2.value == 65 ){
        pointAward += 100
    }else if(score2.value == 64 || score2.value == 63 || score2.value == 62 || score2.value == 61 || score2.value == 60){
        pointAward += 80
    }else if(score2.value == 59 || score2.value == 58 || score2.value == 57 || score2.value == 56 || score2.value == 55 || score2.value == 54 || score2.value == 53 || score2.value == 52 || score2.value == 51 || score2.value == 50){
        pointAward += 50
    }else if(score2.value == 49 || score2.value == 48 || score2.value == 47 || score2.value == 46 || score2.value == 45 || score2.value == 44 || score2.value == 43 || score2.value == 42 || score2.value == 41 || score2.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }

    if(score3.value == 100 || score3.value == 99 || score3.value == 98 || score3.value == 97 || score3.value == 96 || score3.value == 95 || score3.value == 94 || score3.value == 93 || score3.value == 92 || score3.value == 91 || score3.value == 90){
        pointAward += 150
    }else if(score3.value == 89 || score3.value == 88 || score3.value == 87 || score3.value == 86 || score3.value == 85){
        pointAward += 140
    }else if(score3.value == 84 || score3.value == 83 || score3.value == 82 || score3.value == 81 || score3.value == 80 || score3.value == 79 || score3.value == 78 || score3.value == 77 || score3.value == 76 || score3.value == 75){
        pointAward += 120
    }else if(score3.value == 74 || score3.value == 73 || score3.value == 72 || score3.value == 71 || score3.value == 70 || score3.value == 69 || score3.value == 68 || score3.value == 67 || score3.value == 66 || score3.value == 65 ){
        pointAward += 100
    }else if(score3.value == 64 || score3.value == 63 || score3.value == 62 || score3.value == 61 || score3.value == 60){
        pointAward += 80
    }else if(score3.value == 59 || score3.value == 58 || score3.value == 57 || score3.value == 56 || score3.value == 55 || score3.value == 54 || score3.value == 53 || score3.value == 52 || score3.value == 51 || score3.value == 50){
        pointAward += 50
    }else if(score3.value == 49 || score3.value == 48 || score3.value == 47 || score3.value == 46 || score3.value == 45 || score3.value == 44 || score3.value == 43 || score3.value == 42 || score3.value == 41 || score3.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }

    if(score4.value == 100 || score4.value == 99 || score4.value == 98 || score4.value == 97 || score4.value == 96 || score4.value == 95 || score4.value == 94 || score4.value == 93 || score4.value == 92 || score4.value == 91 || score4.value == 90){
        pointAward += 150
    }else if(score4.value == 89 || score4.value == 88 || score4.value == 87 || score4.value == 86 || score4.value == 85){
        pointAward += 140
    }else if(score4.value == 84 || score4.value == 83 || score4.value == 82 || score4.value == 81 || score4.value == 80 || score4.value == 79 || score4.value == 78 || score4.value == 77 || score4.value == 76 || score4.value == 75){
        pointAward += 120
    }else if(score4.value == 74 || score4.value == 73 || score4.value == 72 || score4.value == 71 || score4.value == 70 || score4.value == 69 || score4.value == 68 || score4.value == 67 || score4.value == 66 || score4.value == 65 ){
        pointAward += 100
    }else if(score4.value == 64 || score4.value == 63 || score4.value == 62 || score4.value == 61 || score4.value == 60){
        pointAward += 80
    }else if(score4.value == 59 || score4.value == 58 || score4.value == 57 || score4.value == 56 || score4.value == 55 || score4.value == 54 || score4.value == 53 || score4.value == 52 || score4.value == 51 || score4.value == 50){
        pointAward += 50
    }else if(score4.value == 49 || score4.value == 48 || score4.value == 47 || score4.value == 46 || score4.value == 45 || score4.value == 44 || score4.value == 43 || score4.value == 42 || score4.value == 41 || score4.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }

    if(score5.value == 100 || score5.value == 99 || score5.value == 98 || score5.value == 97 || score5.value == 96 || score5.value == 95 || score5.value == 94 || score5.value == 93 || score5.value == 92 || score5.value == 91 || score5.value == 90){
        pointAward += 150
    }else if(score5.value == 89 || score5.value == 88 || score5.value == 87 || score5.value == 86 || score5.value == 85){
        pointAward += 140
    }else if(score5.value == 84 || score5.value == 83 || score5.value == 82 || score5.value == 81 || score5.value == 80 || score5.value == 79 || score5.value == 78 || score5.value == 77 || score5.value == 76 || score5.value == 75){
        pointAward += 120
    }else if(score5.value == 74 || score5.value == 73 || score5.value == 72 || score5.value == 71 || score5.value == 70 || score5.value == 69 || score5.value == 68 || score5.value == 67 || score5.value == 66 || score5.value == 65 ){
        pointAward += 100
    }else if(score5.value == 64 || score5.value == 63 || score5.value == 62 || score5.value == 61 || score5.value == 60){
        pointAward += 80
    }else if(score5.value == 59 || score5.value == 58 || score5.value == 57 || score5.value == 56 || score5.value == 55 || score5.value == 54 || score5.value == 53 || score5.value == 52 || score5.value == 51 || score5.value == 50){
        pointAward += 50
    }else if(score5.value == 49 || score5.value == 48 || score5.value == 47 || score5.value == 46 || score5.value == 45 || score5.value == 44 || score5.value == 43 || score5.value == 42 || score5.value == 41 || score5.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }

    if(score6.value == 100 || score6.value == 99 || score6.value == 98 || score6.value == 97 || score6.value == 96 || score6.value == 95 || score6.value == 94 || score6.value == 93 || score6.value == 92 || score6.value == 91 || score6.value == 90){
        pointAward += 150
    }else if(score6.value == 89 || score6.value == 88 || score6.value == 87 || score6.value == 86 || score6.value == 85){
        pointAward += 140
    }else if(score6.value == 84 || score6.value == 83 || score6.value == 82 || score6.value == 81 || score6.value == 80 || score6.value == 79 || score6.value == 78 || score6.value == 77 || score6.value == 76 || score6.value == 75){
        pointAward += 120
    }else if(score6.value == 74 || score6.value == 73 || score6.value == 72 || score6.value == 71 || score6.value == 70 || score6.value == 69 || score6.value == 68 || score6.value == 67 || score6.value == 66 || score6.value == 65 ){
        pointAward += 100
    }else if(score6.value == 64 || score6.value == 63 || score6.value == 62 || score6.value == 61 || score6.value == 60){
        pointAward += 80
    }else if(score6.value == 59 || score6.value == 58 || score6.value == 57 || score6.value == 56 || score6.value == 55 || score6.value == 54 || score6.value == 53 || score6.value == 52 || score6.value == 51 || score6.value == 50){
        pointAward += 50
    }else if(score6.value == 49 || score6.value == 48 || score6.value == 47 || score6.value == 46 || score6.value == 45 || score6.value == 44 || score6.value == 43 || score6.value == 42 || score6.value == 41 || score6.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }

    if(score7.value == 100 || score7.value == 99 || score7.value == 98 || score7.value == 97 || score7.value == 96 || score7.value == 95 || score7.value == 94 || score7.value == 93 || score7.value == 92 || score7.value == 91 || score7.value == 90){
        pointAward += 150
    }else if(score7.value == 89 || score7.value == 88 || score7.value == 87 || score7.value == 86 || score7.value == 85){
        pointAward += 140
    }else if(score7.value == 84 || score7.value == 83 || score7.value == 82 || score7.value == 81 || score7.value == 80 || score7.value == 79 || score7.value == 78 || score7.value == 77 || score7.value == 76 || score7.value == 75){
        pointAward += 120
    }else if(score7.value == 74 || score7.value == 73 || score7.value == 72 || score7.value == 71 || score7.value == 70 || score7.value == 69 || score7.value == 68 || score7.value == 67 || score7.value == 66 || score7.value == 65 ){
        pointAward += 100
    }else if(score7.value == 64 || score7.value == 63 || score7.value == 62 || score7.value == 61 || score7.value == 60){
        pointAward += 80
    }else if(score7.value == 59 || score7.value == 58 || score7.value == 57 || score7.value == 56 || score7.value == 55 || score7.value == 54 || score7.value == 53 || score7.value == 52 || score7.value == 51 || score7.value == 50){
        pointAward += 50
    }else if(score7.value == 49 || score7.value == 48 || score7.value == 47 || score7.value == 46 || score7.value == 45 || score7.value == 44 || score7.value == 43 || score7.value == 42 || score7.value == 41 || score7.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }

    if(score8.value == 100 || score8.value == 99 || score8.value == 98 || score8.value == 97 || score8.value == 96 || score8.value == 95 || score8.value == 94 || score8.value == 93 || score8.value == 92 || score8.value == 91 || score8.value == 90){
        pointAward += 150
    }else if(score8.value == 89 || score8.value == 88 || score8.value == 87 || score8.value == 86 || score8.value == 85){
        pointAward += 140
    }else if(score8.value == 84 || score8.value == 83 || score8.value == 82 || score8.value == 81 || score8.value == 80 || score8.value == 79 || score8.value == 78 || score8.value == 77 || score8.value == 76 || score8.value == 75){
        pointAward += 120
    }else if(score8.value == 74 || score8.value == 73 || score8.value == 72 || score8.value == 71 || score8.value == 70 || score8.value == 69 || score8.value == 68 || score8.value == 67 || score8.value == 66 || score8.value == 65 ){
        pointAward += 100
    }else if(score8.value == 64 || score8.value == 63 || score8.value == 62 || score8.value == 61 || score8.value == 60){
        pointAward += 80
    }else if(score8.value == 59 || score8.value == 58 || score8.value == 57 || score8.value == 56 || score8.value == 55 || score8.value == 54 || score8.value == 53 || score8.value == 52 || score8.value == 51 || score8.value == 50){
        pointAward += 50
    }else if(score8.value == 49 || score8.value == 48 || score8.value == 47 || score8.value == 46 || score8.value == 45 || score8.value == 44 || score8.value == 43 || score8.value == 42 || score8.value == 41 || score8.value == 40){
        pointAward += 20
    }else{
        pointAward += 0
    }





    // if(lastDeposit.value == "1"){
    //     pointAward += 5
    // }else{
    //     pointAward += 0
    // }
    
    // if(lastDate.value == "1"){
    //     pointAward += 0
    // }else{
    //     pointAward += 10
    // }

    // if(repayment.value == "1"){
    //     pointAward += 5
    // }else{
    //     pointAward += 0
    // }

    // if(acctType.value == "1"){
    //     pointAward += 10
    // }else{
    //     pointAward += 5
    // }

    process()
    
}

function process(){
    if (pointAward > 180){
        messageTxt.innerHTML = "You have " + pointAward + " points and " + "your Scholarship application has been accepted"
        messageTxt.style.color = "green"
    }else {
        messageTxt.innerHTML =  "You have " + pointAward + " points and " + "your Scholarship application has been rejected !"
        messageTxt.style.color = "red"
    }

    endService()
}

function endService(){

    firstName.value = ""
    lastName.value = ""
    middleName.value = ""
    gender.value = ""
    nationality.value = ""
    dob.value = ""
    phoneNumber.value = ""
    email.value = ""
    homeAddress.value = ""
    subject1.value = ""
    subject2.value = ""
    subject3.value = ""
    subject4.value = ""
    subject5.value = ""
    subject6.value = ""
    subject7.value = ""
    subject8.value = ""
    score1.value = ""
    score2.value = ""
    score3.value = ""
    score4.value = ""
    score5.value = ""
    score6.value = ""
    score7.value = ""
    score8.value = ""
    termsConditions.value = ""
    termsError.innerHTML = ""
}