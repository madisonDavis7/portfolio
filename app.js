//seclects all elements from a class (buttons)
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); //parent
const sectBtn = document.querySelectorAll('.control'); //actual button

const allSections = document.querySelectorAll('.main-content')[0]; //body

//when button clicked it will look for section with the data id
function PageTransitions() {
    //button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn';

            // Scroll to the section smoothly
            const sectionId = this.dataset.id;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        })
    }

    //sections active class
    //e is the event
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from other button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

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
