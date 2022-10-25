let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];


//=================PART 1=================
// DOM's personal website title is a bit wordy. Write a JavaScript statement that 
// selects the #main-title ID element. Remember there are a couple of ways to query
// id. Change the text of the title to something shorter.

function shortenTitle () {
  document.getElementById('main-title').innerHTML = "Dom's Garage <br> Family First";
}

shortenTitle ()



//=================PART 2=================

//Select the body and change the background-color to a new color of your choice.


function changeColor () {
  document.body.style.backgroundColor = "#99C1B9"
}

changeColor ()




//=================PART 3=================
//Select DOM's Favorite Things list and remove the last list item.


function reomveLast () {
let ulEl = document.getElementById('favorite-things')
ulEl.removeChild(ulEl.lastElementChild)
}

reomveLast ()






//=================PART 4=================
// Select all .special-title class elements and change their font-size to 2rem.
// Remember you might have to iterate through the list of elements



function changeTitle () { 
let title = document.querySelectorAll('.special-title');

title.forEach ((title) => {
  title.style.fontSize = '2rem'
})

}

changeTitle ()





//=================PART 5=================
//Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.



function removeChicago() {
const neverRaced = document.querySelectorAll('#past-races > li')
for (let i = 0; i < neverRaced.length; i++) {
  if (neverRaced[i].innerHTML === 'Chicago'){
      neverRaced[i].parentNode.removeChild(neverRaced[i]);
    }
}
}

removeChicago()






//=================PART 6=================
//Let's add to DOM's Past Races list. Create a new <li> element, 
//change the new <li> text to the name of a city, and append it to the Past Races 
//list.




function addCity() {
  let newLiEl = document.createElement('li');                             
  newLiEl.textContent = 'Malibu';                                          
  let pastRacesUlEl = document.getElementById('past-races');
  pastRacesUlEl.append(newLiEl);                                          
  return newLiEl;
}
let newLiElement = addCity();







//=================PART 7=================
// Create a new .blog-post corresponding to the new city added in Part 6. 
// You will have to create a new <div> with class of .blog-post, a new <h2> with text,
// and a new <p> with some text. Think about what order you want to create 
// the elements, and what order you want to append them in.


function createBlogPost () {
  let mainEl = document.querySelector('.main')
  let blogDiv = document.createElement('div')
  blogDiv.classList.add('blog-post', 'red')
  let blogH1 = document.createElement('h1')
  blogH1.textContent = newLiElement.textContent
  let blogP = document.createElement('p')
  blogP.textContent = 'Malibu nights were the best nights'
  blogDiv.append(blogH1, blogP)
  mainEl.append(blogDiv)
}

createBlogPost(newLiElement)






//=================PART 8=================

//Query select the #quote-title ID element and add a click event handler. 
//That event handler should use the function randomQuotewhenever 
//#quote-title is clicked.

function quoteChanger () {
const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};


const quoteSelect = document.getElementById("quote-title")

quoteSelect.addEventListener("click", randomQuote ())
}
quoteChanger()










//=================PART 9=================
// Select all .blog-post class elements. Iterate through the list of .blog-post
// class elements and apply two event handlers to each node. 
//The first event handler should be listening for mouseout events while the 
//second handler should be listening for mouseenter events.


// The mouseout handler should toggle the class .purple
// The mouseenter handler should toggle the class .red


function addMouse (){
  let blogPosts = document.querySelectorAll('.blog-post')
  blogPosts.forEach(function(post){
    post.addEventListener('mouseout',function(){
      post.classList.toggle("red")
    })
    post.addEventListener('mouseenter',function(){
      post.classList.toggle("red")
    })
  })
 
}

addMouse()












