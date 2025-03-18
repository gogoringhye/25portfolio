/* 🍪쿠키 */
let currentCookie = document.cookie; //쿠키를 가져오는 방법
let cookieCheck = currentCookie.indexOf('green');

let noticeElement = document.querySelector('.notice');
let checkboxElement = document.querySelector('#cb');


if (cookieCheck > -1) {
  noticeElement.style.display = "none";
} else {
  noticeElement.style.display = "block";
}


checkboxElement.addEventListener('change', () => {
  let date = new Date(); //오늘 날짜
  date.setDate(date.getDate() + 7) //만료일 만듦
  //console.log(date)

  if (checkboxElement.checked) { //input에 check가 되었다면
    let setCookie = "";
    setCookie += 'green=true; ';
    setCookie += 'expires=' + date.toUTCString();
    document.cookie = setCookie; //쿠기저장
    noticeElement.style.display = "none"; //check와 동시에 공지사항 닫김
  }
})

/* close */
document.querySelector('.close').addEventListener("click", function () {
  this.parentElement.style.display = "none"
})

/* 한번 닫고나면 개발자에서 생선된 쿠기를 다시 삭제해줘야 화면에 나타남  */

/* //🍪쿠키 */

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

//제목
let tl = gsap.timeline();
tl.from(".title .char", {
  opacity: 0,
  yPercent: 130,
  stagger: 0.06,
  duration: 1,
  ease: "expo.out",
})
tl.to(".header__img", {
  duration: 2,
  clipPath: `polygon(100% 0, 0 0, 0 100%, 100% 100%)`,
  ease: "expo.out",
}, "-=1")

tl.from(".header__marq", {
  duration: 2,
  opacity: 0,
  yPercent: 100,
  ease: "expo.out"
}, "-=1.5")


let gsapSq = document.querySelectorAll('.section-title__square')


gsapSq.forEach((gSq, i) => {
  let rotate = gsap.from(gSq, {
    duration: 3,
    rotation: 720
  })

  ScrollTrigger.create({
    trigger: gSq,
    animation: rotate,
    start: 'top bottom',
    scrub: 1.9
  })
})


/* 🧷헤더 */
function header() {
  gsap.to(".title_paralax", {
    scrollTrigger: {
      trigger: ".skill", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    yPercent: -150
  });

  gsap.to(".header__marq .stroke", {
    scrollTrigger: {
      trigger: ".skill", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    yPercent: 50
  });

  gsap.to(".header__marq .header__img", {
    scrollTrigger: {
      trigger: ".skill", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    xPercent: -70
  });

  gsap.to(".header__marq .header__img img", {
    scrollTrigger: {
      trigger: ".skill", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    scale: 1.3
  });

  gsap.to(".header__marq .header__marq-wrapp", {
    scrollTrigger: {
      trigger: ".skill", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    xPercent: -50
  });

  gsap.to(".header__marq .header__marq-star img", {
    scrollTrigger: {
      trigger: ".skill", // Updated trigger
      start: 'top top',
      scrub: 1.9
    },
    rotate: -720
  });
}

header();
/* //🧷헤더 */

/* 🧷어바웃 */
function about() {
  gsap.from(".about__img", {
    scrollTrigger: {
      trigger: ".about",
      start: 'top bottom',
      scrub: 1.9
    },
    yPercent: 80

  })

  gsap.from(".about__img img", {
    scrollTrigger: {
      trigger: ".about",
      start: 'top bottom',
      scrub: 1.9
    },
    scale: 1.6

  })

  gsap.to(".about__txt", {
    scrollTrigger: {
      trigger: ".about__wrapp",
      start: 'top bottom',
      scrub: 1.9
    },
    yPercent: 50

  })
}

about();

/* //🧷어바웃 */

/* ☎️컨택 */
function contact() {
  gsap.from(".contact__item-arrow", {
    scrollTrigger: {
      trigger: ".contact__list",
      start: 'top bottom',
      scrub: 1.9
    },
    x: (i, el) => (1 - el.getAttribute('data-speed'))

  })
}
contact()

/* //☎️컨택 */

/* 🧷푸터 */
function footer() {
  gsap.from(".footer__div span", {
    scrollTrigger: {
      trigger: ".footer",
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1.9
    },
    y: (i, el) => (1 - el.getAttribute('data-speed'))

  })
}
footer()

/* //🧷푸터 */

/* //구조 */


/* 시계 */
var $time = $('.time');
setInterval(function () {
  var dday = new Date();
  var $write = dday.toLocaleString(
    'en-US');
  $time.text($write);

}, 200);
/* //시계 */

/* 웹리스트 */
document.addEventListener("DOMContentLoaded", function () {
  // Image Animation
  const items = document.querySelectorAll(".web-list li");
  items.forEach((el) => {
    gsap.set(".hover-img", {
      xPercent: -50,
      yPercent: -50
    });
    const image = el.querySelector(".hover-img");
    const innerImage = el.querySelector(".hover-img img");
    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    const mouse = {
      x: pos.x
    };
    const speed = 0.1;
    const xSet = gsap.quickSetter(image, "x", "px");
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      xSet(pos.x);
    });

    let direction = "",
      oldx = 0,
      // Vars
      lastCursorX = null,
      lastCursorY = null,
      cursorThreshold = 150,
      mousemovemethod = function (e) {
        if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
          direction = "left";
          lastCursorX = e.clientX;
          innerImage.style.transform = "rotate(-15deg)";
        } else if (
          e.pageX > oldx &&
          e.clientX >= lastCursorX + cursorThreshold
        ) {
          direction = "right";
          lastCursorX = e.clientX;
          innerImage.style.transform = "rotate(15deg)";
        }
        oldx = e.pageX;
      };
    $(document).on("mousemoveend", function () {
      innerImage.style.transform = "translateX(0%) rotate(0deg)";
    });
    document.addEventListener("mousemove", mousemovemethod);
    (function ($) {
      let timeout;
      $(document).on("mousemove", function (event) {
        if (timeout !== undefined) {
          window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
          // trigger the new event on event.target, so that it can bubble appropriately
          $(event.target).trigger("mousemoveend");
        }, 100);
      });
    })(jQuery);
  });

  // Hacky Code
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  const list = document.querySelectorAll(".web-list li");

  list.forEach((el) => {
    el.onmouseenter = (event) => {
      const target_element = event.target.querySelector("h2");
      let iteration = 0;
      const interval = setInterval(() => {
        target_element.innerText = target_element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target_element.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= target_element.dataset.value.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 20);
    };
  });
});

/* //웹리스트 */

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

/* 채팅 */
const msgerForm = document.querySelector(".msger-inputarea");
const msgerInput = document.querySelector(".msger-input");
const msgerChat = document.querySelector(".msger-chat");

const BOT_MSGS = [
  "나는 협업을 중요하게 생각하며 다양한 기기에서도 일관된 경험을 제공하는 웹퍼블리셔가 되고 싶어",
  "접근성과 웹 표준을 준수하면서 사용자가 편하게 쓸 수 있는 디자인을 만드는 게 목표야",
  "지속적으로 학습하고 새로운 기술과 도구를 습득하여 나의 역량을 꾸준히 향상시킬거야",
  "변화를 공포보다는 기회로 삼아 업계의 최신 동향을 따라가며 유연하게 대처하고, 웹사이트를 최신화하는 과정에서 끊임없이 발전하고 싶어",
];

const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "Sajad";

msgerForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const msgText = msgerInput.value.trim();
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  setTimeout(botResponse, calculateBotResponseDelay(msgText));
}

function appendMessage(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
        <div class="msg-bubble">
            <div class="msg-info-time">${formatDate(new Date())}</div>
            <div class="msg-text">${text}</div>
        </div>
    </div>
    `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  scrollToBottom();
}

function botResponse() {
  const msgText = getRandomBotMessage();
  appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
}

function getRandomBotMessage() {
  return BOT_MSGS[random(0, BOT_MSGS.length - 1)];
}

function calculateBotResponseDelay(msgText) {
  return msgText.split(" ").length * 100;
}

function scrollToBottom() {
  msgerChat.scrollTop = msgerChat.scrollHeight;
}

function formatDate(date) {
  const h = ("0" + date.getHours()).slice(-2);
  const m = ("0" + date.getMinutes()).slice(-2);
  return `${h}:${m}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* //채팅 */

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
  "build.",
  "design.",
  "refine.",
  "optimize."
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
