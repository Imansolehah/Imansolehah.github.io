window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    }, 1000);
})

var submitted = false;

function validateName(){
    var name= document.getElementById('Name').value;
    if (!name.match(/^[a-zA-Z]{3,}(?:[a-zA-z]+){0,2}$/)){
        alert ("Please Enter Your Correct Name");
        return false;
    }

    return true;
}

function validateEmail(){
    var email= document.getElementById('Email').value;
    if (!name.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert ("Please Enter Valid Email Address");
        return false;
    }

    return true;
}

function resetForm(){
    document.getElementById('contact form').reset()
    console.log('Reset');
}

function validateForm(){
    if(!validateName() || !validateEmail()){
        return false;
    }

    else{
        submitted = true;
        var thankyou = 'Your message was sent successfully. Thank you for contacting me !';
        document.getElementById('success').append(thankyou);
        return true;
    }
}







    
