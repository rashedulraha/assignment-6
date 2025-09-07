// ! start load and append child all plant data function
const allPlantsLoad = () => {
  const allPlantsLoadApi = `https://openapi.programming-hero.com/api/plants`;

  fetch(allPlantsLoadApi)
    .then((Response) => {
      return Response.json();
    })
    .then((json) => {
      displayAllPlantsLoad(json.plants);
    });
};

const allPlants = document.getElementById("all-Plants");
const displayAllPlantsLoad = (json) => {
  allPlants.innerHTML = "";
  json.forEach((item) => {
    const containerDiv = document.createElement("div");

    containerDiv.innerHTML = `
 <div class="bg-white p-4 rounded-lg space-y-3 w-full h-full">
<figure class="w-full h-[186px] overflow-hidden rounded-lg">
<img class=" w-full h-full object-cover "
 src="${item.image}" alt=""/></figure><div> <h2 class="font-medium text-lg leading-10 text-left text-[#012937]"> ${item.name} </h2> <p>${item.description}</p> </div> <div class="flex items-center justify-between"> <p class="px-3 py-1 rounded-full text-[#1a7d5b] bg-[#dcfce7] font-bold"  >${item.category}</p> <span>৳${item.price}</span></div><button class="btn w-full rounded-full mt-3 bg-[#1a7d5b] text-white" >Add to Cart
</button></div>`;
    allPlants.appendChild(containerDiv);
  });
};
allPlantsLoad();
//! End load and append child all plant data function

// ?```````````````````````````````````````

// ! start plants by categories with btn click

const plantsByCategories = (id) => {
  const clickToCategories = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(clickToCategories)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      displayPlantsByCategories(json.plants);
    });
};

const displayPlantsByCategories = (jsonItem) => {
  displayAllPlantsLoad(jsonItem);
};

//  ! End plants by categories with btn click

// ?```````````````````````````````````````

// ! load and create btn  categories
const categories = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      arrayTo(json.categories);
    });
};

const CategoriesBtn = document.getElementById("Categories-btn");

const arrayTo = (array) => {
  array.forEach((item) => {
    // create btn
    const btn = document.createElement("button");
    btn.className = "btn w-full";
    btn.textContent = item.category_name;

    btn.addEventListener("click", () => {
      plantsByCategories(item.id);
    });

    const btnDiv = document.createElement("div");
    btnDiv.appendChild(btn);

    CategoriesBtn.appendChild(btnDiv);
  });
};

categories();

// ! call and display data img  and other content

const displayImgAndOtherData = (plants) => {};

allPlantsLoad();
