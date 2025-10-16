const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = document.getElementById('passo-' + this.getAttribute('data-proximo'));

        // Fade out do passo atual
        atual.style.opacity = 0;
        setTimeout(() => {
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
            proximoPasso.style.opacity = 0;
            setTimeout(() => proximoPasso.style.opacity = 1, 50);
        }, 300);
    })
})
