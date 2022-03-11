// NavBar Sticky
window.onscroll = () => {
  myFunction();
};

var navlist = document.getElementById("nav");
var sticky = navlist.offsetTop;
/* Function to stick the nav bar */
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navlist.classList.add("sticky");
  } else {
    navlist.classList.remove("sticky");
  }
}

let productsData = [
  {
    image:
      "https://img8.hkrtcdn.com/12133/prd_1213267-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Cafe-Mocha_o.jpg",
    name: "MuscleBlaze Biozyme Whey Protein, 4.4 lb, Cafe Mocha",
    price: "5199",
    discount: "13% off",
    button: "Add",
    premiumprice: "Premium Price : 5043",
    rating: "★ ★ ★ ★ 4.1(1567)",
  },
  {
    image:
      "https://img4.hkrtcdn.com/11855/prd_1185493-MuscleBlaze-Mass-Gainer-XXL-2.2-lb-Chocolate_c_l.jpg",
    name: "MuscleBlaze Mass Gainer XXL, 2.2 lb, Chocolate",
    price: "1098",
    discount: "23% off",
    button: "Add",
    premiumprice: "Premium Price : 1065",
    rating: "★ ★ ★ ★ 4.4(1267)",
  },
  {
    image: "https://img10.hkrtcdn.com/9679/prd_967839_o.jpg",
    name: "MuscleBlaze Gold Gainer XXL, 6 lb, Chocolate Bliss",
    price: "3299",
    discount: "29% off",
    button: "Add",
    premiumprice: "Premium Price : 3200",
    rating: "★ ★ ★ ★ ★ 5.0(9876)",
  },
  {
    image: "https://img4.hkrtcdn.com/13528/prd_1352733_o.jpg",
    name: "MuscleBlaze Raw Whey Isolate, Unflavoured, 2.2 lb",
    price: "1998",
    discount: "20% off",
    button: "Add",
    premiumprice: "Premium Price : 1938",
    rating: "★ ★ ★ 3.0(6789)",
  },
  {
    image:
      "https://img8.hkrtcdn.com/14557/prd_1455647-ON-Optimum-Nutrition-Serious-Mass-6-lb-Chocolate_c_s.jpg",
    name: "MuscleBlaze Biozyme Performance Whey-6 lb  Chocolate",
    price: "2999",
    discount: "24% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.2800",
    rating: "★ ★ ★ ★ 4.0(1465)",
  },
  {
    image:
      "https://img4.hkrtcdn.com/11957/prd_1195643-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate_c_s.jpg",
    name: "MuscleBlaze Biozyme Whey Protein-6 lb  Chocolate",
    price: "5399",
    discount: "10% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.5100",
    rating: "★ ★ ★ ★ 4.5(7861)",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey-4 lb  Chocolate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoh3cXsLHrOFJJkwjgO85I482MgHfbPC0Ug&usqp=CAU",
    price: "4749",
    discount: "23% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.4500",
    rating: "★ ★ ★ ★ 4.5(458)",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey",
    image: "https://img10.hkrtcdn.com/13320/prd_1331919_c_s.jpg",
    price: "749",
    discount: "18% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.700",
    rating: "★ ★ ★ ★ 4.5(475)",
  },
  {
    name: "MB Fuel One Whey Protein Immunity-8.8 lb  Chocolate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8e33tNHDZoIfP1aZ6TL9C0MuqAnxGaHRWw&usqp=CAU",
    price: "6699",
    discount: "25% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.6600",
    rating: "★ ★ ★ ★ 4.5(585)",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHbV8L1dkH5mWeY2RZ5d69az1u69fD9KhXg&usqp=CAU",
    price: "4749",
    discount: "29% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.4700",
    rating: "★ ★ ★ ★ 4.5(7925)",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey-6 lb  Chocolate",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYUuOLM8eLc8HsRAuzD2uzyPLKjBCqj96Sc814cq0ym71zEjpH",
    price: "2999",
    discount: "26% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.2700",
    rating: "★ ★ ★ ★ 4.5(6455)",
  },
  {
    name: "MuscleBlaze Biozyme Whey Protein-6 lb  Chocolate",
    image:
      "https://img4.hkrtcdn.com/11957/prd_1195643-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate_c_s.jpg",
    price: "5399",
    discount: "30% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.5200",
    rating: "★ ★ ★ ★ 4.5(465)",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey-4 lb  Chocolate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98UPJIwkAX9YV_uwEarfiH6tulMjTezQW-g&usqp=CAU",
    price: "4749",
    discount: "32% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.4700",
    rating: "★ ★ ★ ★ 4.5(2165)",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey",
    image: "https://img10.hkrtcdn.com/13320/prd_1331919_c_s.jpg",
    price: "749",
    discount: "10% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.700",
    rating: "★ ★ ★ ★ 4.5(6543)",
  },
  {
    name: "MB Fuel One Whey Protein Immunity-8.8 lb  Chocolate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor4T3j57jxBzH9PU0iuWqwqaXqz8UAsKgCQ&usqp=CAU",
    price: "6699",
    discount: "29% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.6500",
    rating: "★ ★ ★ ★ 4.5(4686)",
  },
  {
    name: "MuscleBlaze Biozyme Performance Whey",
    image:
      "https://img8.hkrtcdn.com/14557/prd_1455647-ON-Optimum-Nutrition-Serious-Mass-6-lb-Chocolate_c_s.jpg",
    price: "4749",
    discount: "28% off",
    button: "Add",
    premiumprice: "Premium Member price: Rs.4700",
    rating: "★ ★ ★ ★ 4.5(1456)",
  },
];

//cart

let cart_products = JSON.parse(localStorage.getItem("cart_data")) || [];
document.getElementById("cart_quantity").innerText = cart_products.length;

function appendFucn() {
  let div_product = document.getElementById("product");
  div_product.innerHTML = ""
  //   console.log(productArr);
  productsData.forEach(function (products) {
    let div = document.createElement("div");
    let price = document.createElement("div");

    let name = document.createElement("h4");
    name.innerText = products.name;

    let price1 = document.createElement("b");
    price.innerText = "₹" + products.price;

    let button = document.createElement("button");
    button.innerHTML = "🛒 ADD";
    button.addEventListener("click", function () {
      cart_products.push(products);
      localStorage.setItem("cart_data", JSON.stringify(cart_products));
      document.getElementById("cart_quantity").innerText = cart_products.length;
    });

    let discount = document.createElement("h5");
    discount.innerText = products.discount;

    let image = document.createElement("img");
    image.src = products.image;
    image.addEventListener("click", function () {
      localStorage.setItem("product_profile_data", JSON.stringify(products));
      // console.log(product_profile)
      window.location.href = "product_profile.html";
    });

    let premiumprice1 = document.createElement("h6");
    premiumprice1.innerText = products.premiumprice + " 🔒";

    let rating = document.createElement("img");
    rating.innerHTML = "★ " + products.rating;

    price.append(price1, button);
    div.append(image, discount, name, rating, price, premiumprice1);
    div_product.append(div);
  });
}
appendFucn();

//sort function
let low_to_high_box = document.getElementById("low_to_high_price");
let flag1 = true;
low_to_high_box.addEventListener("change", () => {
  if(flag1){
    let sortedArr = productsData.sort((a, b) => a.price - b.price);
    appendFucn(sortedArr);
    flag1 = false;
  }else flag1 = true;
  
});

let high_to_low_box = document.getElementById("high_to_low_price");
let flag2 = true;
high_to_low_box.addEventListener("change", async () => {
  if(flag2){
    let high_to_low_arr = productsData.sort((a, b) => b.price - a.price);
    appendFucn(high_to_low_arr);
    flag2 = false;
  }else flag2 = true;
});
