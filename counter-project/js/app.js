var low = document.getElementById('low');
var add = document.getElementById('add');
var counter = document.getElementById('counter');

var i = 0;
add.addEventListener('click', function added(){
    i += 1;
    counter.textContent = i;
});

low.addEventListener('click', function lower(){
  i -= 1;
  counter.textContent = i;
});

