//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('input').on('keydown', function(e){
    if(e.which === 71){
      alert('You pressed "G"');
    }
  });
}

$(document).ready(function(){

// call functions here

});
