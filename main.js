// console.log( "it works")
$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('clicked button')

        var fullname = $('.fullname').val()
        var email = $('.email').val()
        var mobile = $('.mobile').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()
       
        if(email.length > 5 && email.includes && email.includes('.')){
            statusElm.append( 'email is valid')
        }else{
            statusElm.append('Email is invalid')  
        }
    })
})