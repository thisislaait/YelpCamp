const cardsArr = [
 {
   id: 1,
   title: "Mount Ulap",
   des: "One of the most famous hikes in Benguet is Mt Ulap",
   img: "/Assets/Camp Images/Compressed Images/Mount Ulap.jpg", 
   route: "#",
 },

 {
   id: 2,
   title: "Mount Ulap",
   des: "One of the most famous hikes in Benguet is Mt Ulap",
   img: "/Assets/Camp Images/Compressed Images/Calaguas Island.jpg", 
   route: "#",
 },

 {
   id: 3,
   title: "Mount Ulap",
   des: "One of the most famous hikes in Benguet is Mt Ulap",
   img: "/Assets/Camp Images/Compressed Images/Onay Beach.jpg", 
   route: "#",
 },

 {
   id: 4,
   title: "Mount Ulap",
   des: "One of the most famous hikes in Benguet is Mt Ulap",
   img: "/Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg", 
   route: "#",
 },

 {
   id: 5,
   title: "Mount Ulap",
   des: "One of the most famous hikes in Benguet is Mt Ulap",
   img: "/Assets/Camp Images/Compressed Images/Latik Riverside.jpg", 
   route: "#",
 },

 {
   id: 6,
   title: "Mount Ulap",
   des: "One of the most famous hikes in Benguet is Mt Ulap",
   img: "/Buloy Springs.jpg", 
   route: "#",
 }

]


const cardContent = document.querySelector(".card-content");

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = cardsArr.map((project, index) => {
 
   return `
         <div class="cards">
           <div class="images" data-name="cards">
             <img src="${project.img}" alt="img1">
             <div class="card-body">
               <h1 class="card_title">${project.title}</h1>
               <p class="card-text">${project.des}</p>
               <button class="card-btn"><a href=${project.route}></a>View Campground</button>
             </div>
           </div>
         </div>
       `;
   });

   cardContent.innerHTML = showInHtml;
 });


 
