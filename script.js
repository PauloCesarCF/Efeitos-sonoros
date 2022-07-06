const uepaPlay = document.querySelector('.uepaPlay');

document.addEventListener('keypress', function(event){
    if(event.key === 'u'){
        const teste = document.querySelector('.uepaAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === '1'){
        const teste = document.querySelector('.tomeAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'p'){
        const teste = document.querySelector('.pareAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === '2'){
        const teste = document.querySelector('.tapaAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'e'){
        const teste = document.querySelector('.esquecaAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'r'){
        const teste = document.querySelector('.rapazAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'f'){
        const teste = document.querySelector('.filhoAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'a'){
        const teste = document.querySelector('.aiAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'b'){
        const teste = document.querySelector('.brasilAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'c'){
        const teste = document.querySelector('.cavaloAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === '3'){
        const teste = document.querySelector('.chegaAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'd'){
        const teste = document.querySelector('.demaisAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === '4'){
        const teste = document.querySelector('.brincadeiraAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'g'){
        const teste = document.querySelector('.gostaAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'i'){
        const teste = document.querySelector('.iraAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'n'){
        const teste = document.querySelector('.naoAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 's'){
        const teste = document.querySelector('.inentendivelAudio');
        teste.currentTime = 0;
        teste.play();
    }else if(event.key === 'h'){
        const teste = document.querySelector('.helloAudio');
        teste.currentTime = 0;
        teste.play();
    }
});

uepaPlay.addEventListener('click', function(){
    const teste = document.querySelector('.uepaAudio')
    teste.currentTime = 0;
    teste.play();
});