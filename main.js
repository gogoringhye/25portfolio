'use strict';

//Toggle Function

const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
}

// Header Sticky & Go-Top

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 10) {
    header.classList.add('active');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    goTopBtn.classList.remove('active');
  }
});


// Skills Toggling Button

const toggleBtnBox = document.querySelector('[data-toggle-box]');
const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
const skillsBox = document.querySelector('[data-skills-box]');

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener('click', function () {
    elemToggleFunc(toggleBtnBox);

    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

// Dark & Light Theme Toggle

const themeToggleBtn = document.querySelector('[data-theme-btn]');

themeToggleBtn.addEventListener('click', function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains('active')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    localStorage.setItem('theme', 'light-theme');
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');

    localStorage.setItem('theme', 'dark-theme');
  }
})

//Applying Theme kept in Local Storage 

if (localStorage.getItem('theme') === 'light-theme') {
  themeToggleBtn.classList.add('active');
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
} else {
  themeToggleBtn.classList.remove('active');
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
}

/* 포트폴리오 */
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');
let lastClickedBtn = filterBtns[0];

const filterFunc = (category) => {
  filterItems.forEach(item => {
    const match = item.dataset.category === category || category === 'all';
    item.classList.toggle('active', match);

    const linkBox = item.querySelector('.link-box');
    if (linkBox) {
      if (category === 'all') {
        linkBox.style.display = 'none';
      } else {
        linkBox.style.display = '';
      }
    }
  });
};

// 필터 버튼 클릭 이벤트
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.innerText.toLowerCase();
    filterFunc(category);

    lastClickedBtn.classList.remove('active');
    btn.classList.add('active');
    lastClickedBtn = btn;
  });
});

// 초기 상태 (All 필터)일 때 link-box 숨기기
window.addEventListener('DOMContentLoaded', () => {
  filterItems.forEach(item => {
    const linkBox = item.querySelector('.link-box');
    if (linkBox) {
      linkBox.style.display = 'none';
    }
  });
});
/* //포트폴리오 */


/* 슬라이드 */
function PanoramaEffect({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    panoramaEffect: {
      depth: 300,
      rotate: 25
    }
  });
  on("beforeInit", () => {
    if (swiper.params.effect !== "panorama") return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}panorama`);
    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

    Object.assign(swiper.params, {
      watchSlidesProgress: true
    });
    Object.assign(swiper.originalParams, {
      watchSlidesProgress: true
    });
  });
  on("progress", () => {
    if (swiper.params.effect !== "panorama") return;

    const {
      depth = 200, rotate = 30
    } = swiper.params.panoramaEffect;
    const radian = rotate * Math.PI / 180 / 2;
    const ratio = 1 / (180 / rotate);

    swiper.slides.forEach((slide, index) => {
      const progress = slide.progress;
      const slideWidth = swiper.slidesSizesGrid[index];
      const centerOffset = swiper.params.centeredSlides ? 0 : (swiper.params.slidesPerView - 1) * 0.5;
      const position = progress + centerOffset;
      const scaleFactor = 1 - Math.cos(position * ratio * Math.PI);
      const translateX = `${position * (slideWidth / 3) * scaleFactor}px`;
      const rotateY = `${position * rotate}deg`;
      const translateZ = `${slideWidth * 0.5 / Math.sin(radian) * scaleFactor - depth}px`;

      slide.style.transform = swiper.params.direction === "horizontal" ?
        `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY})` :
        `translateY(${translateX}) translateZ(${translateZ}) rotateX(${-rotateY})`;
    });
  });
  on("setTransition", (swiper, speed) => {
    if (swiper.params.effect === "panorama") {
      swiper.slides.forEach(slide => {
        slide.style.transitionDuration = `${speed}ms`;
      });
    }
  });
}
new Swiper(".int_slide", {
  modules: [PanoramaEffect],
  effect: "panorama",
  slidesPerView: "auto",
  loop: true,
  loopAdditionalSlides: 1,
  spaceBetween: 9,
  centeredSlides: true,
  panoramaEffect: {
    depth: 300,
    rotate: 25
  },
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
  breakpoints: {
    1025: {
      spaceBetween: 30
    },
    769: {
      spaceBetween: 20
    },
    481: {
      spaceBetween: 15
    },
    391: {
      spaceBetween: 12
    }
  }
});
/* //슬라이드 */
