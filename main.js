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

/* 디자인 */
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: "#section1",
  triggerHook: "onEnter",
  duration: "200%"
}).setPin("#section1 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section2",
  triggerHook: "onEnter",
  duration: "200%"
}).setPin("#section2 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section3",
  triggerHook: "onEnter",
  duration: "200%"
}).setPin("#section3 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section4",
  triggerHook: "onEnter",
  duration: "200%"
}).setPin("#section4 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#section5",
  triggerHook: "onEnter",
  duration: "100%" // 길이 너무 길게 주면 화면에서 안 보여질 수도 있음
}).setPin("#section5 .pinWrapper", {
  pushFollowers: false
}).addTo(controller);

/* //디자인 */

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
Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/ , {
  images: ["img/planet1.png", "img/planet2.png", "img/planet3.png"] /*OR*/ ,
  //videos: ["https://understanding963852.github.io/img/0.mp4", "https://understanding963852.github.io/img/2.mp4", "https://understanding963852.github.io/img/3.mp4"]
});
/* 영상은 깃헙에서 들어오는 편이 로딩 짧음, 직접 다운 받아서 가지고 있으면 로딩이 김 */
/* 마그넷 */

/* 시계 및 위도/경도 */
// 한국 및 런던 시간과 위도/경도 업데이트
function updateTimesAndCoordinates() {
  // 한국 시간 업데이트
  var koreaTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Seoul"
  });
  document.getElementById("koTime").textContent = koreaTime.split(",")[1].trim();

  // 런던 시간 업데이트
  var londonTime = new Date().toLocaleString("en-US", {
    timeZone: "Europe/London"
  });
  document.getElementById("londonTime").textContent = londonTime.split(",")[1].trim();

  // 한국 위도/경도
  document.getElementById("koCoordinates").textContent = "Latitude: 37.5665, Longitude: 126.9780"; // 서울

  // 런던 위도/경도
  document.getElementById("londonCoordinates").textContent = "Latitude: 51.5074, Longitude: -0.1278"; // 런던
}

setInterval(updateTimesAndCoordinates, 1000);


/* //시계 및 위도/경도 */


/* 줌 */
gsap.set(".zoom-reveal", {
  scale: 0.75
});


gsap.to(".zoom-reveal", {
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".zoom",
    scrub: 1,
    pin: true,
    end: "+=1000",
  },
});


gsap.to(".left-img", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".art-wrapper",
    scrub: 1,
  },
});
gsap.to(".right-img", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".art-wrapper",
    scrub: 1,
  },
});
gsap.to(".titel", {
  yPercent: -0,
  ease: "none",
  scrollTrigger: {
    trigger: ".art-wrapper",
    scrub: 1,
    end: "100px;",
  },
});
gsap.to(".left-scroll", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".artist",
    scrub: 1,
    start: "-50%",
    pin: true,
    end: "+=1000"

  },
});
gsap.to(".right-scroll", {
  xPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".artist",
    scrub: 1,
    pin: true,
    start: "-50%",
    end: "+=1000"

  },
});

/* //줌 */


/* 이메일 */
// 팝업 열기 및 닫기 기능
document.getElementById("contactButton").addEventListener("click", function (event) {
  event.preventDefault(); // 기본 링크 동작을 막습니다
  document.getElementById("emailPopup").style.display = "flex"; // 팝업을 보여줍니다
});

// 팝업 닫기 버튼 클릭 시 팝업 닫기
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("emailPopup").style.display = "none"; // 팝업을 숨깁니다
});

/* //이메일 */


/* 퍼블리싱 */
const forEach = function (array, callback, scope) {
  for (let i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

const Intro = function () {
  const Title = document.querySelector(".js-page-title");
  const SubTitle = document.querySelector(".js-page-subtitle");
  const Text = document.querySelector(".js-page-text");
  const Thumbs = document.querySelectorAll(".js-page-thumbs");

  // 초기화
  gsap.set(".page__logo", {
    autoAlpha: 0
  });
  gsap.set(SubTitle, {
    autoAlpha: 0,
    y: 45
  });
  gsap.set(Text, {
    autoAlpha: 0,
    y: 45
  });

  Thumbs.forEach((thumb) => {
    gsap.set(thumb, {
      scale: 0.1,
      clipPath: "polygon(50% 20%, 50% 20%, 50% 80%, 50% 80%)",
    });
  });

  // 기존 char 정리 후 다시 분리
  const oldSplit = document.querySelectorAll('.char');
  oldSplit.forEach(el => el.outerHTML = el.textContent);
  const split = new SplitType(Title, {
    types: 'chars'
  });

  // 로고 보여주기
  gsap.set(".page__logo", {
    delay: 0.2,
    autoAlpha: 1
  });

  // 타이틀 애니메이션
  gsap.from(split.chars, {
    delay: 0.5,
    opacity: 0,
    y: 50,
    ease: "back.out(4)",
    stagger: {
      from: "end",
      each: 0.1,
    },
  });

  // 서브타이틀 & 썸네일 애니메이션
  gsap.to(SubTitle, {
    delay: 1.2,
    y: 0,
    autoAlpha: 1,
    ease: "power4.inOut",
    onComplete: () => {
      Thumbs.forEach((thumb, index) => {
        gsap.to(thumb, {
          delay: index * 0.5,
          scale: 1,
          clipPath: "polygon(100% 0,0 0,0 100%,100% 100%)",
          ease: "power4.inOut",
        });
      });
    },
  });

  // big text 등장
  gsap.to(Text, {
    delay: 3,
    y: 0,
    autoAlpha: 1,
    ease: "power4.inOut",
  });
};

const Animations = function () {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement: ".page__text__trigger",
      duration: 650,
    })
    .setTween(gsap.to(".page__logo", {
      top: '6%',
      scale: 0.5,
      autoAlpha: 1,
      ease: "expo.inOut"
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".page__items",
      duration: 650,
    })
    .setTween(gsap.to(".page__items__item img", {
      y: 0,
      scale: 1,
      autoAlpha: 1,
      ease: "expo.inOut"
    }))
    .addTo(controller);
};

// ✅ 초기 실행
window.addEventListener("DOMContentLoaded", () => {
  Intro();
  Animations();
});

// ✅ 스크롤 맨 위에서 항상 재실행
let introPlayed = false;

const handleScroll = () => {
  if (window.scrollY === 0 && !introPlayed) {
    Intro();
    introPlayed = true;
  } else if (window.scrollY > 100) {
    introPlayed = false;
  }
};

window.addEventListener("scroll", handleScroll);

/* //퍼블리싱 */


/* 설명 */

// 마우스 따라다니는 커서
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
  t.style.left = n.clientX + "px",
    t.style.top = n.clientY + "px",
    e.style.left = n.clientX + "px",
    e.style.top = n.clientY + "px",
    i.style.left = n.clientX + "px",
    i.style.top = n.clientY + "px"
});

var t = document.getElementById("cursor"),
  e = document.getElementById("cursor2"),
  i = document.getElementById("cursor3");

function n(t) {
  e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2")
}

function s(t) {
  e.classList.remove("hover", "hover-2"), i.classList.remove("hover", "hover-2")
}
s();

for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}

function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

// 기존 이미지 효과 (img-1 ~ img-4)
document.addEventListener('DOMContentLoaded', function () {
  const imgMap1 = [{
      selector: '.img-1',
      className: 'img-1-wrap'
    },
    {
      selector: '.img-2',
      className: 'img-2-wrap'
    },
    {
      selector: '.img-3',
      className: 'img-3-wrap'
    },
    {
      selector: '.img-4',
      className: 'img-4-wrap'
    }
  ];

  const bodychange = document.querySelector('body');

  imgMap1.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el) {
      el.addEventListener('mouseenter', () => bodychange.classList.add(item.className));
      el.addEventListener('mouseleave', () => bodychange.classList.remove(item.className));
    }
  });
});

// 👇 새로운 추가 이미지 효과 (img-5 ~ img-8)
document.addEventListener('DOMContentLoaded', function () {
  const imgMap2 = [{
      selector: '.img-5',
      className: 'img-5-wrap'
    },
    {
      selector: '.img-6',
      className: 'img-6-wrap'
    },
    {
      selector: '.img-7',
      className: 'img-7-wrap'
    },
    {
      selector: '.img-8',
      className: 'img-8-wrap'
    }
  ];

  const bodychange = document.querySelector('body');

  imgMap2.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el) {
      el.addEventListener('mouseenter', () => bodychange.classList.add(item.className));
      el.addEventListener('mouseleave', () => bodychange.classList.remove(item.className));
    }
  });
});

/* //설명 */

/* Parallax */
$.fn.parallax = function (resistance, mouse) {
  $el = $(this);
  TweenLite.to($el, 0.2, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};

$(document).mousemove(function (e) {
  $(".background").parallax(-30, e);
});
/* //Parallax */

/* 흠 */
// 콘텐츠 섹션들을 순회
gsap.utils.toArray(".content").forEach((section, index) => {
  const card = document.querySelector(`.card-${index + 1}`);
  const allCards = document.querySelectorAll(".card");
  const tags = section.querySelectorAll(".desc, .tools span, .gosite a");

  if (!card) return;

  // 카드 이미지 애니메이션
  gsap.to(card, {
    opacity: 1,
    scale: 1,
    translateY: 0,
    ease: "power2.out",
    duration: 1.2,
    scrollTrigger: {
      trigger: section,
      start: "top 60%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
      onEnter: () => {
        allCards.forEach(c => {
          c.style.opacity = "0";
          c.style.pointerEvents = "none";
          c.style.zIndex = "0";
        });

        card.style.opacity = "1";
        card.style.pointerEvents = "auto";
        card.style.zIndex = "1";
      },
      onLeaveBack: () => {
        allCards.forEach(c => {
          c.style.opacity = "0";
          c.style.pointerEvents = "none";
          c.style.zIndex = "0";
        });

        const prevCard = document.querySelector(`.card-${index}`);
        if (prevCard) {
          prevCard.style.opacity = "1";
          prevCard.style.pointerEvents = "auto";
          prevCard.style.zIndex = "1";
        }
      },
    },
  });

  // 텍스트 요소 애니메이션
  tags.forEach((tag, i) => {
    gsap.from(tag, {
      opacity: 0,
      y: 30,
      delay: i * 0.1,
      duration: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: tag,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });
});


/* //흠 */

/* 프리로더 */
document.addEventListener("DOMContentLoaded", function () {
  const preloader = gsap.timeline({
    onComplete: function () {
      console.log("Preloader done");
    }
  });

  preloader.addLabel('start')
    .to('.pre-stage .col-a', {
      y: '-280vw',
      duration: 4,
      ease: "power4.inOut"
    }, 'start')
    .to('.pre-stage .col-b', {
      y: '-140vw',
      duration: 5,
      ease: "power4.inOut"
    }, 'start')
    .to('.pre-stage .col-c', {
      y: '-280vw',
      duration: 4,
      ease: "power4.inOut"
    }, 'start')
    .to('.pre-stage .col-d', {
      y: '-140vw',
      duration: 5,
      ease: "power4.inOut"
    }, 'start')
    .to('.pre-stage', {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
      onComplete: () => {
        // 마지막에 "NANA"가 나타나는 시점에 보이도록 함
        document.querySelector('.pre-stage').style.display = 'none';
      }
    }, 'start+=5');
});


/* //프리로더 */
