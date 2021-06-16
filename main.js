 const btn = document.getElementsByClassName('btn');
 const randomMeal = document.getElementsByClassName('randomMeal'); 
 const info = document.getElementsByClassName('info');
 const details = document.getElementsByClassName('details');

btn[0].addEventListener('click', hungryMan); 

  async function hungryMan() {
  const api = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const response = await api.json();
  randomMeal[0].src = response.meals[0].strMealThumb;
  info[0].innerHTML =  response.meals[0].strMeal;
  details[0].innerHTML = response.meals[0].strInstructions;
  
};

hungryMan();

