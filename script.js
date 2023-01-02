const toggle = document.getElementById('toggleDark');
const section = document.querySelector('#duy');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const ul = document.querySelector('#duy2');
const body = document.querySelector('ul#duy2 li')
const strong = document.querySelector('strong')




toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        section.style.background = '#fff';
        section.style.color = 'black';
        section.style.transition = '2s';
        h1.style.background = '#fff';
        h1.style.color = 'black';
        h1.style.transition = '2s';
        h2.style.background = '#fff';
        h2.style.color = 'black';
        h2.style.transition = '2s';
        p.style.background = '#fff';
        p.style.color = 'black';
        p.style.transition = '2s';
        ul.style.background = '#fff';
        ul.style.color = 'black';
        ul.style.transition = '2s';
        body.style.background = '#fff';
        body.style.color = 'black';
        body.style.transition = '2s';
        strong.style.background = '#fff';
        strong.style.color = 'black';
        strong.style.transition = '2s';


    }else{
        section.style.background = '#1a1a1a';
        section.style.color = '#fff';
        section.style.transition = '2s';
        h1.style.background = '#1a1a1a';
        h1.style.color = '#fff';
        h1.style.transition = '2s';
        h2.style.background = '#1a1a1a';
        h2.style.color = '#fff';
        h2.style.transition = '2s';
        p.style.background = '#1a1a1a';
        p.style.color = '#fff';
        p.style.transition = '2s';
        ul.style.background = '#1a1a1a';
        ul.style.color = '#fff';
        ul.style.transition = '2s';
        body.style.background = '#1a1a1a';
        body.style.color = '#fff';
        body.style.transition = '2s';
        strong.style.background = '#1a1a1a';
        strong.style.color = '#fff';
        strong.style.transition = '2s';
        
    }
});
