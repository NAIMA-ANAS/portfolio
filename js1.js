function validateName(){
    let x=document.getElementById("form1");
    let name=document.getElementById("names");
    var email=document.getElementById("emails")
    var subject=document.getElementById("subjects");
    var message=document.getElementById("messages");
    if(name.value == ''){
        alert("Must have a username");
        document.form1.name.focus();
        return false;
    }
    if(email.value == ''){
        alert("Must have a mail id");
        document.form1.email.focus();
        return false;
    }
    if(subject.value== ''){
        alert("Must have a subject");
        document.form1.subject.focus();
    }
    if(message.value==''){
        alert("Must have a message");
        document.form1.message.focus();
    }
}