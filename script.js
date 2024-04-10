document.querySelectorAll('.add-to-backpack').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const itemName = card.querySelector('h3').textContent;
    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    document.querySelector('.backpack ul').appendChild(listItem);
  });
});

document.getElementById('show-backpack').addEventListener('click', () => {
  document.querySelector('.backpack').classList.toggle('hidden');
});

document.getElementById('close-backpack').addEventListener('click', () => {
  document.querySelector('.backpack').classList.add('hidden');
});
