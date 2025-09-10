const Waltimg = document.getElementById("WaltTriste")
const Walttriste = '../img/walt-triste.jpeg';
const Waltfeliz = '../img/walt-feliz.jpeg';
Waltimg.addEventListener('mouseover', ()=>{
    Waltimg.src =Waltfeliz; 
});
Waltimg.addEventListener('mouseout', function() {
    Waltimg.src = Walttriste; 
});
