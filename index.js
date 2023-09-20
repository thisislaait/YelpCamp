const cardsArr = [
 {
   id: 1,
   title: "Mount Ulap",
   des: "One of the most famous hikes in Benguet is Mt Ulap.",
   img: "/Assets/Camp Images/Compressed Images/Mount Ulap.jpg", 
   route: "Mount-Ulap.html",
 }

 {
   id: 2,
   title: "Calaguas Island",
   des: "A paradise of islands that can rival the white sand beauty of Boracay.",
   img: "/Assets/Camp Images/Compressed Images/Calaguas Island.jpg", 
   route: "calaguas-island.html",
 }

 {
   id: 3,
   title: "Onay Beach",
   des: "This is one of the best beach camping sites, beautiful and pristine.",
   img: "/Assets/Camp Images/Compressed Images/Onay Beach.jpg", 
   route: "onay-beach.html",
 }

 {
   id: 4,
   title: "Seven Sisters Waterfall",
   des: "The Seven Sisters is the 39th tallest waterfall in Norway",
   img: "/Assets/Camp Images/Compressed Images/Seven Sisters Waterfall.jpg", 
   route: "seven-sisters-waterfall.html",
 }

 {
   id: 5,
   title: "Latik Riverside",
   des: "Philippines is one of the most dazzling countries in all of Asia",
   img: "/Assets/Camp Images/Compressed Images/Latik Riverside.jpg", 
   route: "latik-riverside.html",
 }

 {
   id: 6,
   title: "Buloy Springs",
   des: "This is one of the best beach camping sites, beautiful and pristine.",
   img: "/Assets/Camp Images/Compressed Images/Latik Riverside.jpg", 
   route: "buloy-springs.html",
 }

]


const cardContent = document.querySelector(".card-content");

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = cardsArr.map((project, index) => {
 
   return `
         <div class="cards" style="flex-basis: 370px;">
           <div class="images my-5 p-3.5 rounded-xl" style="border: solid 0.5px rgb(189, 185, 185);">
             <img src="${project.img}" alt="img1" class="w-full">
             <div class="card-body flex flex-col gap-2.5">
               <h1 class="card_title mt-2.5 text-base font-black">${project.title}</h1>
               <p class="card-text text-base text-gray-600">${project.des}</p>
               <button class="card-btn font-black text-sm p-1 py-4 justify-center rounded" style="border: solid 0.5px rgb(189, 185, 185);"><a href=${project.route}>View Campground</a></button>
             </div>
           </div>
         </div>
       `;
   });

   cardContent.innerHTML = showInHtml;
 });


 
