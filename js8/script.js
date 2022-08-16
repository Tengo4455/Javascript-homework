let currentPage = 1;
let totalPages; 

function getUSers(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then(function(responseText) {
        if (responseText.status !== 200) {
            throw responseText.status;
        }
        return responseText.json();
    })
    .then(function(responseData) {
        console.log(responseData);

        
const fragment = document.createDocumentFragment();

    responseData.data.forEach(element => {
    let li = document.createElement('li');
    li.classList.add('info-item');


let span = document.createElement('span');    
        span.textContent = `${element.first_name} ${element.last_name} ${element.email} ${element.id}`;            
            


let img = document.createElement('img');
        img.src = element.avatar;
        img.classList.add('user-image');

    li.appendChild(img);
    li.appendChild(span);
            
    fragment.appendChild(li);

});

document.getElementById('info').innerHTML = ' ';
document.getElementById('info').appendChild(fragment);

totalPages = responseData.total_pages;


})

.catch(function(error) {
    if (error == 404) {
        let p = document.createElement('p');
        p.textContent = 'Page Not Found';
        p.style.color = 'yellow';
    
document.getElementById('apiUsers').appendChild(p);
} 
    else if (error == 500) {
        let p = document.createElement('p');
        p.textContent = 'Server Error';
        p.style.color = 'red';
    
document.getElementById('apiUsers').appendChild(p);
} 
else {
    console.log('error');
}})}

document.getElementById('prev').addEventListener('click', function() {
    if (currentPage == 1){
        return;
}

    currentPage -= 1;

getUSers(currentPage);
})

document.getElementById('next').addEventListener('click', function() {
    if (currentPage == totalPages) {
        return;
    }
    currentPage += 1;

    getUSers(currentPage);
})

getUSers(currentPage);