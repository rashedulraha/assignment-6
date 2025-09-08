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
 src="${item.image}" alt=""/></figure>
 <div> 
 <h2   onclick="modalFunction(${item.id})"  class="font-medium card-title text-lg leading-10 text-left text-[#012937] cursor-pointer"  > ${item.name} </h2> <p>${item.description}</p> </div> <div class="flex items-center justify-between"> <p class="px-3 py-1 rounded-full text-[#1a7d5b] bg-[#dcfce7] font-bold"  >${item.category}</p> <span class="card-price">৳${item.price}</span></div><button data-id="${item.id}" data-name="${item.name}" data-price="${item.price}"  class="btn add-btn w-full rounded-full mt-3 bg-[#1a7d5b] text-white" >Add to Cart
</button></div>`;
    allPlants.appendChild(containerDiv);
    //  Click Handler
    const addedBtn = containerDiv.querySelector(".add-btn");
    if (addedBtn) {
      addedBtn.addEventListener("click", () => {
        // All Attributes
        const id = addedBtn.getAttribute("data-id");
        const name = addedBtn.getAttribute("data-name");
        const price = addedBtn.getAttribute("data-price");
        addToCart(id, name, price);
      });
    }
  });
};
allPlantsLoad();
//! End load and append child all plant data function

// ?```````````````````````````````````````

//! start  modalFunction
const modalFunction = (id) => {
  const plantsDetail = `https://openapi.programming-hero.com/api/plant/${id}`;

  fetch(plantsDetail)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      displayPlantsDetail(json.plants);
    });
};

const modalInputDev = document.getElementById("modalInputDev");
const displayPlantsDetail = (item) => {
  modalInputDev.innerHTML = "";

  const modalCreateDiv = document.createElement("div");

  modalCreateDiv.innerHTML = `<div class="bg-white  rounded-lg space-y-3 w-full h-full">
                  <figure class="w-full h-[180px] overflow-hidden rounded-lg">
                    <img
                      class="w-full h-full object-cover"
                      src="${item.image}"
                      alt=""
                    />
                  </figure>
                  <div>
                    <h2
                      class="font-medium card-title text-lg leading-10 text-left text-[#012937]"
                      onclick="modalFunction(${item.id})"
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
                    <span class='card-price' >৳${item.price}</span>
                  </div>
                  <button 
                    class="btn add-btns w-full rounded-full mt-3 bg-[#1a7d5b] text-white"
                  >
                    Add to Cart
                  </button>
                </div>`;

  modalInputDev.appendChild(modalCreateDiv);
  // open dialog safely
  const modalEl = document.getElementById("my_modal_5");
  if (modalEl && typeof modalEl.showModal === "function") {
    modalEl.showModal();
  } else {
    modalEl && modalEl.classList.add("open");
  }
};
//! End  modalFunction

// remove classList
const removeClassList = () => {
  const removeAllBgColor = document.querySelectorAll(".removeAllBgColor");

  removeAllBgColor.forEach((btn) => {
    btn.classList.remove("active");
  });
};

// ! start plants by categories with btn click

const plantsByCategories = (id) => {
  const clickToCategories = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(clickToCategories)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      removeClassList();
      const categoryClickBtn = document.getElementById(`CategoriesBtn-${id}`);
      categoryClickBtn.classList.add("active");

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
    btn.className =
      "btn w-full border-0 hover:bg-[#dcfce7] bg-white shadow-none removeAllBgColor";
    btn.id = `CategoriesBtn-${item.id}`;
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

let cart = [];

const displayCart = (cartItems) => {
  const cartContainer = document.getElementById("cart");
  const totalEl = document.getElementById("total");
  if (!cartContainer) return;
  cartContainer.innerHTML = "";

  if (!cartItems || cartItems.length === 0) {
    if (totalEl) totalEl.textContent = "৳ 0";
    return;
  }

  let totalPrice = 0;
  cartItems.forEach((item) => {
    const { cartItemId, name, price } = item;
    const row = document.createElement("div");
    row.className =
      "flex justify-between cart-sec items-center p-3 rounded-md align-middle bg-[#F0FDF4]";
    row.innerHTML = `
      <div>
        <h3 class="text-lg font-normal">${name}</h3>
        <p class="text-sm text-gray-500 font-medium">৳ ${price}</p>
      </div>
      <div class='actions'>
        <button class='cancel btn-sm cursor-pointer'><i class="bi bi-x-lg"></i></button>
      </div>`;

    const cancelBtn = row.querySelector(".cancel");
    cancelBtn &&
      cancelBtn.addEventListener("click", () => {
        cart = cartItems.filter(
          (c) => String(c.cartItemId) !== String(cartItemId)
        );
        displayCart(cart);
      });

    cartContainer.appendChild(row);
    totalPrice += Number(price) || 0;
  });

  if (totalEl) totalEl.textContent = `৳ ${totalPrice}`;
};

// addToCart: Add LocalStorage also, no quantities
function addToCart(id, name, price) {
  const cartItem = {
    cartItemId: Date.now().toString() + Math.floor(Math.random() * 1000),
    id,
    name,
    price: Number(price) || 0,
  };
  cart.push(cartItem);
  // re-render cart UI
  displayCart(cart);
  console.log("Cart updated:", cart);
}

// initialize in-memory cart (start empty)
(function initCart() {
  cart = [];
  displayCart(cart);
})();
