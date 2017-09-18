var arrow = document.getElementById('goDown');

arrow.addEventListener('click', function() {
    document.querySelector('#IntroSection').scrollIntoView({
        behavior: 'smooth'
    });
});
