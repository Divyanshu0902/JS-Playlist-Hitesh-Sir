const clock = document.getElementById('clock');

setInterval(function(){
  var date = new Date().toLocaleTimeString();
  clock.innerHTML = date;
},1000)