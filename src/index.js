function init(){
//makes the <form>...</form> an element to grab from HTML to JS
  const inputForm = document.querySelector(`form`);

  //now we're taking the element and adding an eventlistener
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
   const input =document.querySelector(`input#searchByID`)
//event.target returns the DOM element targeted by our event, a <form> in our case.
//event.target has a property, children, that returns an HTMLCollectionLinks to an 
//external site. containing all the nested elements of the event.target element.
   //the event is targetting a specific child, in this case index 1 
   
fetch(`http://localhost:3000/movies/${input.value}`)
.then((response)=>response.json())
.then((moviesData)=>{
  const title = document.querySelector(`section#movieDetails h4`)
  const summary = document.querySelector(`section#movieDetails p`)
    
  title.innerText = moviesData.title;
  summary.innerText = moviesData.summary;

    })

  });
};
document.addEventListener('DOMContentLoaded', init);