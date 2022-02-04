//render manager data in bootstrap card
const managerCard = function (manager) {
    return `
    <div class="card bg-dark text-light ms-5 me-5 mb-5 pb-2"
                style="width: 18rem; box-shadow: 0 8px 6px -6px black;">
                <div class="card-body">
                    <h4 class="card-title">${manager.name}</h4>
                    <h5 class="card-title">Manager</h5>
                </div>
                <div class="container-fluid bg-secondary pt-5 pb-5">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: ${manager.email}</li>
                        <li class="list-group-item">Office Number: ${manager.office}</li>
                    </ul>
                </div>
            </div>`;
}

//render engineer data in bootstrap card
const engineerCard = function (engineer) {
    return `
    <div class="card bg-dark text-light ms-5 me-5 mb-5 pb-2"
                style="width: 18rem; box-shadow: 0 8px 6px -6px black;">

                <div class="card-body">
                    <h5 class="card-title">${engineer.name}</h5>
                    <h5 class="card-title">Engineer</h5>
                </div>
                <div class="container-fluid bg-secondary pt-5 pb-5">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">GitHub Profile: https://github.com/${engineer.github}/</li>
                    </ul>
                </div>

            </div>`;
}
//render intern data in bootstrap card
const internCard = function (intern) {
    return `
    <div class="card bg-dark text-light ms-5 me-5 mb-5 pb-2"
                style="width: 18rem; box-shadow: 0 8px 6px -6px black;">
                <div class="card-body">
                    <h4 class="card-title">${intern.name}</h4>
                    <h5 class="card-title">Intern</h5>
                </div>
                <div class="container-fluid bg-secondary pt-5 pb-5">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: ${intern.email}</li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>`;
}