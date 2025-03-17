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
  date.setDate(date.getDate() + 7) //만료일을 만듦
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
      trigger: ".header",
      start: 'top top',
      scrub: 1.9
    },
    yPercent: -150

  })

  gsap.to(".header .stroke", {
    scrollTrigger: {
      trigger: ".header",
      start: 'top top',
      scrub: 1.9
    },
    yPercent: 50

  })

  gsap.to(".header__img", {
    scrollTrigger: {
      trigger: ".header",
      start: 'top top',
      scrub: 1.9
    },
    xPercent: -70

  })

  gsap.to(".header__img img", {
    scrollTrigger: {
      trigger: ".header",
      start: 'top top',
      scrub: 1.9
    },
    scale: 1.3

  })

  gsap.to(".header__marq-wrapp", {
    scrollTrigger: {
      trigger: ".header",
      start: 'top top',
      scrub: 1.9
    },
    xPercent: -50

  })

  gsap.to(".header__marq-star img", {
    scrollTrigger: {
      trigger: ".header",
      start: 'top top',
      scrub: 1.9
    },
    rotate: -720

  })



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

/* 트위스트 */
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

gsap.defaults({
  overwrite: "auto",
});

gsap.fromTo(".pic", {
  y: -25
}, {
  duration: 1,
  y: 25,
  ease: "sine.inOut",
  stagger: {
    each: 0.1,
    yoyo: true,
    repeat: -1
  }
});

gsap.fromTo(".pic", {
  rotationY: -90
}, {
  scrollTrigger: {
    trigger: ".pic",
    scrub: true,
    start: "top bottom",
    end: "bottom top"
  },
  rotationY: 90,
  ease: "none",
  stagger: 0.03
});

gsap.fromTo(".pic", {
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".pic",
    scrub: true,
    start: "top bottom",
    end: "bottom center"
  },
  opacity: 1,
  ease: "none",
  stagger: 0.03
});
/* //트위스트 */



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

/* about me */
var s1 = document.querySelector(".inform");
var s2 = document.querySelector(".inform[data-clone]");

function select_scroll_1(e) {
  s2.scrollTop = s1.scrollTop;
}

function select_scroll_2(e) {
  s1.scrollTop = s2.scrollTop;
}

s1.addEventListener("scroll", select_scroll_1, false);
s2.addEventListener("scroll", select_scroll_2, false);
/* //about me */


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
  "사용자 경험을 중요하게 생각하는 웹퍼블리셔가 되고 싶어. 항상 사용자 입장에서 생각해서 직관적이고 편리한 웹사이트를 만들고 싶어.",
  "디자인과 기능을 동시에 고려해서 실용적인 웹사이트를 만들 수 있는 웹퍼블리셔가 되고 싶어.",
  "반응형 웹을 잘 구현할 수 있는 퍼블리셔가 되고 싶어. 다양한 화면에서 최적화된 사용자 경험을 제공하고 싶어.",
  "트렌디한 디자인을 반영하고 최신 웹 기술을 활용해서 효율적이고 빠른 웹사이트를 만들고 싶어.",
  "콘텐츠 구성과 레이아웃을 최적화해서 가독성을 높이고, 사용자들이 더 편리하게 웹사이트를 사용할 수 있도록 하고 싶어.",
  "웹 접근성을 고려해서 장애가 있는 사용자도 편리하게 웹사이트를 이용할 수 있도록 만들고 싶어.",
  "웹사이트 성능 최적화에 집중해서 로딩 속도를 빠르게 하고, 사이트 안정성을 높일 수 있는 웹퍼블리셔가 되고 싶어.",
  "디자인뿐만 아니라 사용자 반응을 고려한 UX/UI 설계를 통해 효과적인 웹사이트를 만들고 싶어.",
  "다양한 기기에서 일관된 디자인과 사용자 경험을 제공하는 반응형 웹퍼블리셔가 되고 싶어.",
  "팀원들과 협업하면서 효율적인 개발 프로세스를 구축하고, 품질 높은 웹사이트를 빠르게 구현할 수 있도록 노력할 거야.",
  "기술을 배우면서 나만의 디자인 스타일을 만들고, 창의적이고 직관적인 웹사이트를 만들고 싶어.",
  "웹사이트 관리와 유지보수가 쉬운 구조로 설계해서 고객이나 사용자가 계속 만족할 수 있는 환경을 만들고 싶어.",
  "디지털 마케팅과 연계해서 SEO와 웹 분석을 잘 활용해, 방문자 수를 늘릴 수 있는 웹퍼블리셔가 되고 싶어.",
  "콘텐츠가 시각적으로 잘 전달되도록 고민해서 효율적으로 정보를 제공하는 웹사이트를 만들고 싶어.",
  "디자인과 기능이 균형을 이루는 웹사이트를 만들어서, 방문자들이 쉽게 정보를 찾을 수 있도록 하고 싶어.",
  "다양한 브라우저와 기기에서 테스트해서 웹사이트의 일관성과 안정성을 유지할 수 있는 퍼블리셔가 되고 싶어.",
  "HTML, CSS, JavaScript 같은 기본 기술을 탄탄히 익혀서 깔끔하고 효율적인 코드를 작성할 수 있는 웹퍼블리셔가 되고 싶어.",
  "기술적인 부분뿐만 아니라 디자인 트렌드와 시장의 변화를 빠르게 적응해서 혁신적인 웹사이트를 만들고 싶어.",
  "사용자가 편하게 웹사이트를 탐색할 수 있도록, 정보가 논리적으로 배열되고 직관적인 인터페이스를 만들고 싶어.",
  "프로젝트 목표와 요구 사항을 정확히 파악해서 효율적이고 사용자 요구에 맞는 웹사이트를 빠르게 개발하는 능력을 키우고 싶어."
];

const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "Sajad";

let previousMessage = null; // 마지막 출력된 메시지
let remainingMessages = [...BOT_MSGS]; // 사용 가능한 메시지 배열

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
  if (remainingMessages.length === 0) {
    remainingMessages = [...BOT_MSGS]; // 모든 메시지가 출력되면 배열을 초기화
  }

  // 이전 메시지와 중복되지 않는 새로운 메시지 선택
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * remainingMessages.length);
  } while (remainingMessages[randomIndex] === previousMessage);

  const message = remainingMessages.splice(randomIndex, 1)[0]; // 선택된 메시지 삭제 후 반환
  previousMessage = message; // 마지막 메시지를 기록
  return message;
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
