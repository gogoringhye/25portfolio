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


/* 이메일 */
// 팝업 열기 및 닫기 기능
document.getElementById("contactButton").addEventListener("click", function(event) {
  event.preventDefault(); // 기본 링크 동작을 막습니다
  document.getElementById("emailPopup").style.display = "flex"; // 팝업을 보여줍니다
});

// 팝업 닫기 버튼 클릭 시 팝업 닫기
document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("emailPopup").style.display = "none"; // 팝업을 숨깁니다
});
