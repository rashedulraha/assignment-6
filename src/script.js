// ! load and append child all plant data function
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
  json.map((item) => {
    console.log(item.name);

    const containerDiv = document.createElement("div");

    containerDiv.innerHTML = `
    <div class="bg-white p-4 rounded-lg space-y-3 w-full h-full">
                <figure class="w-full h-[186px] overflow-hidden rounded-lg">
                  <img
                    class=" w-full h-full object-cover "
                    src="${item.image}"
                    alt=""
                  />
                </figure>
                <div>
                  <h2
                    class="font-medium text-lg leading-10 text-left text-[#012937]"
                  >
                 ${item.name}
                  </h2>
                  <p>${item.description}</p>
                </div>
                <div class="flex items-center justify-between">
                  <p
                    class="px-3 py-1 rounded-full text-[#1a7d5b] bg-[#dcfce7] font-bold"
                  >
                    ${item.category}
                  </p>
                  <span>৳${item.price}</span>
                </div>
                <button
                  class="btn w-full rounded-full mt-3 bg-[#1a7d5b] text-white"
                >
                 Add to Cart
                </button>
              </div>`;

    allPlants.appendChild(containerDiv);
  });
};

allPlantsLoad();

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
  array.map((item) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button class="btn w-full">${item.category_name}</button>`;

    CategoriesBtn.appendChild(btnDiv);
  });
};
categories();

// ! call and display data img  and other content

const displayImgAndOtherData = (plants) => {
  // console.log(plants);
};

allPlantsLoad();
