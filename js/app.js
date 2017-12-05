var locationForm = document.body.children[1].children[1];
var principalSection = document.getElementById('principal-section');
var listTarjet = document.getElementsByClassName('listTarjet')[0];
//var containerText = documente.get

document. getElementById("addNewFormat").addEventListener("click", newFormat);

function newFormat() {
    var divContainer = document.createElement("div");
      divContainer.className = "container-text";
      locationForm.appendChild(divContainer);
    var inputContainer = document.createElement ("input");
      inputContainer.className = "input-container";
      divContainer.appendChild(inputContainer);
    var btnSend = document.createElement ("button");
    var textButton = document.createTextNode ("Save")
      btnSend.className = "btn-send";
      btnSend.setAttribute('onclick','newList()');
      divContainer.appendChild(btnSend);
      btnSend.appendChild(textButton);
    var btnClose = document.createElement ("button");
    var textClose = document.createTextNode ("X")
      btnClose.className = "btn-close";
      btnClose.setAttribute("onclick","disappear()")
      divContainer.appendChild(btnClose);
      btnClose.appendChild(textClose);
}

  function disappear () {
    var dad = document.getElementById("principal-section");
    dad.removeChild(dad.childNodes[2]);
  }

// click.preventDefault();
// add.addEventListener('click',newList);

var newList = function() {
  //console.log('esto funciona');
  var listTarjet = document.createElement('div');
  var tittleList = document.createElement('p');
  var textTittleList = document.getElementsByClassName('input-container')[0].value;
  tittleList.innerText = textTittleList;
  listTarjet.appendChild(tittleList);
  var addCard = document.createElement('a');
  addCard.innerText = ('Añadir una tarjeta...');
  listTarjet.appendChild(addCard);
  principalSection.insertBefore(listTarjet,document. getElementById("addNewFormat"))
}

console.log('vamos, go');
