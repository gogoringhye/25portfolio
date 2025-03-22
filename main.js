/* 구조 */
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//----------------------------------
Splitting();
//---------------------------------
gsap.registerPlugin(ScrollTrigger);



/* 시계 */
var $time = $('.time');
setInterval(function () {
  var dday = new Date();
  var $write = dday.toLocaleString(
    'en-US');
  $time.text($write);

}, 200);
/* //시계 */

/* 해시태그 */
//Nav links animation
const splitTypes = document.querySelectorAll('.nav-links li a');
splitTypes.forEach((link, i) => {
  const text = new SplitType(link, {
    types: 'chars'
  });

  text.chars.forEach((char, i) => {
    char.style.transitionDelay = `${i * 0.05}s`;
    char.setAttribute('data-letter', char.textContent);
  });
});

//Slider animation
let slides = document.querySelectorAll('.img-slider ul li');
let secondSlides = document.querySelectorAll('.second-img-slider ul li');
let thirdSlides = document.querySelectorAll('.third-img-slider ul li');
let second_slider = document.querySelector('.second-img-slider');

let currentActive = 1;
let secondCurrentActive = 2;
let thirdCurrentActive = 0;

const img_slider_first_child = document.querySelector('.img-slider li:first-child');
const img_slider_last_child = document.querySelector('.img-slider li:last-child');
const third_img_slider_first_child = document.querySelector('.third-img-slider li:first-child');
const second_img_slider_last_child = document.querySelector('.second-img-slider li:last-child');

if (img_slider_first_child.classList.contains('show_class') && third_img_slider_first_child.classList.contains('active')) {
  third_img_slider_first_child.style.opacity = '0';
} else {
  third_img_slider_first_child.style.opacity = '1';
}


gsap.to('.img-slider li, .second-img-slider li, .third-img-slider li', {
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  duration: 0.5,
  delay: 3.2,
});


window.addEventListener('click', (event) => {
  setTimeout(() => {
    if (img_slider_first_child.classList.contains('show_class') && third_img_slider_first_child.classList.contains('active')) {
      third_img_slider_first_child.style.opacity = '0';
    } else {
      third_img_slider_first_child.style.opacity = '1';
    }
    if (img_slider_last_child.classList.contains('show_class') && second_img_slider_last_child.classList.contains('active')) {
      second_slider.classList.add('clip');
    } else {
      second_slider.classList.remove('clip');
    }
  }, 201);

  if (event.clientX > window.innerWidth / 2) {
    if (currentActive < slides.length) {
      slides[currentActive].classList.add('active');
      currentActive++;
    }
    if (currentActive >= 2 && secondCurrentActive < secondSlides.length) {
      secondSlides[secondCurrentActive].classList.add('active');
      secondCurrentActive++;
    }
    if (currentActive >= 2 && thirdCurrentActive < thirdSlides.length - 1) {
      thirdSlides[thirdCurrentActive].classList.add('active');
      thirdCurrentActive++;
    }
  } else {
    if (currentActive > 1 && currentActive <= slides.length) {
      slides[currentActive - 1].classList.remove('active');
      currentActive--;
    }
    if (currentActive <= slides.length - 2 && secondCurrentActive > 2) {
      secondSlides[secondCurrentActive - 1].classList.remove('active');
      secondCurrentActive--;
    }
    if (currentActive <= slides.length - 1 && thirdCurrentActive > 0) {
      thirdSlides[thirdCurrentActive - 1].classList.remove('active');
      thirdCurrentActive--;
    }
  }
});


const second_imgSlider = document.querySelector('.second-img-slider ul');
let second_timer;
window.addEventListener('mousemove', function (e) {
  clearTimeout(second_timer);
  let xPos = e.clientX - window.innerWidth / 2;
  if (xPos < 0) {
    xPos = 0;
  }
  const rotation = xPos > 0 ? 15 : 0;
  gsap.to(second_imgSlider, {
    x: `${xPos}px`,
    rotation: rotation,
    duration: 1,
    ease: 'power2.out'
  });
  second_timer = setTimeout(function () {
    gsap.to(second_imgSlider, {
      rotation: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, 500);
});

const third_imgSlider = document.querySelector('.third-img-slider ul');
let third_timer;
window.addEventListener('mousemove', function (e) {
  clearTimeout(third_timer);
  let xPos = e.clientX - window.innerWidth / 2;
  if (xPos > 0) {
    xPos = 0;
  }
  const rotation = xPos < 0 ? -15 : 0;
  gsap.to(third_imgSlider, {
    x: `${xPos}px`,
    rotation: rotation,
    duration: 1,
    ease: 'power2.out'
  });
  third_timer = setTimeout(function () {
    gsap.to(third_imgSlider, {
      rotation: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, 500);
});



//content slider
const contentItems = document.querySelectorAll('.content-slider li');
let content_activeIndex = 0;

window.addEventListener('click', function (e) {
  setTimeout(() => {
    if (e.clientX > window.innerWidth / 2) {
      if (content_activeIndex < contentItems.length - 1) {
        content_activeIndex++;
      }
      contentItems[content_activeIndex].classList.add('active');
    } else {
      if (content_activeIndex > 0) {
        contentItems[content_activeIndex].classList.remove('active');
        content_activeIndex--;
      }
    }
  }, 200);
});

//img height calculation
const img_height = document.querySelectorAll('.img-slider li img, .second-img-slider li img, .third-img-slider li img');
const img_details = document.querySelectorAll('.img-slider li .img-details, .second-img-slider li .img-details, .third-img-slider li .img-details');

img_height.forEach((img, index) => {
  const img_detail = img_details[index];
  img.style.height = `calc(100% - ${img_detail.offsetHeight + 12}px)`;
});


//text animation
const details = document.querySelectorAll('.img-slider li');
let details_activeIndex = 0;

window.addEventListener('click', function (e) {
  setTimeout(() => {
    if (e.clientX > window.innerWidth / 2) {
      if (details_activeIndex < details.length - 1) {
        details[details_activeIndex].classList.remove('show_class');
        details_activeIndex++;
        details[details_activeIndex].classList.add('show_class');
        animateText(details[details_activeIndex]);
      }
    } else {
      if (details_activeIndex > 0) {
        details[details_activeIndex].classList.remove('show_class');
        details_activeIndex--;
        details[details_activeIndex].classList.add('show_class');
        animateText(details[details_activeIndex]);
      }
    }
  }, 200);
});

function animateText(element) {
  const splitTypes = element.querySelectorAll('.img-details h6');
  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, {
      types: 'chars'
    });
    gsap.from(text.chars, {
      y: 50,
      duration: 0.5,
      stagger: 0.1,
    });
  });
  const splitTypes_profession = element.querySelectorAll('.img-details span');
  splitTypes_profession.forEach((char, i) => {
    const text = new SplitType(char, {
      types: 'chars'
    });
    gsap.from(text.chars, {
      y: 50,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.2
    });
  });
}
setTimeout(() => {
  animateText(details[0]);
}, 3000);

// Mouse Cursor Animation
gsap.set(".arrow", {
  xPercent: -50,
  yPercent: -50
});
const arrow = document.querySelector(".arrow");
const pos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};
const mouse = {
  x: pos.x,
  y: pos.y
};
const speed = 0.15;

const xSet = gsap.quickSetter(arrow, "x", "px");
const ySet = gsap.quickSetter(arrow, "y", "px");

window.addEventListener("mousemove", (e) => {
  arrow.style.opacity = 1;
  mouse.x = e.x;
  mouse.y = e.y;

  const img = document.querySelector('.arrow-img-wrapper');
  if (e.clientX > window.innerWidth / 2) {
    img.style.transform = 'scaleX(-1)';
  } else {
    img.style.transform = 'scaleX(1)';
  }

});
gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

/* //해시태그 */

/* 필터 */
$(document).ready(function () {
  // 페이지 로드 시 초기 카테고리로 "site"를 보여줌
  $(".ditem").hide();
  $(".ditem.ditem1").show();

  $(".dlist").click(function () {
    const dataValue = $(this).attr("data-filter")
    $(".ditem").hide()
    $(".ditem." + dataValue).show()
    $(this).addClass("active").siblings().removeClass("active")
  })
})
/* //필터 */

/* 스티커 */
document.querySelectorAll('.sticker').forEach(makeDraggable);

function makeDraggable(sticker) {
  let offsetX, offsetY, isDragging = false;

  sticker.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - sticker.getBoundingClientRect().left;
    offsetY = e.clientY - sticker.getBoundingClientRect().top;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    sticker.style.left = `${x}px`;
    sticker.style.top = `${y}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}
/* //스티커 */

/* 🧷헤더 */
function header() {
  gsap.to(".title_paralax", {
    scrollTrigger: {
      trigger: "#home", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    yPercent: -150
  });

  gsap.to(".header__marq .stroke", {
    scrollTrigger: {
      trigger: "#home", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    yPercent: 50
  });

  gsap.to(".header__marq .header__img", {
    scrollTrigger: {
      trigger: "#home", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    xPercent: -70
  });

  gsap.to(".header__marq .header__img img", {
    scrollTrigger: {
      trigger: "#home", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    scale: 1.3
  });

  gsap.to(".header__marq .header__marq-wrapp", {
    scrollTrigger: {
      trigger: "#home", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    xPercent: -50
  });

  gsap.to(".header__marq .header__marq-star img", {
    scrollTrigger: {
      trigger: "#home", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    rotate: -720
  });
}

header();
/* //🧷헤더 */


//wow
var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true,
  callback: function (box) {},
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();


/* 탑버튼 */
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    // 스크롤이 일정 이상 되었을 때 버튼을 보이게 하거나 숨김
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // 버튼을 클릭했을 때 맨 위로 스크롤
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
/* //탑버튼 */


/* 타이핑 */
// get the element
const text = document.querySelector('.typing-text');

// make a words array
const words = [
  "Let's collaborate!",
  "kimnahye1313@naver.com",
  "+82 (0)10 9236 7560",
  "©2025 All rights reserved."
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}

/* //타이핑 */


/* 메인프로젝트 */
var items = document.querySelectorAll(".list__item")

items.forEach(item => {
  var itemTitle = item.querySelector(".list__item__title")
  var itemTitleOutline = item.querySelector(".list__item__titleOutline")
  var itemImg = item.querySelector(".list__item img")
  
  var itemTL = gsap.timeline({scrollTrigger: {
    trigger: item,
    start: "0% 75%",
    end: "25% 50%",
    scrub: 3,
  }})
  
  itemTL.fromTo(itemTitle, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
  itemTL.fromTo(itemTitleOutline, {scale: 2, y: "100%"}, {scale: 1, y: "0%", ease: "power2.inOut"}, 0)
  
  gsap.fromTo(itemImg, {x: "60vw", y : "60vh", rotate: -30}, {x: "-60vw", y: "-60vh", rotate: 30, ease: "none", scrollTrigger: {
    trigger: item,
    start: "50% 100%",
    end: "100% 50%",
    scrub: 3,
  }})
})
/* //메인프로젝트 */



/* test3 */

gsap.utils.toArray(".nana").forEach((el) => {
  gsap.to(el, {
    yPercent: -100, // 이미지가 스크롤에 따라 위로 100%만큼 이동
    scale: 1.1, // 스크롤에 따라 이미지 크기가 살짝 커짐
    ease: "none", // 애니메이션을 부드럽게 만들기
    scrollTrigger: {
      trigger: el,  // 각 이미지가 트리거 역할을 하며, 해당 이미지가 화면에 들어오거나 나갈 때 애니메이션 발생
      start: "top bottom",  // 이미지가 화면에 들어올 때 애니메이션 시작
      end: "bottom top",    // 이미지가 화면을 벗어날 때 애니메이션 종료
      scrub: true,          // 스크롤에 맞춰 애니메이션이 동기화되도록 설정
      onUpdate: (self) => {
        // 스크롤 진행 상태에 따라 크기 변화를 조금씩 조정
        const scaleValue = 1 + self.progress * 0.2; // 스크롤 진행에 따라 크기 변화
        gsap.set(el, {
          scale: scaleValue, // 크기 변화를 설정
        });
      }
    },
  });
});
/* //test3 */

/* 마그넷 */
//Getting Started
//Shery.mouseFollower();

//위의 값을 바꿔서 아래처럼 사용할 수 있음
//Cool Effects--Mouse Follower 
Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


//Cool Effects--Make Magnet
Shery.makeMagnet(".magnet-target", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});

//Cool Effects--Text Animate
Shery.textAnimate(".text-target", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

//Cool Effects--Hover With Media Circle
Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
  // images: ["https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_1280.jpg", "https://cdn.pixabay.com/photo/2023/12/16/21/37/ai-generated-8453296_1280.jpg", "https://cdn.pixabay.com/photo/2023/12/11/20/07/ai-generated-8444360_1280.png"] /*OR*/,
  videos: ["https://understanding963852.github.io/img/0.mp4", "https://understanding963852.github.io/img/2.mp4", "https://understanding963852.github.io/img/3.mp4"]
});
/* 영상은 깃헙에서 들어오는 편이 로딩 짧음, 직접 다운 받아서 가지고 있으면 로딩이 김 */
/* 마그넷 */


/* 프리로더 */
const loadingText = new SplitType(".loading-text.initial", { types: "chars" });
const completeText = new SplitType(".loading-text.complete", { types: "chars" });
const titleText = new SplitType(".content h1", { types: "chars" });
const paragraphText = new SplitType(".content p", { types: "chars" });

// Initial states for elements
gsap.set(".loading-text.complete", { y: "100%" });
gsap.set(loadingText.chars, { opacity: 0, y: 100 });
gsap.set(completeText.chars, { opacity: 0, y: 100 });

// Animate in loading text
gsap.to(loadingText.chars, {
  opacity: 1,
  y: 0,
  duration: 0.5,
  stagger: 0.05,
  ease: "power2.out"
});

// Color stages for the preloader
const colorStages = [
  { bg: "rgb(0, 0, 0)", text: "rgb(255, 255, 255)" }, // Stage 1: black background, white text
  { bg: "rgb(255, 255, 255)", text: "rgb(0, 0, 0)" }, // Stage 2: white background, black text
  { bg: "rgb(0, 0, 0)", text: "rgb(255, 255, 255)" }, // Stage 3: black background, white text
  { bg: "rgb(255, 255, 255)", text: "rgb(0, 0, 0)" }  // Stage 4: white background, black text
];

// Update colors based on the progress
function updateColors(progress) {
  const stage = Math.floor(progress / 25);
  if (stage < colorStages.length) {
    document.querySelector(".preloader").style.backgroundColor = colorStages[stage].bg;
    document.querySelectorAll(".loading-text .char, .percentage").forEach(el => {
      el.style.color = colorStages[stage].text;
    });
  }
}

// GSAP timeline for animations
const tl = gsap.timeline();

// Animate progress bar and preloader text transitions
tl.to(".preloader", {
  width: "100%",
  duration: 5,
  ease: "power1.inOut",
  onUpdate: function () {
    const progress = Math.round(this.progress() * 100);
    document.querySelector(".percentage").textContent = progress;
    updateColors(progress);
  }
})
  .to(".loading-text.initial", {
    y: "-100%",
    duration: 0.5,
    ease: "power2.inOut"
  })
  .to(".loading-text.complete", {
    y: "0%",
    duration: 0.5,
    ease: "power2.inOut"
  }, "<") // Synchronize with the previous animation
  .to(completeText.chars, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.03,
    ease: "power2.out"
  }, "<0.2") // Stagger the appearance of "complete" text
  .to(".preloader", {
    y: "-100vh",
    duration: 1,
    ease: "power2.inOut",
    delay: 0.8
  })
  .set(".content", {
    visibility: "visible"
  }, "-=1")
  .to([titleText.chars, paragraphText.chars], {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.02,
    ease: "power4.out"
  }, "-=0.5")
  .set(".preloader", {
    display: "none"
  });
/* //프리로더 */
