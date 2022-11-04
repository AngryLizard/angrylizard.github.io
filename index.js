// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

Handlebars.registerHelper('isImage', function (url) {
  let ext = url.split('.').pop().toLowerCase();
  return ext == "jpg" || ext == "png" || ext == "gif";
})

Handlebars.registerHelper('isMp4', function (url) {
  let ext = url.split('.').pop().toLowerCase();
  return ext == "mp4";
})

Handlebars.registerHelper('isWebm', function (url) {
  let ext = url.split('.').pop().toLowerCase();
  return ext == "webm";
})

Handlebars.registerHelper('isPdf', function (url) {
  let ext = url.split('.').pop().toLowerCase();
  return ext == "pdf";
})

Handlebars.registerHelper('isYoutube', function (url) {
  return url.includes("www.youtube.com/embed/");
})

var contentTemplateText = document.getElementById("contentTemplate").innerHTML;
var contentTemplate = Handlebars.compile(contentTemplateText);

var contentRowsElement = document.getElementById("contentRows");
contentRows.innerHTML = contentTemplate(contentObject);

var slideIndex = 0;

function openModal(name)
{
  var modal = document.getElementById(`${name}-modal`);
  modal.style.display = "flex";

  showSlide(name, 0);
}

function closeModal(name)
{
  var modal = document.getElementById(`${name}-modal`);
  modal.style.display = "none";
}

function prevSlide(name)
{
  showSlide(name, slideIndex-1);
}

function nextSlide(name)
{
  showSlide(name, slideIndex+1);
}

function showSlide(name, index)
{
  if (hasSlide(name, index)) {
    slideIndex = index;

    let slides = document.getElementById(`${name}-slides`);
    for(slide of slides.children) {
      slide.style.display = "none";
    }

    let dots = document.getElementById(`${name}-dots`);
    for(dot of dots.children) {
      dot.classList.remove("active");
    }

    let captions = document.getElementById(`${name}-captions`);
    for(caption of captions.children) {
      caption.style.display = "none";
    }

    document.getElementById(`${name}-slide-${index}`).style.display = "flex";
    document.getElementById(`${name}-caption-${index}`).style.display = "flex";
    document.getElementById(`${name}-dot-${index}`).classList.add("active");

    document.getElementById(`${name}-prev`).style.visibility = "hidden";
    if(hasSlide(name, slideIndex-1)) {
      document.getElementById(`${name}-prev`).style.visibility = "visible";
    }

    document.getElementById(`${name}-next`).style.visibility = "hidden";
    if(hasSlide(name, slideIndex+1)) {
      document.getElementById(`${name}-next`).style.visibility = "visible";
    }
  }
}

function hasSlide(name, index)
{
  return !!document.getElementById(`${name}-slide-${index}`);
}
