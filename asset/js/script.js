console.log('JavaScript is working');
let slideIndex = 0;
        showSlides();
        
        function showSlides() {
            let i;
            const slides = document.querySelectorAll(".slide");
            
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            slideIndex++;
            
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            
            slides[slideIndex - 1].style.display = "block";
            
            setTimeout(showSlides, 3000); // Change slide every 3 seconds
        }

function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery-images');
    const scrollAmount = 400; // Adjust as needed

    if (direction === 'left') {
        gallery.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        gallery.scrollLeft += scrollAmount;
    }
}
        