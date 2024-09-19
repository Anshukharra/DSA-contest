function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarContainer = document.querySelector('.sidebar-container');

  if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
      sidebarContainer.classList.remove('open');
  } else {
      sidebar.style.width = '250px';
      sidebarContainer.classList.add('open');
  }
}



const recipes = [
  { name: "Veggie Delight", imageSrc: "https://media.gettyimages.com/id/1140006563/photo/indian-coconut-chicken-curry-cauliflower-rice.jpg?s=612x612&w=0&k=20&c=94thduRbpd8ikBGRmCpMx4H0wXQ9J2OTlPkXIVROcp8=", time: "30 min", type: "veg", isLiked: false, rating: 4.2 },


  { name: "Chicken Grill", imageSrc: "https://media.gettyimages.com/id/510658399/photo/whole-roasted-chicken.jpg?s=612x612&w=0&k=20&c=70WAOuUv6Cja0_MspHDoEEXZA9LlHqAj6QMtx7FZEPA=", time: "45 min", type: "non-veg", isLiked: false, rating: 4.5 },

  { name: "Cheese Pizza", imageSrc: "https://media.gettyimages.com/id/1477721888/photo/pizza-margherita-on-a-plate.jpg?s=612x612&w=0&k=20&c=aAJdpzCcPKxkeDBSWCae0Lb6h0txPsC7yGSbMxrzyn8=", time: "40 min", type: "veg", isLiked: false, rating: 4.1 },

  { name: "Steak", imageSrc: "https://media.gettyimages.com/id/1302468365/photo/garlic-butter-steak-with-green-beans-and-vegetables-salad.jpg?s=612x612&w=0&k=20&c=aRkcT_xQWNFuJqjEo1wYT4hhQ0He8qfxPPNFl3W6gw0=", time: "60 min", type: "non-veg", isLiked: false, rating: 4.7 },

  { name: "Grilled Salmon", imageSrc: "https://media.gettyimages.com/id/1367987023/photo/roasted-salmon-with-vegetables.jpg?s=612x612&w=0&k=20&c=9MTIUiXE_oayA7i8Js9Axy2KGUezgdMLccSDsBxpXsw=", time: "50 min", type: "non-veg", isLiked: false, rating: 4.6 },

  { name: "Tomato Pasta", imageSrc: "https://media.gettyimages.com/id/1803824176/photo/top-view-of-homemade-tomato-basil-pasta-served-on-a-plate-with-copy-space.jpg?s=612x612&w=0&k=20&c=TIfLSVPpnsd4bgyF-kpFsXRCXSykxueCg83isxH4vnc=", time: "35 min", type: "veg", isLiked: false, rating: 4.0 },

  { name: "Vegan Salad", imageSrc: "https://media.gettyimages.com/id/1319831755/photo/fig-toast-with-edible-flowers-directly-above-view.jpg?s=612x612&w=0&k=20&c=zQU-wP41Xsdbs1lHftWYuVmAtDcP8zTeZNCAE76UVSY=", time: "20 min", type: "veg", isLiked: false, rating: 3.9 },

  { name: "Fried Chicken", imageSrc: "https://media.gettyimages.com/id/1319831755/photo/fig-toast-with-edible-flowers-directly-above-view.jpg?s=612x612&w=0&k=20&c=zQU-wP41Xsdbs1lHftWYuVmAtDcP8zTeZNCAE76UVSY=", time: "55 min", type: "non-veg", isLiked: false, rating: 4.3 },

  { name: "Mushroom Risotto", imageSrc: "https://media.gettyimages.com/id/1319831755/photo/fig-toast-with-edible-flowers-directly-above-view.jpg?s=612x612&w=0&k=20&c=zQU-wP41Xsdbs1lHftWYuVmAtDcP8zTeZNCAE76UVSY=", time: "45 min", type: "veg", isLiked: false, rating: 4.5 },

  { name: "Burger", imageSrc: "https://media.gettyimages.com/id/1319831755/photo/fig-toast-with-edible-flowers-directly-above-view.jpg?s=612x612&w=0&k=20&c=zQU-wP41Xsdbs1lHftWYuVmAtDcP8zTeZNCAE76UVSY=", time: "30 min", type: "non-veg", isLiked: false, rating: 4.2 },
  
  { name: "Paneer Tikka", imageSrc: "https://media.gettyimages.com/id/1319831755/photo/fig-toast-with-edible-flowers-directly-above-view.jpg?s=612x612&w=0&k=20&c=zQU-wP41Xsdbs1lHftWYuVmAtDcP8zTeZNCAE76UVSY=", time: "40 min", type: "veg", isLiked: false, rating: 4.4 },

  { name: "BBQ Ribs", imageSrc: "https://media.gettyimages.com/id/1319831755/photo/fig-toast-with-edible-flowers-directly-above-view.jpg?s=612x612&w=0&k=20&c=zQU-wP41Xsdbs1lHftWYuVmAtDcP8zTeZNCAE76UVSY=", time: "70 min", type: "non-veg", isLiked: false, rating: 4.6 },

 
];

function displayRecipes(recipesToDisplay) {
  const recipeContainer = document.getElementById('recipeContainer');
  recipeContainer.innerHTML = '';

  recipesToDisplay.forEach(recipe => {
      const card = document.createElement('div');
      card.classList.add('recipe-card');
      card.innerHTML = `
          <img src="${recipe.imageSrc}" alt="${recipe.name}">
          <div class="recipe-info">
              <h3>${recipe.name}</h3>
              <p>Type: ${recipe.type}</p>
              <p>Time: ${recipe.time}</p>
              <p>Rating: ${recipe.rating}</p>
              <span class="heart-icon" onclick="toggleLike('${recipe.name}')">${recipe.isLiked ? '❤️' : '🤍'}</span>
          </div>
      `;
      recipeContainer.appendChild(card);
  });
}

function filterRecipes() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
  displayRecipes(filteredRecipes);
}

function toggleType(type) {
  let filteredRecipes = recipes;

  if (type !== 'all') {
      filteredRecipes = recipes.filter(recipe => recipe.type === type);
  }

  displayRecipes(filteredRecipes);
}

function filterByRating(threshold) {
  const filteredRecipes = recipes.filter(recipe => (threshold === 4.5 ? recipe.rating > 4.5 : recipe.rating < 4.0));
  displayRecipes(filteredRecipes);
}

function toggleLike(name) {
  const recipe = recipes.find(recipe => recipe.name === name);
  recipe.isLiked = !recipe.isLiked;
  displayRecipes(recipes);
}

// Initially display all recipes
displayRecipes(recipes);


