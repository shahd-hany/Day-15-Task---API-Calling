let userSelect=document.getElementById("userSelction");
let dishes=document.querySelector(".dishes .container .row");
let userSearch=document.querySelector(".menu-search input");
let userSelection=document.querySelector(".menu-search select");
let nav=document.querySelector(".navbar");
let links=document.querySelectorAll(".nav-link");
links=Array.from(links).slice(1);
let button=document.querySelector(".navbar-nav button");
let logo=document.querySelector(".navbar-brand img");
let result=document.getElementById("result");
(function() {
    const recipesList = [ "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", 
        "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", 
        "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", 
        "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili", 
        "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano", 
        "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", 
        "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", 
        "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", 
        "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", 
        "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", 
        "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta", 
        "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake", 
        "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala", 
        "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", 
        "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", 
        "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", 
        "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", 
        "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs" ]
    let selectOptions = "";
    for (let option of recipesList){
        selectOptions += `
            <option value="${option}">${option}</option>
        `
    }
    userSelect.innerHTML = selectOptions;
})();

function DisplayDishes(data){
    let menuData=' ';
    data.map((dish)=>{
     let {image_url,title,social_rank}=dish;
    let full = social_rank/20;
    let half = dish.rank % 20 >= 0.5 ? 1 : 0;
    let empty = 5 - full - half;
    let stars = "";

    for (let i = 0; i < full; i++) stars += '<i class="fas fa-star text-warning"></i>';
    if (half) stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    for (let i = 0; i < empty; i++) stars += '<i class="far fa-star text-warning"></i>';

      menuData+=`
        <div class="col-sm-12 col-md-6 col-lg-4 p-3 ">      
        <div class="dish">
                    <div class="dish-img">
                        <img src="${image_url}">
                    </div>
                    <div class="dish-caption">
                        <div class="dish-title">
                            <h5>${title.split(" ").slice(0,3).join(" ")}</h5>
                        </div>
                       <p>${stars}</p>
                       <button >Order Now</button>
                    </div>
                </div></div>`
    })
   dishes.innerHTML=menuData;
   result.innerHTML=data.length;
}
async function getDishes(categ="pizza"){
try {
    let response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=${categ}`);
    let dishesData=await response.json();
    DisplayDishes(dishesData.recipes)
} catch (error) {
    console.log(error);
    
}}
getDishes();
userSearch.addEventListener("input",(e)=>{
   getDishes(e.target.value.toLowerCase());
})
userSelect.addEventListener("change",(e)=>{
  getDishes(e.target.value.toLowerCase());
})

window.addEventListener("scroll",()=>{
    if (window.scrollY > 50){
        nav.classList.replace("nav-static","nav-scroll");
        links.forEach((link)=>{
          link.classList.remove("text-white");
        });
        button.classList.replace("border-white","border-black");
        button.classList.remove("text-white");
        logo.setAttribute("src","../assets/images/logo@2x.png");
    }
    else {
        nav.classList.replace("nav-scroll","nav-static")
        links.forEach((link)=>{
          link.classList.add("text-white");
        });
        button.classList.replace("border-black","border-white");
        button.classList.add("text-white");
        logo.setAttribute("src","../assets/images/logo@2x_white.png")
    }
})