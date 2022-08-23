let data = [
    {
      id: 1,
      imageUrl: "images/morzine-france-landscape-4k-bj.jpg",
      title: "slide1",
    //   url: "https://google.com",
    },
    {
      id: 2,
      imageUrl: "images/ddd34c5d24ec20ba9e887c5007335ab7.jpeg",
      title: "slide2",
    //   url: "https://google.com",
    },
    {
      id: 3,
      imageUrl:
        "images/HD-landscape-Photographs.png",
      title: "slide3",
    //   url: "https://google.com",
    },
    {
      id: 4,
      imageUrl: "images/pfmKVKT.jpg",
      title: "slide4",
    //   url: "https://google.com",
    },
  ];
  
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const sliderConetnt = document.getElementById("slider-content");
  const dotBurtuli = document.getElementsByClassName("dot");
  
  let sliderIndex = 0;
  
  function createAtag(item) {
    const tag = document.createElement("a");
    tag.setAttribute("href", item.url);
    tag.classList.add("slide");
  
    return tag;
  }
  
  function createImgtag(item) {
    const tagImage = document.createElement("img");
    tagImage.setAttribute("src", item.imageUrl);
    tagImage.setAttribute("alt", item.title);
  
    return tagImage;
  }
  
  function createH2ag(item) {
    const tagTitle = document.createElement("h2");
    tagTitle.textContent = item.title;
    // tagTitle.innerText
    // tagTitle.append
    tagTitle.classList.add("slider-title");
  
    return tagTitle;
  }
  
  function createDots(item) {
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dotsParent");
  
    data.forEach((element) => {
      const dotChild = document.createElement("div");
      dotChild.classList.add("dot");
      dotChild.setAttribute("data-id", element.id - 1);
  
      dotChild.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");
        sliderIndex = id;
        setSlide();
      });
  
      dotsParent.appendChild(dotChild);
    });
  
    return dotsParent;
  }
  function cuurentDotactive() {
    dotBurtuli[sliderIndex].classList.add("active");
  }
  
  function setSlide() {
    sliderConetnt.innerHTML = "";
    const slideItem = createAtag(data[sliderIndex]);
    const h2Tag = createH2ag(data[sliderIndex]);
    const imgTag = createImgtag(data[sliderIndex]);
    const dots = createDots();
  
    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);
    sliderConetnt.appendChild(slideItem);
    sliderConetnt.appendChild(dots);
  
    cuurentDotactive();
    console.log(slideItem);
  }
  
  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = data.length - 1;
      setSlide();
      return;
    }
    sliderIndex--;
    // sliderIndex -= 1;
    setSlide();
  }
  function arrowRIghtClick() {
    if (sliderIndex == data.length - 1) {
      sliderIndex = 0;
      setSlide();
      return;
    }
    sliderIndex++;
    // sliderIndex += 1;
    setSlide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRIghtClick);
  setInterval(() => {
    arrowRIghtClick();
  }, 5000);
  
  setSlide();




//   var i = 0;
// var images = [];
// var slideTime = 3000; // 3 seconds

// images[0] = 'https://via.placeholder.com/150/300AAA';
// images[1] = 'https://via.placeholder.com/150/000300';
// images[2] = 'https://via.placeholder.com/150/AAA300';

// function changePicture() {
//     document.body.style.backgroundImage = "url(" + images[i] + ")";

//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout(changePicture, slideTime);
// }

// window.onload = changePicture;