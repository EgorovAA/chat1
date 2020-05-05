const menuButton = document.querySelector('#menu');
const actionButton = document.querySelector('#menu-action');
const contentDiv = document.querySelector('.content-div');

menuButton.addEventListener('click', () => {
    const divMenu = document.createElement('div');
    if ( contentDiv.innerHTML !== '' )contentDiv.innerHTML='';

    divMenu.innerHTML = 'Элемент создан';
    divMenu.style.color= 'white';
    const buttonRemove =  document.createElement('button');
    buttonRemove.innerHTML = 'X';


    contentDiv.appendChild(divMenu);
    divMenu.appendChild(buttonRemove);
    console.log(divMenu);
    buttonRemove.addEventListener('click', () => {
        divMenu.innerHTML='';
    })
});

actionButton.addEventListener('click',() => {
    const divMenu = document.createElement('div');
    if ( contentDiv.innerHTML !== '' )contentDiv.innerHTML='';
    contentDiv.innerHTML='';

    divMenu.style.color= 'white';
    const buttonRemove =  document.createElement('button');
    buttonRemove.innerHTML = 'X';

    divMenu.innerHTML = 'Акция';
    contentDiv.appendChild(divMenu)
    divMenu.appendChild(buttonRemove);
    buttonRemove.addEventListener('click', () => {
       divMenu.innerHTML='';

    })
});

