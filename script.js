document.querySelectorAll('.add-to-backpack').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const itemName = card.querySelector('h3').textContent;
    const itemImageSrc = card.querySelector('img').src; // Obtemos o SRC da imagem
    const listItem = document.createElement('li');
    listItem.innerHTML = `<img src="${itemImageSrc}" alt="${itemName}" class="item-image"> ${itemName}`; // Adicionamos a imagem pequena junto ao nome do item
    document.querySelector('.backpack ul').appendChild(listItem);
  });
});

document.getElementById('show-backpack').addEventListener('click', () => {
  document.querySelector('.backpack').classList.toggle('hidden');
});

document.getElementById('close-backpack').addEventListener('click', () => {
  document.querySelector('.backpack').classList.add('hidden');
});

// seleciona o elemento pai
var parent = document.querySelector('ul');

// adiciona um evento de clique ao elemento pai
parent.addEventListener('click', function(e) {
  // verifica se o elemento clicado é um 'li'
  if (e.target && e.target.nodeName == 'LI') {
    // remove o elemento li quando ele é clicado
    e.target.remove();
  }
});