// gets a new object (the architecture allows us to not have to use the 'new' keyword here. similar to how jquery behaves)
var g = G$('John','Doe','es');

g.greet()

//function chaining. All methods apply on g
g.greet().greet(true);

// let's use our object on the click of the login button
$('#login').click(function(){

var loginGreet = G$('John','Doe',$('#lang').val());

$('#logindiv').hide();

loginGreet.htmlGreet('#greeting',false);

});

