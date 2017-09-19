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

let  form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//adding items:
form.addEventListener('submit', addItem);
function addItem(e) { 
  
  e.preventDefault(); //prevent normal submition of html form
  let newItem = document.getElementById('item');
  
  if(newItem.value){
    let li = document.createElement('li');
    li.className = 'list-item';
    li.appendChild(document.createTextNode(newItem.value));
  
    let delBtn = document.createElement('button'); 
    delBtn.appendChild(document.createTextNode('X'));
    delBtn.className = 'delBtn'
    li.appendChild(delBtn); //adds button to created li

    itemList.appendChild(li);
  } else {
    window.alert("Enter something");
  }
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