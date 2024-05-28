document.addEventListener("DOMContentLoaded", function() {
    var backgrounds = [
        'kepek/hatter1.png',
        'kepek/hatter2.png',
        'kepek/hatter3.png',
        'kepek/hatter4.png',
        'kepek/hatter5.png',
        'kepek/hatter6.png',
        'kepek/hatter7.png',
        'kepek/hatter8.png',
        'kepek/hatter9.png',
        'kepek/hatter10.png'
    ];

    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    var selectedBackground = backgrounds[randomIndex];

    document.body.style.backgroundImage = 'url(' + selectedBackground + ')';
});

const images = [
    'kepek/info1.png',
    'kepek/info2.png',
    'kepek/info3.png',
    'kepek/info4.png',
    'kepek/info5.png',
    'kepek/info6.png',
    'kepek/info7.png',
    'kepek/info8.png',
    'kepek/info9.png',
    'kepek/info10.png',
    'kepek/info11.png',
    'kepek/info12.png',
    'kepek/info13.png',
    'kepek/info14.png',
    'kepek/info15.png',
    'kepek/info16.png',
    'kepek/agent3.png',
    'kepek/agent4.png',
    'kepek/agent3,5.png',
    'kepek/agent8.png',
    'kepek/sr3.png'
];

function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.getElementById('randomImage').src = randomImage;
}

window.onload = generateRandomImage;