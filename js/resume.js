AOS.init();

function scrollondiv(divid)
{
$('html, body').animate({
    'scrollTop' : $("#"+divid).position().top
});
}
function sendmail()
{
var from = $('#to').val();
var subject = $('#subject').val();
var  mail = $('#mailarea').val();
var  username = $('#username').val();
var  password = $('#password').val();

if(from!='')
{
    Email.send({
        Host : "smtp.elasticemail.com",
        To : 'rajussp31121997@gmail.com',
        Username:"rajussp31121997@gmail.com",
        Password:"E041C887E5D46F528F261826CB9E81AE6368",
        From : from,
        Subject : subject,
        Body : mail
    }).then(
      message => alert(message)
    );
}else 
{
    alert('email field must not be empty');
}
}