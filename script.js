window.addEventListener('load', function(){
    const textInput = document.getElementById('textInput')
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(ctx);


    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0.3, 'blue');
    gradient.addColorStop(0.5, 'aqua');
    gradient.addColorStop(0.7, 'blue');
    ctx.fillStyle = gradient;
    ctx.strokeStyle = 'orangered';
    ctx.font = '80px impact';
    ctx.textAlign = 'center';
    ctx.textBaseLine = 'middle';

    const maxTextWidth = canvas.width * 0.9;
    const lineHeight = 80;

    function wrapText(text){
        let linesArray = [];
        let lineCounter = 0;
        let line = '';
        let words = text.split(' ');
        for (const element of words){
            let testLine = line + element + ' ';
            if (ctx.measureText(testLine).width > maxTextWidth){
                line = element + ' ';
                lineCounter++;
            } else {
                line = testLine;
            }
            linesArray[lineCounter] = line;
        };
        let textHeight = lineHeight * lineCounter;
        let textY = canvas.height/2 - textHeight/2;
        linesArray.forEach((el, index) => {
            ctx.fillText(el, canvas.width/2, textY + (index * lineHeight));
        });
        
    };

    textInput.addEventListener('keyup', function(e){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        wrapText(e.target.value);
    })

});