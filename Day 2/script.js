var product =
  {
    brand: "NOOK",
    name: "LOUNGE CHAIR",
    price: 320.00,
    info: "Designer Karim Rashid continues to put his signature spin on all genres of design through various collaborations with top-notch companies. Another one to add to the win colunmn is his work with Italian manufacturer Chateau d'Ax.",
    img: "nook-lounge-chair.png",
    totalRatings: 172,
    totalStars: 804,
    available: 20
  };
var quantity = 1;

$(document).ready(function() {
  // var product = products[0];

  $("#brandName").html(product.brand);
  $("#productName").html(product.name);
  $("#pricetag").html("$" + (product.price).toFixed(2));
  $(".product-image").attr("src", "img/" + product.img);
  $(".product-info").html(product.info);
  $("#avgRating").html((product.totalStars / Math.max(1, product.totalRatings)).toFixed(2));
  $("#reviewCount").html(product.totalRatings);
  $("#quantity-count").html(quantity);

  for(var i = 1; i <= Math.floor(product.totalStars / Math.max(1, product.totalRatings)); i++) {
    $("#star" + i).addClass("selected-star");
  }

  $("#total-price").html("$" + (quantity * product.price).toFixed(2));

  // If out of stock
  if(product.available <= 0) {
    $("#product-available").html("Out of Stock.");
    $("#product-available").addClass("product-not-available");
  }
});

function updateQuantity(mode) {
  console.log(mode);

  // Update quantity value
  if(mode === '-' && quantity > 1) {
    quantity--;
  } else if (mode === '+' && quantity < product.available) {
    quantity++;
  }

  // Update value
  $("#quantity-count").html(quantity);
  // Update total price
  $("#total-price").html("$" + (quantity * product.price).toFixed(2));

  // Possibly disable arrow
  if(quantity === 1) {
    $("#decrement-arrow").addClass("disabled-arrow");
  } else if(quantity === product.available) {
    $("#increment-arrow").addClass("disabled-arrow");
  } else {
    $("#decrement-arrow").removeClass("disabled-arrow");
    $("#increment-arrow").removeClass("disabled-arrow");
  }
}
