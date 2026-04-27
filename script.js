// Cart data store
let cartCount = 0;

// সব "Add to Cart" button এ event add করা
const buttons = document.querySelectorAll(".product button");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        
        // product name বের করা
        let productName = this.parentElement.querySelector("h3").innerText;

        // cart count বাড়ানো
        cartCount++;

        // alert দেখানো
        alert(productName + " cart এ add হয়েছে!");

        // console log (debug)
        console.log("Cart Items:", cartCount);
    });
});


// Top button smooth scroll (optional interactivity)
document.querySelectorAll(".top-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 100);
    });
});


// Banner click effect (fun interaction)
const banner = document.querySelector(".banner-image img");
if (banner) {
    banner.addEventListener("click", () => {
        alert("You are going to Google Play Store!");
    });
}