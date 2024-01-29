console.log("if you see this, let pingu know!");

let options = {
    threshold: 0.2,
};
  

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if (entry.isIntersecting) {
        entry.target.classList.add("show");
       }
    });
}, options);

function fishOneSpeak() {
    document.getElementById("fish1-text").style.opacity = 1;
    setTimeout(function(){
        document.getElementById("fish1-text").style.opacity = 0;
    }, 5000);
};

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1) => observer.observe(e1));