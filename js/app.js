// Loop swiper
const prevButton = document.querySelector('.swiper-button-prev')
const nextButton = document.querySelector('.swiper-button-next')
const wrapper = document.querySelector('.swiper-wrapper')
const swipeCon = document.querySelector('.swiper')
const toolsCon = document.querySelector('.tools-con')
const slide = document.querySelectorAll('.swiper-pagination span')
let mainText = document.querySelectorAll('.swiper-wrapper .main')
const pauseStartIcon = document.querySelector('.pause-start-icon');
let svgs = document.querySelectorAll('.pause-start-icon svg');
let pause = document.querySelectorAll('.pause-start-icon svg')[0]
let play = document.querySelectorAll('.pause-start-icon svg')[1]
let swiperSlide = document.querySelectorAll('.swiper-slide');
let index = 1;
const firstClone = swiperSlide[0].cloneNode(true);
const secondClone = swiperSlide[1].cloneNode(true);

firstClone.id = 'first-clone'
secondClone.id = 'second-clone'

wrapper.append(firstClone);
wrapper.prepend(secondClone);

const slideWidth = swiperSlide[index].clientWidth;

const styleObj = {
  sl1: `translateX(${-slideWidth * 1}px)`,
  sl2: `translateX(${-slideWidth * 2}px)`
}

wrapper.style.transform = `translateX(${-slideWidth * index}px)`

function autoSlide() {
  interval = setInterval(()=> {
    toNext()
  }, 5000)
}

wrapper.addEventListener('transitionend',()=> {
  swiperSlide = document.querySelectorAll('.swiper-slide');
  if(swiperSlide[index].id === firstClone.id) {
    wrapper.style.transitionDuration = '0s'
    index = 1
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`
  }

  if(swiperSlide[index].id === secondClone.id) {
    wrapper.style.transitionDuration = '0s'
    index = swiperSlide.length - 2
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`
  }
})

function toNext() {
  swiperSlide = document.querySelectorAll('.swiper-slide');
  mainText = document.querySelectorAll('.swiper-wrapper .main')
  if(index >= swiperSlide.length - 1) return;
    index++;
    wrapper.style.transitionDuration = '1s'
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`
    if(index % 2 != 0) {
          //styling the bullets   
      for(let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active')
      }
      slide[0].classList.add('active');
    }

    if(index % 2 == 0) {
        //styling the bullets  
      for(let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active')
      }
      slide[1].classList.add('active');
    }
}

function toPrev() {
  if(index <= 0) return;
    index--;
    wrapper.style.transitionDuration = '1s'
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`

    if(index % 2 != 0) {
          //styling the bullets   
      for(let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active')
      }
      slide[0].classList.add('active');
    }

    if(index % 2 == 0) {
        //styling the bullets  
      for(let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active')
      }
      slide[1].classList.add('active');
    }
}

// Move Out and leave events
swipeCon.addEventListener('mouseenter',()=> {
  clearInterval(interval)
})

toolsCon.addEventListener('mouseenter',()=> {
  clearInterval(interval)
})


  toolsCon.addEventListener('mouseleave',()=> {
    play = document.querySelectorAll('.pause-start-icon svg')[1]
    if( play.classList.contains('d-none') )  {
      autoSlide();
    }
  })
  
  swipeCon.addEventListener('mouseleave',()=> {
    play = document.querySelectorAll('.pause-start-icon svg')[1]
    if(play.classList.contains('d-none'))  {
      autoSlide();
    }
  })
// Move Out and leave events

nextButton.addEventListener('click',()=> {
  toNext()
})

prevButton.addEventListener('click',()=> {
  toPrev()
})

autoSlide();

// click event for the bullets

for(let i = 0;i < slide.length; i++) {
  slide[i].addEventListener('click',()=> {
    for(let j = 0; j < slide.length; j++) {
      slide[j].classList.remove('active')
    }
    slide[i].classList.add('active');
    wrapper.style.transitionDuration = '1s'
    wrapper.style.transform = Object.values(styleObj)[i];
  })
}

pauseStartIcon.addEventListener('click',()=> {
  let svgs = document.querySelectorAll('.pause-start-icon svg');
  let pause = document.querySelectorAll('.pause-start-icon svg')[0]
  let play = document.querySelectorAll('.pause-start-icon svg')[1]
  
  if(play.classList.contains('d-none')) {
    svgs.forEach((e)=> {
      e.classList.remove('d-none')
    })
    pause.classList.add('d-none');
    clearInterval(interval)
  } else {
    svgs.forEach((e)=> {
      e.classList.remove('d-none')
    })
    play.classList.add('d-none');
    autoSlide();
  }
})

// End loop swiper


// back to top
const backToTop = document.querySelector('.back-to-top button'); 

backToTop.addEventListener('click', ()=> {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
});

if(backToTop.clientWidth <= 130) {
  window.addEventListener('scroll',()=> {
    if(scrollY <= 1880) {
      backToTop.classList.add('active')
    } else {
      backToTop.classList.remove('active')
    }
  
    if(scrollY <= 446) {
      backToTop.style.opacity = '0'
    } else {
      backToTop.style.opacity = '1'
    }
  })
}



// back to top end

//searsh bar 
const searshIcon = document.querySelector('.searsh-bar .icon');
const searshText = document.querySelector('.searsh-bar input');
const searshCancel = document.querySelector('.searsh-bar .cancel');
const dropDownMobile = document.querySelector('.drop-down-mobile');
const searshBar = document.querySelector('.searsh-bar');
const rhs = document.querySelector('.rhs');
const lhs = document.querySelector('.lhs');

searshIcon.addEventListener('click',()=> {
  searshText.classList.add('active');
  rhs.classList.add('active');
  searshIcon.classList.add('active');
  searshCancel.classList.remove('d-none')
  rhs.children[0].classList.remove('d-lg-block')
  rhs.children[2].classList.add('d-none')
  lhs.children[1].classList.add('d-lg-none')
  dropDownMobile.classList.add('d-none')
  searshBar.style.width = '100%'
});

searshCancel.addEventListener('click',()=> {
    searshText.classList.remove('active');
    rhs.classList.remove('active');
    searshIcon.classList.remove('active');
    searshCancel.classList.add('d-none')
    rhs.children[0].classList.add('d-lg-block')
    rhs.children[2].classList.remove('d-none')
    lhs.children[1].classList.remove('d-lg-none')
    dropDownMobile.classList.remove('d-none')
    searshBar.style.width = ''
});

//searsh bar end

// drop down click event
const dropDown = document.querySelector('.drop-down');
const dropDownContent = document.querySelector('.drop-down-content');
const arr = [dropDown, dropDownMobile]

  dropDown.addEventListener('click',()=> {
    dropDownContent.style.zIndex = '100'
    dropDownContent.style.opacity = '1'
    dropDown.classList.add('active');
  })

  dropDownMobile.addEventListener('click',()=> {
    let icons = dropDownMobile.children
    if(icons[1].classList.contains('d-none')) {
      console.log('aaa')
      dropDownContent.style.zIndex = '100'
      dropDownContent.style.opacity = '1'
      for(const icon of icons) {
        icon.classList.add('d-none');
      }
      icons[1].classList.remove('d-none');
    } else {
      console.log('assaa')
      dropDownContent.style.zIndex = '-1'
      dropDownContent.style.opacity = '0'
      for(const icon of icons) {
        icon.classList.add('d-none');
      }
      icons[0].classList.remove('d-none');
    }
  })
// document.addEventListener('click',(e)=> {
//   console.log( e.target != dropDownMobile)
//   if(!e.target.classList.contains('pointer-spc') && e.target != dropDown) {
//     dropDownContent.style.opacity = '0'
//     dropDown.classList.remove('active');
//   }
// })

// subDropDown 
const lis = document.querySelectorAll('li.d-flex');

for(const li of lis) {
  li.addEventListener('click',()=> {
    if(li.parentElement.clientHeight == 54) {
      li.parentElement.style.height = '100%'
    } else {
      li.parentElement.style.height = ''
    }
  })
}

// subDropDown end

// drop down click event end


