// ⭐ Recipe data (new set)
const recipes = [
{
id:1,
title:"Paneer Butter Masala",
time:35,
difficulty:"medium",
rating:4.7,
image:"https://source.unsplash.com/400x300/?paneer",
category:"curry",
description:"Creamy tomato based paneer curry loved across India."
},
{
id:2,
title:"Avocado Toast",
time:10,
difficulty:"easy",
rating:4.3,
image:"https://source.unsplash.com/400x300/?avocado-toast",
category:"breakfast",
description:"Healthy smashed avocado on toasted bread."
},
{
id:3,
title:"Chocolate Lava Cake",
time:40,
difficulty:"hard",
rating:4.9,
image:"https://source.unsplash.com/400x300/?lava-cake",
category:"dessert",
description:"Rich chocolate cake with molten center."
},
{
id:4,
title:"Veg Fried Rice",
time:20,
difficulty:"easy",
rating:4.4,
image:"https://source.unsplash.com/400x300/?fried-rice",
category:"rice",
description:"Quick stir fried rice with vegetables."
},
{
id:5,
title:"Butter Chicken",
time:50,
difficulty:"medium",
rating:4.8,
image:"https://source.unsplash.com/400x300/?butter-chicken",
category:"curry",
description:"Classic creamy chicken curry."
},
{
id:6,
title:"Tacos",
time:25,
difficulty:"easy",
rating:4.2,
image:"https://source.unsplash.com/400x300/?tacos",
category:"mexican",
description:"Mexican tortillas filled with veggies & sauce."
},
{
id:7,
title:"Lasagna",
time:90,
difficulty:"hard",
rating:4.6,
image:"https://source.unsplash.com/400x300/?lasagna",
category:"pasta",
description:"Layered pasta with cheese and meat sauce."
},
{
id:8,
title:"Smoothie Bowl",
time:15,
difficulty:"easy",
rating:4.5,
image:"https://source.unsplash.com/400x300/?smoothie-bowl",
category:"healthy",
description:"Fruit smoothie topped with nuts & berries."
}
];

// ⭐ DOM selection
const container = document.querySelector("#recipe-container");

// ⭐ emoji helper
const getEmoji = (category)=>{
const map={
curry:"🍛",
dessert:"🍰",
breakfast:"🥑",
rice:"🍚",
mexican:"🌮",
pasta:"🍝",
healthy:"🥗"
};
return map[category] || "🍽️";
};

// ⭐ card creator
const createCard = (recipe)=>{
return `
<div class="recipe-card">
<img src="${recipe.image}" alt="${recipe.title}">
<h3>${getEmoji(recipe.category)} ${recipe.title}</h3>

<div class="recipe-meta">
<span>⏱ ${recipe.time} min</span>
<span class="difficulty ${recipe.difficulty}">
${recipe.difficulty}
</span>
</div>

<p>${recipe.description}</p>
<p>⭐ ${recipe.rating}</p>

<button onclick="alert('Happy Cooking!')">
Cook Now
</button>
</div>
`;
};

// ⭐ render function
const renderRecipes = (data)=>{
container.innerHTML = data.map(createCard).join("");
};

// ⭐ init
renderRecipes(recipes);