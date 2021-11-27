document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init() {
    const dev = document.querySelector('.dev');
    let text = 'Web developer'
    let arrayText = text.split('');

    arrayText.forEach(function(letter, index) {
        setTimeout(function() {
            dev.innerHTML += letter;
            consolelog(letter);
            //let remove = dev.innerText.slice(0, -1);
            //console.log(dev.innerText);
            //dev.innerText = remove;
            //console.log(remove);
        }, index * 150);
    });
    console.log('out')
    
}