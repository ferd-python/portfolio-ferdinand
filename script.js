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


//sendMail
function SendBtn(){
console.log("CLICK DETECTED");

  let parms = {
    name : document.getElementById("name").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  const form = document.getElementById("contact-form");

  emailjs.send("service_bum5aow", "template_21ljtu3", parms)
  .then(function() {
    alert("Message envoyé avec succès !");
    form.reset();
  })
  .catch(function(error) {
    alert("Erreur : " + error.text);
  });
};


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
  if(index < 4){
    index++;
    arrowRight.classList.remove('disabled')
  }
  else{
    index=4;
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