// REMEMBER TO COMMENT


//output of selection
let field = document.getElementById('output');
let option = document.getElementById('inFromUser');
option.addEventListener('input', function(){
  field.innerText = option.value; 
});

//changing background color 
let box = document.getElementById('changeC');
let toColor = document.getElementById('colorIn');
toColor.addEventListener('input', function(){
  box.style.backgroundColor = colorIn.value.toString();
})

// *** LIST  [start]

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//adding items:
form.addEventListener('submit', addItem);
function addItem(e) { 
  
  e.preventDefault(); //prevent normal submition of html form
  let newItem = document.getElementById('item');
  
  // trim removes whitespace from input; and check that there is at least 1 character in it
  if(newItem.value.trim().length > 0){ 
    let li = document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(newItem.value + " "));
  
    let delBtn = document.createElement('button'); 
    delBtn.appendChild(document.createTextNode('X'));
    delBtn.className = 'delBtn'
    li.appendChild(delBtn); //adds button to created li
    itemList.appendChild(li);

  } else {
    window.alert("Enter something");
  }
  document.getElementById("item").value = '' // Clears the input
}

//removing items:
itemList.addEventListener('click', removeItem);

function removeItem(e){
  if(e.target.classList.contains('delBtn')){
    if(confirm('Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// *** LIST [end]


// ** Search bar

const searchBox = document.querySelector('.search-box');
const searchOutput = document.getElementById('search-output');
searchBox.addEventListener('keyup', handleSearchBoxChange);

function handleSearchBoxChange(event) {
  searchOutput.innerText = event.target.value;
}

// *** Search bar [end]


// ** Mosaic Generator
/*
* add a click listener on the entire parent cell and then 4 click listners
* on each child div 
*/
const arrayColors = ['#39f7ed', '#2e0087', '#fff', '#8af5ef',
  '#aaefeb', '#9e6ef9', '#eaeaea', '#7f45ec',
  '#def3f2', '#cebaf5', '#8d59ef',
  '#2e0087' , '#FAFAFA', '#E0E0E0',      '#4DD0E1'  
  ];

const squares = document.querySelectorAll('.square');

squares.forEach((sq) => {
  sq.addEventListener('click', handlerClick)
})

function handlerClick(element) {
  const height = element.target.offsetHeight;
  const width = element.target.offsetWidth;

  const widthChild = width / 2;
  for(var i =1 ; i <= 4; i++) {
     const childElem = document.createElement("div");
    childElem.className = 'base-style-class';
    childElem.style.width = '50%';
    childElem.style.height = '50%';
    childElem.style.background = arrayColors[Math.floor(Math.random() * arrayColors.length)];
    childElem.addEventListener('click', handlerClick);

    element.target.appendChild(childElem)
  }
  
  element.stopPropagation()
}

//Calculator Start

var string = "";
var result;

document.getElementById('buttons').addEventListener('click',updateScreen,false); 

function updateScreen(e) {
  var digit = e.target.value;
  var id = e.target.id;
  if(id === 'clear') {
    string = "";
    console.log(string);
    document.getElementById('screen').innerHTML = "<h2>"+string+"</h2>";
  } else if(id === 'end') {
    result = eval(string);
    console.log(result);
    string = result.toString();
    document.getElementById('screen').innerHTML = "<h2>"+result+"</h2>";
  } else {
    if(digit!=null) {
      string = string.concat(digit);
    }
    console.log("Called");
    document.getElementById('screen').innerHTML = "<h2>"+string+"</h2>";
  }
}
//Calculator end


// Info Generator["start"]
const info = document.getElementById('finalInfo');
var temp;
document.querySelector('.name').addEventListener('keyup',getName);
function getName(event){
  info.textContent= event.target.value;
  temp = event.target.value;
}

var radios = document.getElementsByName('lover');
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        info.textContent=temp+" loves "+ this.value;
    }
}
// End of Info Generator

//Start of button clicker
var start = document.getElementById('startButton');
var click = document.getElementById('click');

var score;
var timeLeft;
var Timer;

function clickStart() {
  timeLeft = 10;
  score = 0;
  start.style.visibility = "hidden";
  click.style.visibility = "visible";
  click.disabled = false;
  document.getElementById('timerem').innerHTML = timeLeft.toString();
  Timer = setInterval(stopTimer,1000);
}

function updateScore() {
  score++;
  document.getElementById('score').innerHTML = score.toString();
}

function stopTimer() {
  if(timeLeft === 0) {
    clearInterval(Timer);
    click.disabled = true;
    start.style.visibility = "visible";
    document.getElementById('scoreps').innerHTML = (Math.floor(score/10)).toString();
  }
  else {
    timeLeft--;
    document.getElementById('timerem').innerHTML = timeLeft.toString();
  }
}
//End of button clicker

// Color code slider
function rgbToHex(r,g,b) {
  var r = parseInt(r).toString(16);
  var g = parseInt(g).toString(16);
  var b = parseInt(b).toString(16);

  rHex = (r.length == 1 ? "0" + r : r);
  gHex = (g.length == 1 ? "0" + g : g);
  bHex = (b.length == 1 ? "0" + b : b);

  return "#" + rHex + gHex + bHex;
}

const rSlider = document.getElementById("slider-r");
const gSlider = document.getElementById("slider-g");
const bSlider = document.getElementById("slider-b");

rSlider.addEventListener('input', updateColor);
gSlider.addEventListener('input', updateColor);
bSlider.addEventListener('input', updateColor);

function updateColor() {
  var colorCode = rgbToHex(rSlider.value, gSlider.value, bSlider.value);

  document.getElementById("color").style.backgroundColor = colorCode;

  rSlider.nextElementSibling.innerHTML = "R: " + rSlider.value;
  gSlider.nextElementSibling.innerHTML = "G: " + gSlider.value;
  bSlider.nextElementSibling.innerHTML = "B: " + bSlider.value;
  document.getElementById("color-code").innerHTML = colorCode;
}
// End color slider