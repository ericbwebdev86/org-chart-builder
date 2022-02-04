//render manager data in bootstrap card
const buildManagerCard = function (manager) {
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
const buildEngineerCard = function (engineer) {
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
const buildInternCard = function (intern) {
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

pageBuilder = (data) => {
    teamCardArray = [];

    //iterate through array of employees
    for (let i = 0; i < data.length; i++) {
        let teamMember = data[i];
        let role = teamMember.getRole();

        //manager card
        if (role === 'Manager') {
            let mCard = buildManagerCard(teamMember);
            teamCardArray.push(mCard);
        }
        //engineer card
        if (role === 'Engineer') {
            let eCard = buildEngineerCard(teamMember);
            teamCardArray.push(eCard);
        }
        //intern card
        if (role === 'Engineer') {
            let iCard = buildInternCard(teamMember);
            teamCardArray.push(iCard);
        }
    }
    //join card arrays to single array 
    const cardDeck = teamCardArray.join('');
    const buildPage = HTMLtemplate(cardDeck);
    return buildPage;

}

//HTML template
const HTMLtemplate = function (cardDeck) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Org Chart Builder</title>
</head>

<body>
    <header class="bg-success text-dark">
        <h1 class="text-center pt-5 pb-5">Here's Your Team</h1>
    </header>
    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            
        <!-- cards below -->
        ${cardDeck}
        <!-- cards above -->

        </div>

    </div>

    <footer class="bg-dark text-success text-center pt-2 pb-2">&copy2022 Eric Bates</footer>
</body>

</html>`;
}

module.exports = pageBuilder;