window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";
  }
});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
});

cards.forEach((card)=>{
  card.style.opacity="0";
  card.style.transform="translateY(50px)";
  card.style.transition="all 0.8s ease";
  observer.observe(card);
});
