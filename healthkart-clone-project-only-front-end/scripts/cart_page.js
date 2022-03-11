let total = 0;

let cart_arr = JSON.parse(localStorage.getItem("cart_data"));
document.getElementById("cart_quantity").innerText = cart_arr.length;

function appendToCart() {
  let cart_left_div = document.getElementById("cart_left_div");
  cart_left_div.innerHTML = "";

  cart_arr.forEach((el,ind) => {
    let cart_left_product_div = document.createElement("div");
    cart_left_product_div.setAttribute("class", "cart_left_product_div");

    let cart_left_img_div = document.createElement("div");
    cart_left_img_div.setAttribute("class", "cart_left_img_div");

    let image = document.createElement("img");
    image.src = el.image;
    cart_left_img_div.append(image);

    let cart_left_details_div = document.createElement("div");
    cart_left_details_div.setAttribute("class", "cart_left_details_div");

    let h21 = document.createElement("h2");
    h21.innerText = el.name;
    let h22 = document.createElement("h2");
    h22.innerText = `₹${el.price}`;
    let br = document.createElement("br");

    let button = document.createElement("button");
    button.setAttribute("class", "remove_from_cart");
    button.innerText = "Remove";
    button.addEventListener("click", () => {
      removeFun(ind)
    });

    cart_left_details_div.append(h21, h22, br, button);

    cart_left_product_div.append(cart_left_img_div, cart_left_details_div);
    let hr = document.createComment("hr");
    cart_left_div.append(cart_left_product_div, hr);

    total += +el.price;
  });
  let bag_total = document.getElementById("bag_total");
  bag_total.innerText = `Rs ${total}`;
  let grand_total = document.getElementById("grand_total");
  grand_total.innerText = `Rs ${total + 49}`;
  total = 0;
}
appendToCart()

function removeFun(i){
  cart_arr.splice(i,1);
  localStorage.setItem("cart_data",JSON.stringify(cart_arr));
  document.getElementById('cart_quantity').innerText=cart_arr.length;
  appendToCart(cart_arr)
}


function gotopayment() {
  window.location.href = "payment.html"
}
