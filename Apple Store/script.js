// 1. Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// 2. Scroll Reveal Animation
// Triggers animation when elements scroll into view
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Reveal point

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
// Trigger once on load
reveal();

// 3. Tab Switching Logic for Specs
function openTab(tabName) {
    // Hide all tab contents
    var contents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.add("hidden");
    }

    // Remove active class from all buttons
    var buttons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Show current tab and add active class to button
    document.getElementById(tabName).classList.remove("hidden");
    event.currentTarget.classList.add("active");
}

// 4. Cart & Selection Logic
function selectModel(model, price) {
    // 1. Scroll to checkout
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });

    // 2. Update Order Summary
    document.getElementById('empty-cart-msg').classList.add('hidden');
    document.getElementById('cart-item').classList.remove('hidden');
    
    document.getElementById('summary-model').innerText = model;
    document.getElementById('summary-price').innerText = "$" + price + ".00";
    document.getElementById('summary-total').innerText = "$" + price + ".00";

    // 3. Update Badge
    document.querySelector('.cart-badge').innerText = "1";
    
    // 4. Highlight
    const summaryBox = document.querySelector('.order-summary');
    summaryBox.style.borderColor = "#0071e3";
    setTimeout(() => {
        summaryBox.style.borderColor = "var(--border-color)";
    }, 1500);
}

// 5. Form Submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const model = document.getElementById('summary-model').innerText;
    alert(`Thank you! Your order for the ${model} has been placed successfully.`);
    // Reset
    this.reset();
    document.querySelector('.cart-badge').innerText = "0";
    document.getElementById('cart-item').classList.add('hidden');
    document.getElementById('empty-cart-msg').classList.remove('hidden');
});