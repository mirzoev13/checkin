const accordeon = document.querySelectorAll('.accordeon');


for (let i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener('click', () => {
        const content = accordeon[i].querySelector('.content');
        const icon = accordeon[i].querySelector('i')
        icon.classList.toggle('active');
        content.classList.toggle('active');
    });    
}