let extendIcon = document.querySelectorAll('.extend-icon');
const paragraphContent = document.querySelectorAll('.dc-content');
const iconMinus = './assets/images/icon-minus.svg';
const iconPlus = './assets/images/icon-plus.svg';


function changeIcon() {
    for (let i = 0; i < extendIcon.length; i++) {
        if (paragraphContent[i].classList.contains('hidden')) {
            extendIcon[i].src = iconPlus;
        } else {
            extendIcon[i].src = iconMinus;
        }
    }
}


for (let i = 0; i < extendIcon.length; i++) {
    extendIcon[i].addEventListener("click", () => {
        paragraphContent[i].classList.toggle('hidden');
        changeIcon();
    });
}






