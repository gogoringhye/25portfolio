/* 프리로더 */

const tl = gsap.timeline();
const terminalElement = document.querySelector(".terminal");

gsap.set(".content", {
  visibility: "hidden",
  opacity: 0
});
gsap.set(".command-line", {
  opacity: 0,
  y: 20
});

const padNumber = (num) => num.toString().padStart(2, "0");

const updateCursor = (activeCommandId) => {
  document.querySelectorAll(".cursor").forEach((cursor) => {
    cursor.classList.remove("active-cursor");
  });
  const activeCursor = document.querySelector(`#${activeCommandId} .cursor`);
  if (activeCursor) {
    activeCursor.classList.add("active-cursor");
  }
};

tl.to("#cmd1", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => updateCursor("cmd1")
  })
  .to(".loading-progress", {
    width: "100%",
    duration: 5,
    ease: "none",
    onUpdate: function () {
      const progress = Math.round(this.progress() * 100);
      document.querySelector(".percentage").textContent = `${padNumber(
        progress
      )}%`;

      if (progress < 20) {
        updateCursor("cmd1");
      } else if (progress < 50) {
        updateCursor("cmd2");
      } else if (progress < 80) {
        updateCursor("cmd3");
      } else {
        updateCursor("cmd4");
      }

      if (progress >= 20 && progress < 21) {
        gsap.to("#cmd2", {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
      if (progress >= 50 && progress < 51) {
        gsap.to("#cmd3", {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
      if (progress >= 80 && progress < 81) {
        gsap.to("#cmd4", {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
    }
  })
  .to(terminalElement, {
    duration: 0.5,
    opacity: 0,
    scale: 0.95,
    ease: "power2.inOut"
  })
  .set(".preloader", {
    display: "none"
  })
  .set(".content", {
    visibility: "visible"
  })
  .to(".content", {
    opacity: 1,
    duration: 0.5
  })

gsap.to(".terminal-content", {
  duration: 0.1,
  opacity: 0.95,
  repeat: -1,
  yoyo: true,
  ease: "none"
});

/* //프리로더 */

/* 스킬 이미지 */

// 이미지 미리 로드
const preloadImages = (selector = "img") => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector), {
        background: true
      },
      resolve
    );
  });
};

// 부드러운 스크롤 초기화
let lenis;

const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true
  });

  lenis.on("scroll", () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
};

// 갤러리 스크롤 시 Flip 효과
const triggerFlipOnScroll = (galleryEl, options) => {
  let settings = Object.assign({
    flip: {
      absoluteOnLeave: false,
      absolute: false,
      scale: true,
      simple: true
    },
    scrollTrigger: {
      start: "center center",
      end: "+=300%"
    },
    stagger: 0
  }, options);

  const galleryCaption = galleryEl.querySelector(".caption");
  const galleryItems = galleryEl.querySelectorAll(".gallery__item");
  const galleryItemsInner = [...galleryItems].flatMap(item =>
    item.children.length > 0 ? [...item.children] : []
  );

  galleryEl.classList.add("gallery--switch");
  const flipstate = Flip.getState([galleryItems, galleryCaption], {
    props: "filter, opacity"
  });
  galleryEl.classList.remove("gallery--switch");

  const tl = Flip.to(flipstate, {
    ease: "none",
    absoluteOnLeave: settings.flip.absoluteOnLeave,
    absolute: settings.flip.absolute,
    scale: settings.flip.scale,
    simple: settings.flip.simple,
    scrollTrigger: {
      trigger: galleryEl,
      start: settings.scrollTrigger.start,
      end: settings.scrollTrigger.end,
      pin: galleryEl.parentNode,
      scrub: true
    },
    stagger: settings.stagger
  });

  if (galleryItemsInner.length) {
    tl.fromTo(
      galleryItemsInner, {
        scale: 2
      }, {
        scale: 1,
        scrollTrigger: {
          trigger: galleryEl,
          start: settings.scrollTrigger.start,
          end: settings.scrollTrigger.end,
          scrub: true
        }
      },
      0
    );
  }
};

// 갤러리 등록 및 실행
const scroll = () => {
  const galleries = [{
    id: "#gallery-3",
    options: {
      flip: {
        absolute: true,
        scale: false
      },
      scrollTrigger: {
        start: "center center",
        end: "+=900%"
      },
      stagger: 0.05
    }
  }];

  galleries.forEach(gallery => {
    const galleryElement = document.querySelector(gallery.id);
    triggerFlipOnScroll(galleryElement, gallery.options);
  });
};

// 실행
preloadImages(".gallery__item").then(() => {
  initSmoothScrolling();
  scroll();
  document.body.classList.remove("loading");
});

/* //스킬 이미지 */


/* 디자인 */
var controller = new ScrollMagic.Controller();

["section1", "section2", "section3", "section4", "section5"].forEach((sectionId, index) => {
  var duration = sectionId === "section5" ? "100%" : "200%";

  new ScrollMagic.Scene({
      triggerElement: `#${sectionId}`,
      triggerHook: "onEnter",
      duration: duration
    })
    .setPin(`#${sectionId} .pinWrapper`, {
      pushFollowers: false
    })
    .addTo(controller);
});
/* //디자인 */


/* 퍼블리싱 */
// .col 요소들을 선택하여 순차적으로 스크롤 애니메이션을 적용
let cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
  const q = gsap.utils.selector(col); // 각 col 요소의 자식 요소들을 선택

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: col,
      start: "top bottom", // 스크롤이 해당 요소의 상단에 올 때 애니메이션 시작
      pin: false, // 해당 요소를 고정하지 않음
      scrub: 1, // 스크롤 애니메이션을 따라가도록 설정
      ease: "power2.inOut" // 애니메이션의 가속도를 설정
    }
  });

  // i 값에 따라 각 .col 요소의 애니메이션을 다르게 설정
  if ((i + 1) % 3 === 0) {
    tl.fromTo(col, {
      yPercent: 20
    }, {
      yPercent: 0
    }); // 3번째 열
  } else if ((i + 1) % 3 === 2) {
    tl.fromTo(col, {
      yPercent: 0
    }, {
      yPercent: 0
    }); // 2번째 열
  } else {
    tl.fromTo(col, {
      yPercent: 10
    }, {
      yPercent: 0
    }); // 1번째 열
  }
});

// .shadowed-top 요소에 스크롤 트리거를 설정하여 "shadowed" 클래스를 추가/제거
gsap.utils.toArray(".shadowed-top").forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element, // 각 .shadowed-top 요소를 트리거로 설정
      start: "top 50%", // 요소가 화면의 50%에 도달할 때 시작
      end: "bottom 0%", // 요소가 화면의 0%에 도달할 때 종료
      onEnter: () => document.body.classList.add("shadowed"), // 들어올 때 "shadowed" 클래스 추가
      onLeave: () => document.body.classList.remove("shadowed"), // 나갈 때 "shadowed" 클래스 제거
      onEnterBack: () => document.body.classList.add("shadowed"), // 되돌아올 때 "shadowed" 클래스 추가
      onLeaveBack: () => document.body.classList.remove("shadowed") // 되돌아가면서 "shadowed" 클래스 제거
    }
  });
});

/* 버튼 */
document.querySelectorAll('.card').forEach(card => {
  const pills = card.querySelectorAll('.pill');
  if (pills.length === 4) {
    const lastPill = pills[pills.length - 1]; // 마지막 버튼 (code review)
    lastPill.classList.add('overlay');

    const header = card.querySelector('.card__header');
    header.appendChild(lastPill); // 이미지 안으로 이동
  }
});
/* //버튼 */

/* //퍼블리싱 */


/* 마그넷 */

// 마우스 팔로워 효과
Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// 마그넷 효과
Shery.makeMagnet(".magnet-target", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});

// 호버 시 미디어 서클
Shery.hoverWithMediaCircle(".hvr", {
  images: ["img/planet1.png", "img/planet2.png", "img/planet3.png", "img/planet4.png", "img/planet5.png", "img/planet6.png", "img/planet7.png", "img/planet8.png"]
});
/* 영상은 깃헙에서 들어오는 편이 로딩 짧음, 직접 다운 받아서 가지고 있으면 로딩이 김 */
/* //마그넷 */


/* 로고 */
const Intro = function () {
  const Title = document.querySelector(".js-page-title");
  const SubTitle = document.querySelector(".js-page-subtitle");

  // 이전 char 정리
  const oldSplit = document.querySelectorAll('.char');
  oldSplit.forEach(el => el.outerHTML = el.textContent);

  // SplitType으로 글자 나누기
  const split = new SplitType(Title, {
    types: 'chars'
  });

  // 초기 상태 세팅
  gsap.set(".page__logo", {
    autoAlpha: 0
  });
  gsap.set(SubTitle, {
    autoAlpha: 0,
    y: 45
  });

  // 로고 보이기
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

  // 서브타이틀 애니메이션
  gsap.to(SubTitle, {
    delay: 1.2,
    y: 0,
    autoAlpha: 1,
    ease: "power4.inOut",
  });
};

// 최초 로딩 시 실행
window.addEventListener("DOMContentLoaded", () => {
  Intro();
});

// 스크롤 맨 위 도달 시 다시 실행
let introPlayed = false;

const handleScroll = () => {
  if (window.scrollY === 0 && !introPlayed) {
    Intro();
    introPlayed = true;
  } else if (window.scrollY > 0) {
    introPlayed = false;
  }
};

window.addEventListener("scroll", handleScroll);
/* //로고 */


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

/* 설명 */

// 마우스를 따라다니는 커서
const cursor = document.getElementById("cursor"),
  cursor2 = document.getElementById("cursor2"),
  cursor3 = document.getElementById("cursor3");

document.body.addEventListener("mousemove", function (e) {
  const {
    clientX: x,
    clientY: y
  } = e;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor2.style.left = x + "px";
  cursor2.style.top = y + "px";
  cursor3.style.left = x + "px";
  cursor3.style.top = y + "px";
});

function handleMouseOver() {
  cursor2.classList.add("hover", "hover-2");
  cursor3.classList.add("hover", "hover-2");
}

function handleMouseOut() {
  cursor2.classList.remove("hover", "hover-2");
  cursor3.classList.remove("hover", "hover-2");
}

// hover-target에 효과 추가
document.querySelectorAll(".hover-target").forEach(target => {
  target.addEventListener("mouseover", handleMouseOver);
  target.addEventListener("mouseout", handleMouseOut);
});

// 이미지 호버 시 body 클래스 변경
document.addEventListener("DOMContentLoaded", function () {
  const imgMap = [{
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

  const body = document.body;

  imgMap.forEach(({
    selector,
    className
  }) => {
    const el = document.querySelector(selector);
    if (el) {
      el.addEventListener('mouseenter', () => body.classList.add(className));
      el.addEventListener('mouseleave', () => body.classList.remove(className));
    }
  });
});
/* //설명 */

/* 가치 */
gsap.registerPlugin(ScrollTrigger);
const pinnedImageWrappers = document.querySelectorAll('#values');
if (pinnedImageWrappers) {
  pinnedImageWrappers.forEach((wrapper) => {
    const inner = wrapper.querySelector('#values .image_slider');
    gsap.to(inner, {
      x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',
      ease: 'none',
      scrollTrigger: {
        start: 'top',
        trigger: wrapper,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => `+=${inner.offsetWidth}`
      }
    });
  });
}
/* //가치 */

/* 여정 */
document.addEventListener('DOMContentLoaded', function () {

  // 단계 강조 효과 (.on 클래스 토글)
  const steps = document.querySelectorAll(".journey-category li");
  const triggers = document.querySelectorAll(".scrolling-wrap li");

  steps.forEach((step, i) => {
    ScrollTrigger.create({
      trigger: triggers[i],
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        steps.forEach(s => s.classList.remove("on"));
        step.classList.add("on");
      },
      onLeaveBack: () => {
        steps.forEach(s => s.classList.remove("on"));
        if (steps[i - 1]) steps[i - 1].classList.add("on");
      }
    });
  });

  // 각 아이템 고정 및 축소 애니메이션
  const listItems = document.querySelectorAll('.scrolling-wrap li');
  listItems.forEach((item) => {
    if (item.classList.contains("last")) return;

    ScrollTrigger.create({
      trigger: item,
      start: "top top+=60",
      endTrigger: ".scrolling-wrap li.last",
      end: "top -5%",
      pin: true,
      pinSpacing: false,
    });

    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top top+=65",
        end: "top -=70%",
        scrub: 1,
      },
      scale: 0.7,
      y: -200, // 위로 이동
      x: 0, // 오른쪽 이동 방지
      ease: "none",
    });
  });

});

/* //여정 */

/* 슝슝 */
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.img_box.observe');
  const items = document.querySelectorAll('#aspiration .aspiration-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
      } else {
        entry.target.classList.remove('on');
      }
    });
  }, {
    threshold: 0.5,
  });

  targets.forEach(el => observer.observe(el));
  items.forEach(el => observer.observe(el));
});

/* //슝슝 */
