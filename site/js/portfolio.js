const changeAvatar = () => {
    const avatar = document.getElementById('avatar');
    avatar.src = './image/avatar.svg'
}



const changeName = () => {
    const name = document.getElementById('name');
    const color = prompt('Choose a color!')
    const userName = prompt('What is your name?');
    const pinkBg = document.querySelectorAll('.pink-bg');
    const pinkText = document.getElementsByClassName('pink-text');

    name.textContent = userName;
    name.style.color = 'white';

    for (i=0; i < pinkBg.length; i++) {
        pinkBg[i].style.backgroundColor = color;
    }

    for (i=0; i < pinkText.length; i++) {
        pinkText[i].style.color = color;
    }

}