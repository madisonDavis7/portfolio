//seclects all elements from a class (buttons)
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); //parent
const sectBtn = document.querySelectorAll('.control'); //actual button

const allSections = document.querySelectorAll('.main-content')[0]; //body

//when button clicked it will look for section with the data id
function PageTransitions() {
    const sectBtn = document.querySelectorAll('.control');
    sectBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            const sectionId = this.dataset.id;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

//call function
PageTransitions();

//functions for scrolling effect on blog page
function initBlogScroll() {
    const blogsWrapper = document.querySelector('.blogs-wrapper');
    const blogs = document.querySelector('.blogs');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    let currentIndex = 0;
    const totalBlogs = document.querySelectorAll('.blog').length;

    function updateSlide(transition = true) {
        blogs.style.transition = transition ? 'transform 0.3s ease-in-out' : 'none';
        const slideAmount = -(currentIndex * (100 / totalBlogs));
        blogs.style.transform = `translateX(${slideAmount}%)`;
    }

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalBlogs - 1;
        }
        updateSlide();
    });

    rightBtn.addEventListener('click', () => {
        if (currentIndex < totalBlogs - 1) {
            currentIndex++;
            updateSlide();
        } else {
            // When at last slide, reset to first
            currentIndex = 0;
            updateSlide();
        }
    });

    // Initial setup
    updateSlide();
}

// Make sure the DOM is loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    PageTransitions();
    initBlogScroll();
});

//for making btns active when viewing that section
const navButtons = document.querySelectorAll('.control');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all buttons
                navButtons.forEach(btn => btn.classList.remove('active-btn'));
                // Add active to the button that matches the section in view
                const activeBtn = document.querySelector(`.control[data-id="${entry.target.id}"]`);
                if (activeBtn) activeBtn.classList.add('active-btn');
            }
        });
    },
    {
        threshold: 0.6 // Adjust as needed (0.6 = 60% of section must be visible)
    }
);

// Observe each section
sections.forEach(section => observer.observe(section));

// --- Section Navigation and Active Button Highlight ---
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll on nav button click
    const navButtons = document.querySelectorAll('.control');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const sectionId = this.dataset.id;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Highlight nav button for section in view
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navButtons.forEach(btn => btn.classList.remove('active-btn'));
                    const activeBtn = document.querySelector(`.control[data-id="${entry.target.id}"]`);
                    if (activeBtn) activeBtn.classList.add('active-btn');
                }
            });
        },
        { threshold: 0.6 }
    );
    sections.forEach(section => observer.observe(section));

    // --- Blog Scroll Logic ---
    function initBlogScroll() {
        const blogsWrapper = document.querySelector('.blogs-wrapper');
        const blogs = document.querySelector('.blogs');
        const leftBtn = document.querySelector('.left-btn');
        const rightBtn = document.querySelector('.right-btn');

        let currentIndex = 0;
        const totalBlogs = document.querySelectorAll('.blog').length;

        function updateSlide(transition = true) {
            blogs.style.transition = transition ? 'transform 0.3s ease-in-out' : 'none';
            const slideAmount = -(currentIndex * (100 / totalBlogs));
            blogs.style.transform = `translateX(${slideAmount}%)`;
        }

        if (leftBtn && rightBtn && blogs) {
            leftBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = totalBlogs - 1;
                }
                updateSlide();
            });

            rightBtn.addEventListener('click', () => {
                if (currentIndex < totalBlogs - 1) {
                    currentIndex++;
                    updateSlide();
                } else {
                    currentIndex = 0;
                    updateSlide();
                }
            });

            updateSlide();
        }
    }

    initBlogScroll();
});
