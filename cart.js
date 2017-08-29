$('.cart').append('<ul id="list"></ul>');
$('.cart').append('<h3 id="total"></h3>');
$('.cart').append('<h4 id="tax"></h4>');
$('.cart').append('<h1 id="subtotal"></h1>');


var total = 0;
var tax = 0;
var subtotal =0;

const handleClick = function(event) {
  console.log( event.target.value );
  var $price = $(this).parents().children()[3].innerHTML;
  var $name = $(this).parents().children()[2].innerHTML;

  $priceNum = parseFloat($price.substring(1));
  console.log($priceNum);
  console.log($name);
total +=$priceNum;
tax +=$priceNum*0.1;
subtotal = total + tax


  $('#list').append(`<li>${$name} - ${$price}</li>`)
  $('#total').text(`Subtotal = $${total}`)
  $('#tax').text(`Tax = $${tax}`)
  $('#subtotal').text(`Total = $${subtotal}`)

};


$( '.item_add' ).on( 'click', handleClick );