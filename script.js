const resumeBtns = document.querySelectorAll('.resume-btn');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})

resumeBtns.forEach( (btn, idx) => {
 btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail')

    resumeBtns.forEach(btn => {
        btn.classList.remove('active');
    })
    btn.classList.add('active')

    resumeDetails.forEach(detail => {
        detail.classList.remove('active');
    })
    resumeDetails[idx].classList.add('active');
  })
})


//contact form success feedback (FormSubmit.co redirects back with ?sent=1)
const contactForm = document.getElementById("contact-form");
if (contactForm && new URLSearchParams(window.location.search).get("sent") === "1") {
  const notice = document.createElement("p");
  notice.textContent = "Message envoyé avec succès, merci !";
  notice.style.color = "var(--main-color)";
  notice.style.marginBottom = "1.5rem";
  notice.style.fontSize = "1.6rem";
  contactForm.prepend(notice);
  window.history.replaceState({}, document.title, window.location.pathname);
}


/*carrousel portfolio*/
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')

let index = 0;


const activePortfolio = () =>{
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide')
  const portDetail = document.querySelectorAll('.portfolio-detail')

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index*2}rem))`;

  portDetail.forEach(detail =>{
    detail.classList.remove('active');
  })
  portDetail[index].classList.add('active')
}

function right(){
  if(index < 5){
    index++;
    arrowRight.classList.remove('disabled')
  }
  else{
    index=5;
    arrowRight.classList.add('disabled')
  }
  activePortfolio()

}
function left(){
  if(index > 1){
    index--;
    arrowLeft.classList.remove('disabled')
  }
  else{
    index=0;
    arrowLeft.classList.add('disabled')
  }
  activePortfolio()
}

/*session tabs (portfolio académique S1-S6)*/
const sessionTabs = document.querySelectorAll('.session-tab');

sessionTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const sessionPanels = document.querySelectorAll('.session-panel');

    sessionTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    sessionPanels.forEach(panel => panel.classList.remove('active'));
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});