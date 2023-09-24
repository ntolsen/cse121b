/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Nicholas Olsen';
let currentYear = '2023';
let profilePicture = 'images/me.jpg';
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('image')
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
let year = document.getElementById("#year").textContent;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Picture of ${fullName}`);
/* Step 5 - Array */
favFoods = ['Burgers', 'Steak', 'Burritos', 'Pizza', 'Schnitzel']
foodElement.innerHTML += `<br>${favFoods}`;
favFood = 'Fettucine Alfredo';
favFoods.push(favfood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;