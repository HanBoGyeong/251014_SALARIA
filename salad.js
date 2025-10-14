// 메인 페이지 Swiper 초기화
const mainSwiper = new Swiper(".mainSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
});

const hamburger = document.getElementById("hamburger");
const navi = document.getElementById("navi");

// 햄버거 버튼 클릭 이벤트
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navi.classList.toggle("active");
});

// 메뉴 항목 클릭 시 메뉴 닫기
const navLinks = document.querySelectorAll(".navi a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navi.classList.remove("active");
  });
});

// 메뉴 슬라이더 자동 스크롤
const slider = document.getElementById("menuSlider");
const circularSlider = document.querySelector(".circular-slider");
let position = 0;
const speed = 1;
let isPaused = false;

// 마우스 호버 시 일시정지
if (circularSlider) {
  circularSlider.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  circularSlider.addEventListener("mouseleave", () => {
    isPaused = false;
  });
}

// 애니메이션 함수
function animateSlider() {
  if (!isPaused && slider) {
    position -= speed;

    // 6개 아이템 너비 = 380px * 6 = 2280px
    const itemWidth = 380;
    const totalItems = 6;
    const resetPoint = -(itemWidth * totalItems);

    if (position <= resetPoint) {
      position = 0;
    }

    slider.style.transform = `translateX(${position}px)`;
  }

  requestAnimationFrame(animateSlider);
}

// 애니메이션 시작
if (slider) {
  animateSlider();
}

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("myButton");
  if (btn) {
    btn.addEventListener("click", function () {
      btn.classList.toggle("active");
    });
  }
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
// 스크롤 애니메이션 효과
window.addEventListener("scroll", () => {
  const menuSection = document.getElementById("menu");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // 메뉴 섹션이 뷰포트에 들어올 때 애니메이션
  if (scrollY > windowHeight * 0.5) {
    menuSection.style.transform = "translateY(0)";
    menuSection.style.opacity = "1";
  } else {
    menuSection.style.transform = "translateY(100px)";
    menuSection.style.opacity = "0.3";
  }
});

// 그리드 및 갤러리 아이템 스크롤 애니메이션 (반복 재생)
function animateOnScroll() {
  const gridItems = document.querySelectorAll(".grid-item");
  const galleryItems = document.querySelectorAll(".gallery-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 화면에 보이면 animate 클래스 추가
          entry.target.classList.add("animate");
        } else {
          // 화면에서 벗어나면 animate 클래스 제거
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  gridItems.forEach((item) => {
    observer.observe(item);
  });

  galleryItems.forEach((item) => {
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const menuSection = document.getElementById("menu");
  menuSection.style.transform = "translateY(100px)";
  menuSection.style.opacity = "0.3";

  animateOnScroll();
});

// 페이지 로드 시 초기 상태 설정
document.addEventListener("DOMContentLoaded", () => {
  const menuSection = document.getElementById("menu");
  menuSection.style.transform = "translateY(100px)";
  menuSection.style.opacity = "0.3";
});
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("myButton");

  if (btn) {
    btn.addEventListener("click", function () {
      // active 클래스가 있으면 제거하고, 없으면 추가
      btn.classList.toggle("active");
    });
  }
});
