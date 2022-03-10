const menuItems = document.querySelector('.menu_items')
const btnMenu = document.querySelector('.btn_menu')
const navBar = document.querySelector('.menu');
const pantallaPequenia = window.matchMedia("(max-width: 858px)");
document.addEventListener('DOMContentLoaded', () => {
    btnMenu.addEventListener('click', mostrarMenu);
    menuItems.addEventListener('click', mostrarMenu);
});

function mostrarMenu() {
    if (pantallaPequenia.matches) {
        const body = document.querySelector('body');
        menuItems.classList.toggle('show');
        body.classList.toggle('no_scroll')
    }
};

/* let img = document.querySelector('.img')
img.addEventListener('load',()=>{
    console.log("Imagen cargada");
}) */

/* window.addEventListener('load',(x)=>{
    console.log(x.type);
}) */

/* Animations  */



    gsap.from('.inicio_mensaje1', {
        y: -10,
         autoAlpha: 0,
          delay: 1 
        })
    gsap.from('.inicio_nombre', {
        y: -10, 
        autoAlpha: 0, 
        delay: 2 
    })
    gsap.from('.inicio_mensaje2', {
        y: -10,
         autoAlpha: 0,
          delay: 3
        })
    gsap.from('.habilidades_title', 
    {scrollTrigger: {
        trigger: '.habilidades_title',
        toggleActions: 'restart none none restart'
    },
    x: "-=300px",
    autoAlpha: 0,
    ease:"bounce.out",
    duration:3 
    })
    gsap.from('.tecnologias-manejo', 
    {scrollTrigger: 
        {trigger: '.tecnologias-manejo',
        toggleActions: 'restart none none restart'
    },
    x: "+=300px",
    autoAlpha: 0,
    duration:3 
    })
    
    gsap.from('.sobre-mi_title', 
    {scrollTrigger: 
        {trigger: '.sobre-mi_title',
         toggleActions: 'restart none none restart'
        }, 
        x: "-=500px", 
        autoAlpha: 0,
        ease:"circ",
        duration:1.5 
    })
    gsap.from('.contacto_title', 
    {scrollTrigger: 
        {trigger: '.contacto_title',
         toggleActions: 'restart none none restart'}, 
         x: "-=300px", autoAlpha: 0,ease:"bounce.out",duration:3})
    gsap.from('.tecnologias', {scrollTrigger: {trigger: '.tecnologias', }, x: "-=500px", autoAlpha: 0, duration: 1.5, delay: 0.5 })
    
    gsap.from('.habilidades-blandas', {scrollTrigger: {trigger: '.habilidades-blandas',},x: "+=500px",autoAlpha: 0,ease:"bounce.out",duration:3,delay: 0.5})
    
    gsap.from('.sobre-mi_img', {scrollTrigger: {trigger: '.sobre-mi_img',toggleActions: 'restart none none restart'},x: "-=500px",autoAlpha: 0,duration: 1.5,delay: 0.5,ease:"circ"})
    
    gsap.from('.sobre-mi_descripcion', {scrollTrigger: {trigger: '.sobre-mi_descripcion'},x: "+=500px",autoAlpha: 0,duration: 1,delay: 0.5})
    
    gsap.from('.contacto_container', {scrollTrigger: {trigger: '.contacto_container',},scale: 0.7,top: -100,autoAlpha: 0,duration: 1,delay:0.5,})


    const imgsProjects = document.querySelectorAll('.img-project')
    const explications = document.querySelectorAll('.explicacion')
    const linksContainer = document.querySelectorAll('.links-container')

    imgsProjects.forEach(el=>{
        explications.forEach(exp=>{
            linksContainer.forEach(linkC =>{
        el.addEventListener('mouseover',()=>{
            exp.classList.add('active')
            linkC.style.display = 'none'
        })

        el.addEventListener('mouseout',()=>{
            exp.classList.remove('active')
            linkC.style.display = 'block'
        })
        })
        })
    })