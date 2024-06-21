document.addEventListener('touchmove',createFlower);
document.addEventListener('touchstart',createFlower);
document.addEventListener('click',createFlower);

function createFlower(event){
    event.preventDefault();
    let x , y;
    if (event.type === 'click') {
        x = event.clientX;
        y = event.clientY;
    } else if (event.type === 'touchstart' ||event.type === 'touchmove' ) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    }
    let sources = ['xflower1.png','xflower2.png','xflower3.png','xflower4.png','xflower5.png'];
    let img = document.createElement('img');
    img.style.position = 'absolute';
    img.style.top = `${y-25}px`;
    img.style.left = `${x-25}px`;
    img.style.zIndex = -1;
    let RandIdx = Math.floor(Math.random() * 5);
    console.log(RandIdx);
    img.src = sources[RandIdx];
    img.style.width = '50px';
    img.style.height = '50px';
    document.body.appendChild(img);
    setTimeout(()=>{
        img.remove();
    },5000)
}