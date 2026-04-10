const text = "Welcome to the Ultimate Imagine Dragons Community!!";
const element = document.getElementById("typewriter");

let index = 0;
let isDeleting = false;

function typeEffect() {

    if (!isDeleting) {
        element.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            setTimeout(() => isDeleting = true, 1500);
        }

    } else {
        element.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();

function modal(){
    const openBtn = document.getElementById("open-btn"); 
    const closeBtn = document.getElementById("close-modal"); 
    const modal = document.getElementById("myModal"); 
    const okBtn = document.getElementById("okBtn"); 
    const checkbox = document.getElementById("termsCheckBox"); 

    // 1. Initial State: Lock everything when the page loads
    closeBtn.disabled = true; 
    okBtn.disabled = true; 

    // 2. The "Gatekeeper" Logic: Listen to the CHECKBOX, not the button
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            okBtn.disabled = false; 
            okBtn.classList.add("active"); 
            closeBtn.disabled = false; 
        } else {
            okBtn.disabled = true; 
            okBtn.classList.remove("active"); 
            closeBtn.disabled = true; 
        }
    });

    // 3. Finalizing the Agreement
    okBtn.addEventListener("click", () => {
        localStorage.setItem("hasAgreedToTerms", "true"); 
        alert("Thank You for Agreeing!!"); 
        modal.close(); 
    }); 

    // 4. Opening and Closing
    openBtn.addEventListener("click", () => {
        modal.showModal(); 
    });

    closeBtn.addEventListener("click", () => {
        modal.close(); 
    });
}
modal(); 

function hamBurger(){
    const hamburgerBtn = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.hamburger-dropdown');

    // Toggle menu when clicking the icon
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the window click from firing immediately
        dropdownMenu.classList.toggle('active');
    });

    // Close menu if user clicks anywhere else on the screen
    window.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('active')) {
            dropdownMenu.classList.remove('active');
        }
    });
}

hamBurger(); 