function UserFromServer() {
    let Info = new XMLHttpRequest();

    Info.addEventListener('load', function () {
        let request = this.responseText;
        let requestdata = JSON.parse(request)

        console.log(requestdata);

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = requestdata.data[2].first_name + ' ' + requestdata.data[2].last_name + ' ' +  requestdata.data[2].email + ' ' + requestdata.data[2].id;

        ul.appendChild(li)
        document.getElementById('info').appendChild(ul)

    })

    Info.open('GET', 'https://reqres.in/api/users?page=2');
    Info.send();
}

UserFromServer();