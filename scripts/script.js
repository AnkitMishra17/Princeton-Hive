async function loadData() {
    const URL = `./scripts/data.json`;
    const fetchResult = fetch(URL)
    const response = await fetchResult;
    const jsonData = await response.json();
    const users = document.getElementById('users');
    const person = (name, username, email, address, phone, website, company) => `
        <div class="col-md-4">
            <div class="jumbotron  box">
                <h4 class="display-5">Name: ${name}</h4>
                <p>Username: <span class="lead">${username}</span></p>
                <p>Phone: <span class="lead">${phone} </span></p>
                <p>E-mail: <span class="lead">${email} </span></p>
                <p>Company: <span class="lead">${company.name}</span></p>
                <blockquote class="blockquote">
                    <p class="mb-0">${company.catchPhrase}</p>
                    <footer class="blockquote-footer">${company.name}</footer>
                </blockquote>
                <hr class="my-4">
                <p>Address: <span class="lead">${address.street}, ${address.suite}, ${address.city}</span></p>
                <p>Website: <span class="lead">${website}</span></p>
            </div>
        </div>
`;
    let output = "";
    jsonData.map(item => {
        output += person(item.name,item.username,item.email,item.address,item.phone,item.website,item.company)
    });
    users.innerHTML = output;
}

loadData();