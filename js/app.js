const prevButton = document.querySelector('.swiper-button-prev')
const nextButton = document.querySelector('.swiper-button-next')
const wrapper = document.querySelector('.swiper-wrapper')
const swipeCon = document.querySelector('.swiper')
const toolsCon = document.querySelector('.tools-con')
const slide = document.querySelectorAll('.swiper-pagination span')
const mainText = document.querySelectorAll('.swiper-wrapper .main')
const styleObj = {
  sl1: 'translateX(-1349px)',
  sl2: 'translateX(-2698px)'
}
let swiperSlide = document.querySelectorAll('.swiper-slide');
let index = 1;
const firstClone = swiperSlide[0].cloneNode(true)
const secondClone = swiperSlide[1].cloneNode(true)

firstClone.id = 'first-clone'
secondClone.id = 'second-clone'

wrapper.append(firstClone);
wrapper.prepend(secondClone);

const slideWidth = swiperSlide[index].clientWidth;

wrapper.style.transform = `translateX(${-slideWidth * index}px)`

function autoSlide() {
  interval = setInterval(()=> {
    toNext()
    console.log(index)
  }, 8000)
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
  if(index >= swiperSlide.length - 1) return;
    index++;
    wrapper.style.transitionDuration = '1s'
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`
    //styling the bullets
    if(wrapper.style.transform == 'translateX(-1349px)' || wrapper.style.transform == 'translateX(-4047px)') {
      for(let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active')
      }
      slide[0].classList.add('active');
    }

    if(wrapper.style.transform == 'translateX(0px)' || wrapper.style.transform == 'translateX(-2698px)') {
      for(let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active')
      }
      slide[1].classList.add('active');
    }
    console.log(index)
    console.log(-slideWidth * index)
}

function toPrev() {
  if(index <= 0) return;
    index--;
    wrapper.style.transitionDuration = '1s'
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`

    //styling the bullets
    
    if(wrapper.style.transform == 'translateX(-1349px)' || wrapper.style.transform == 'translateX(-4047px)') {
      for(let j = 0; j < slide.length; j++) {
        slide[j].classList.remove('active')
      }
      slide[0].classList.add('active');
    }

    if(wrapper.style.transform == 'translateX(0px)' || wrapper.style.transform == 'translateX(-2698px)') {
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

swipeCon.addEventListener('mouseleave',()=> {
  autoSlide();
})

toolsCon.addEventListener('mouseenter',()=> {
  clearInterval(interval)
})

toolsCon.addEventListener('mouseleave',()=> {
  autoSlide();
})
// Move Out and leave events

nextButton.addEventListener('click',()=> {
  toNext()
})

prevButton.addEventListener('click',()=> {
  toPrev()
})


autoSlide();












































// nextButton.addEventListener('click',()=> {
//   if(wrapper.style.transform == slideLocation.slide1) {
//     wrapper.style.transform = slideLocation.slide2
//     for(let i = 0; i < slide.length; i++) {
//       slide[i].classList.remove('active')
//       mainText[i].style.opacity = '1'
//     }
//     slide[1].classList.add('active');
//     mainText[0].style.opacity = '0'
//   }
// });

// prevButton.addEventListener('click',()=> {
//   if(wrapper.style.transform == slideLocation.slide2) {
//     wrapper.style.transform = slideLocation.slide1
//     for(let i = 0; i < slide.length; i++) {
//       slide[i].classList.remove('active')
//       mainText[i].style.opacity = '1'
//     }
//     slide[0].classList.add('active');
//     mainText[1].style.opacity = '0';
//   }
// });

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