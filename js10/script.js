let mainPostWrapper = document.getElementById("post-wraper");
let overlay = document.getElementById("overlay");
let content = document.getElementById("content");
let close = document.getElementById("close");
let addButton = document.getElementById("add");
let postOverlay = document.getElementById("postoverlay");
let form = document.getElementById("form");

function ajax(url, callback) {
  let requist = new XMLHttpRequest();
  requist.open("GET", url);
  requist.addEventListener("load", function () {

    let data = JSON.parse(requist.responseText);
    callback(data);
  });

  requist.send();
}

ajax("https://jsonplaceholder.typicode.com/posts", function (data) {
  data.forEach((element) => {
    createPost(element);
  });
});

function createPost(data) {
  let divWrapper = document.createElement("div");
  divWrapper.classList.add("posts");
  divWrapper.setAttribute("data-id", data.id);

  let h3Tag = document.createElement("h3");
  h3Tag.innerText = data.id;
  h3Tag.classList.add("post-id");

  let h2Tag = document.createElement("h2");
  h2Tag.innerText = data.title;

  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("data-id", data.id);
  deleteButton.innerText = "Delete Post";

  divWrapper.appendChild(h3Tag);
  divWrapper.appendChild(h2Tag);
  divWrapper.appendChild(deleteButton);

  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    let id = event.target.getAttribute("data-id");

    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then(() => divWrapper.remove());
  });

  divWrapper.addEventListener("click", function (event) {
    let id = event.target.getAttribute("data-id");

    overlay.classList.add("active");
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(url, function (data) {
      overlayFunction(data);
    });
  });

  mainPostWrapper.appendChild(divWrapper);
  console.log(divWrapper);
}

addButton.addEventListener("click", function () {
  postOverlay.classList.add("active");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = {
    title: event.target[0].value,
    body: event.target[1].value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      postOverlay.classList.remove("active");
    });

});

function openOverlay(id) {
  overlay.classList.add("active");
  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  ajax(url, function (data) {
    overlayFunction(data);
  });
  console.log(id);
}

function overlayFunction(data) {
  let description = document.createElement("p");
  description.textContent = data.body;
  description.classList.add("descr");

  content.appendChild(description);
}

close.addEventListener("click", function () {
  overlay.classList.remove("active");
  content.innerHTML = "";
});