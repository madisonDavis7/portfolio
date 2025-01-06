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

