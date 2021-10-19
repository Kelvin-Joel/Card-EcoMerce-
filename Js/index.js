const draggable = document.getElementById("draggable");

new Sortable(draggable, {
  animation: 350,
});

const DatosCar=[
    {
        img:'./Img/html-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/50.00"
    },
    {
        img:'./Img/node-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/70.00"
    },
    {
        img:'./Img/react-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/45.00"
    },
    {
        img:'./Img/sass-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/65.00"
    },
    {
        img:'./Img/10-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/80.00"
    },
    {
        img:'./Img/2-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/850.00"
    },
    {
        img:'./Img/1-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/60.00"
    },
    {
        img:'./Img/8-removebg-preview.png',
        name:'Rayan a-line Dress',
        price:"S/40.00"
    },
]

const InsertHtml=()=>{
    for(let index of DatosCar)
    {
    draggable.innerHTML+=`
    <div class="card">
        <div class="card__img">
          <img src=${index.img} alt="" />
          <div class="barra_lateral_card">
            <span><i class="fas fa-heart"></i></span>
            <span><i class="fas fa-shopping-cart"></i></span>
            <span><i class="fas fa-eye"></i></span>
          </div>
        </div>
        <div class="card__description">
          <p class="text__description">${index.name}</p>
          <span class="price">${index.price}</span>
          <span class="starts">
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star yellow"></i>
            <i class="fas fa-star gris"></i>
          </span>
        </div>
      </div>
    `
    }
}
InsertHtml()