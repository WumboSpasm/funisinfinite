/*
    Majin Sonic art by SwitchKaze (used with permission) https://twitter.com/sxkaze/status/1432372544754044928
    Music from KHInsider https://downloads.khinsider.com/game-soundtracks/album/sonic-cd-2011/51-us-boss.mp3
    Sonic art taken from SEGA merch and AI upscaled
*/
const chars = [
        '\u2591',
        '\u2592',
        '\u2593',
        '\u2588'
    ];
let zoom = 50;

function fun() {
    window.scrollTo(
        Math.floor(Math.random() * document.body.clientWidth), 
        Math.floor(Math.random() * document.body.clientHeight)
    );
    
    let title = '';
    for (let i = 0; i < 256; i++)
        title += chars[Math.floor(Math.random() * chars.length)];
    
    document.title = title;
    window.location.hash = title;
}

function infinite() {
    document.body.style.backgroundColor = '#000';
    document.body.style.cursor = 'none';
    document.querySelector('img').remove();
    document.querySelector('img').hidden = false;
    document.querySelector('audio').play();
    
    let hue = () => Math.round(Math.random() * 15).toString(16);
    let once = false;
    
    setInterval(() => {
        if (zoom < 90) {
            zoom += 0.1;
            document.querySelector('img').style.width = zoom + 'vmin';
        } else {
            if (!once) {
                document.querySelector('img').style.width = '100vmin';
                document.querySelector('img').style.filter = 'contrast(100) grayscale(1) brightness(100)';
                document.querySelector('audio').playbackRate = 4;
                document.querySelector('div').style.left = Math.floor(Math.random() * (window.innerWidth - document.querySelector('div').clientWidth)) + 'px';
                document.querySelector('div').style.top = Math.floor(Math.random() * (window.innerHeight - document.querySelector('div').clientHeight)) + 'px';
                document.querySelector('div').hidden = false;
                once = true;
            }
            document.querySelector('div').style.color = '#' + hue() + hue() + hue();
        }
        
        fun();
    }, 50);
}