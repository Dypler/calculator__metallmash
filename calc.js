    // const result = ducument.querySelector(".calculating__result");
    // let width1, long1, height1;
  
    // function calcTotal() {
    //   if (!width1 || !long1 || !height1 ) {
    //       result.textContent = '____';
    //       return; 
    //   } 
      
    // }
    // calcTotal();
    
var btn = document.querySelector('#btn'),
    circle_btn = document.querySelector('#circle_btn'),
    circle_bra = document.querySelector('#circle_bra'),
    circle_castiron = document.querySelector('#circle_castiron'),
    circle_steel = document.querySelector('#circle_steel'),
    ring_width = document.querySelector('#ring_width'),
    ring_long = document.querySelector('#ring_long'),
    ring_height = document.querySelector('#ring_height'),
    circle__long = document.querySelector('#circle__long'),
    circle__height = document.querySelector('#circle__height'),
    steel = document.querySelector('#steel'),
    castiron = document.querySelector('#castiron'),
    width = document.querySelector('#width'),
    long = document.querySelector('#long'),
    height = document.querySelector('#height');
   

btn.onclick = function() {
    var sum = Math.round((width.value * long.value * height.value) * 0.001 * 0.008);
        steel.innerHTML = sum;
    var sum = Math.round((width.value * long.value * height.value) * 0.001 * 0.0072);
        castiron.innerHTML = sum;
}

circle_btn.onclick = function() {
  var sum = Math.round((((circle__long.value)/2)* ((circle__long.value)/2)* (circle__height.value))* 0.001 * 0.008 * 3.14159);
      circle_bra.innerHTML = sum;
  var sum = Math.round((((circle__long.value)/2)* ((circle__long.value)/2)* (circle__height.value))* 0.001 * 0.0072 * 3.14159);
      circle_castiron.innerHTML = sum;
}

ring_btn.onclick = function() {
  var sum = Math.round((((ring_width.value/2)*(ring_width.value/2))*(ring_height.value)* 0.001 * 0.008 * 3.14159)-((ring_long.value/2) * (ring_long.value/2))*(ring_height.value) * 0.001 * 0.008 * 3.14159 );
      ring_bra.innerHTML = sum;
  var sum = Math.round((((ring_width.value/2)*(ring_width.value/2))*(ring_height.value)* '0.001'*'0.0072'*'3.14159')-((ring_long.value/2)*(ring_long.value/2))*(ring_height.value)*'0.001'*'0.0072'*'3.14159');
      ring_castiron.innerHTML = sum;
}

