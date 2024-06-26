let Books = {
    data:[
        {
            BookName: "The Power of Habit",
            Author:"Charles Duhigg",
            category: "Other..",
            rate: "4.1",
            image: "../images/The Power of Habit.jpg",
        },
        {
            BookName: "Life of Pi",
            Author:"Yann Martel",
            category: "Fantasy",
            rate: "3.9",
            image: "../images/Life Of Pi.jpg",
        },
        {
            BookName: "The Fault in Our Stars",
            Author:"John Green",
            category: "Fiction",
            rate: "4.1",
            image: "../images/the fault in our stars.jpg",
        },
        {
            BookName: "The Alchemist",
            Author:"Paulo Coelho",
            category: "Adventure",
            rate: "3.9",
            image: "../images/The Alchemist by Paulo Coelho - BookBub.jpg",
        },
        {
            BookName: "Productivity is for robots",
            Author:"Corey McComb",
            category: "Other..",
            rate: "3.8",
            image: "../images/productivity-book.jpg",
        },
        {
            BookName: "The Guns of August",
            Author:"Barbara W. Tuchman",
            category: "History",
            rate: "4.2",
            image: "../images/The Guns Of August.jpg",
        },
        {
            BookName: "A World Undone",
            Author:" G. J. Meyer",
            category: "History",
            rate: "4.4",
            image: "../images/A World Undone.jpg",
        },
        {
            BookName: "Batman: The Killing Joke",
            Author:"Alan Moore",
            category: "Comics",
            rate: "4.4",
            image: "../images/Batman The Killing Joke.jpg",
        },
        {
            BookName: "Picture this",
            Author:"Molly Bang",
            category: "Art",
            rate: "4.2",
            image: "../images/Picture this.jpg",
        },
        {
            BookName: "The Wedding Date",
            Author:"Jasmine Guillory",
            category: "Romance",
            rate: "3.6",
            image: "../images/The Wedding Date.jpg",
        },

    ],
};

for (let i of Books.data){


    let card = document.createElement("div");
    card.classList.add("card",i.category,"hide");


    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container");


    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);


    let container = document.createElement("div");
    container.classList.add("container");


    let name=document.createElement("h3");
    name.classList.add("Book-name");
    name.innerText = i.BookName.toUpperCase();
    container.appendChild(name);


    let author=document.createElement("h6");
    author.classList.add("Autor-name")
    author.innerText = i.Author.toUpperCase();
    container.appendChild(author);


    let rating=document.createElement("h2");
    rating.innerHTML = `<i class="star-icon">&#9733;</i> ${i.rate}`;
    container.appendChild(rating);

    
    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterBook(value){
    let buttons= document.querySelectorAll(".button-value")
    buttons.forEach((button) =>{
      if (value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
      }
      else{
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
    
    if (value == "All Books") {
      element.classList.remove("hide");
    } else {      
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {        
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {

    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".Book-name") ;
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {

      if (element.innerText.includes(searchInput)) {
        cards[index].classList.remove("hide");
      }
       else {
        cards[index].classList.add("hide");
      }
      
    });
  });

window.onload = () => {
    filterBook("All Books");
};