window.addEventListener('DOMContentLoaded', ()=>{
    const img = document.querySelector('.carousel');
    let image = 1;
    img.style.width = (innerWidth-15)+'px';
    img.style.height = innerHeight+'px';
    setInterval(() => {
        if(innerWidth <= 420){
            if (image >= 8) image = 1; 
            const slide = './images/responsive/'+image+'.jpg' 
            img.style.backgroundImage=`url(${slide})`;
            image++;  
            return;  
        }
        if (image >= 9) image = 1; 
        const slide = './images/slider/'+image+'.jpg' 
        img.style.backgroundImage=`url(${slide})`;
        image++;
    }, 2500);

})