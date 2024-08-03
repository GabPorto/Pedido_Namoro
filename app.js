const naoBtn = document.querySelector('#nao');
const simBtn = document.querySelector('#sim');
const img = document.querySelector('.img');

simBtn.addEventListener('mouseover', ()=>{
    img.style.backgroundImage = "url('https://uniquebox.vteximg.com.br/arquivos/ids/158485/pedido-de-namoro_right.png?v=636936274608270000')"
});
simBtn.addEventListener('mouseout', ()=>{
    img.style.backgroundImage = "url('https://uniquebox.vteximg.com.br/arquivos/ids/158482/pedido-de-namoro_front.png?v=636936274247270000')"
});
naoBtn.addEventListener('mouseover', ()=>{
   naoBtn.style.position = 'absolute';
    naoBtn.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    naoBtn.style.top = Math.floor(Math.random() * window.innerHeight) + "px"; 
});

function changerColor(){
                    let r = Math.floor(Math.random() * 256);
                    let g = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                    setTimeout(changerColor, 3000);
}
changerColor();