const generateHTML = (answersArr) => {
  let newCard = "";
  let employeeCard = [];
  for (let i = 1; i < answersArr.length; i++) {
    switch (answersArr[i].getRole()) {
      case "Engineer":
        newCard += `
  <!-- Engineer card -->
        <div class="card" style="width: 18rem;">
        <div class="card-body">
         <h3 class="card-title text-center" id="name">${answersArr[i].name}</h3>
         <h5 id="role" class="text-center bg-light text-wrap rounded-pill"><i class="fas fa-user-ninja"></i> ${answersArr[
        i
      ].getRole()}</h5>
    </div>
         <ul class="list-group list-group-flush">
         <li class="list-group-item" id="id">ID: ${answersArr[i].id}</li>
         <li class="list-group-item" id="email"><a href="mailto:${
        answersArr[i].email
      }">Email: ${answersArr[i].email}</a></li>
         <li class="list-group-item" id="github"><a href="https://github.com/${
        answersArr[i].github
      }" target="_blank">Github: ${answersArr[i].github}</a></li>
       </ul>
    </div>`;

        employeeCard.push(newCard);
        break;

      case "Intern":
        newCard += `   
  <!-- Intern card -->
       <div class="card" style="width: 18rem;">
       <div class="card-body">
        <h3 class="card-title text-center" id="name">${answersArr[i].name}</h3>
        <h5 id="role" class="text-center bg-light text-wrap rounded-pill"><i class="fas fa-user-graduate"></i> ${answersArr[
        i
      ].getRole()}</h5>
       </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id">ID: ${answersArr[i].id}</li>
        <li class="list-group-item" id="email"><a href="mailto:${
        answersArr[i].email
      }">Email: ${answersArr[i].email}</a></li>
    <li class="list-group-item" id="school">School: ${
        answersArr[i].school
      }</li>
    </ul>
  </div>`;

        employeeCard.push(newCard);
        break;
    }
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
      rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css" />
      <script src="https://kit.fontawesome.com/3ff242710e.js" crossorigin="anonymous"></script>
      <title>Team Workforce</title>
    </head>
    <body>
      
    <!-- jumbotron -->
       <div  class="text-center jumbotron jumbotron-fluid">
        <div class="container">
         <h1 class="display-1 border border-light rounded-pill shadow p-3 mb-5 bg-body rounded" >Team Workforce</h1>
      </div>
      </div>
      <!-- card container -->
        <div class="container" id="card-container">
        <div class="row">
        <div class="card-area col-12 d-flex justify-content-center mt-5">
  <!-- Manager card -->
 <div class="card text shadow-lg  bg-body rounded" style="width: 18rem;">
        <div class="card-body">
         <h3 class="card-title text-center" id="name">${answersArr[0].name}</h3>
         <h5 id="role" class="text-center bg-light text-wrap rounded-pill"><i class="fas fa-user-tie"></i> Manager</h5>
        </div>
         <ul class="list-group list-group-flush">
         <li class="list-group-item" id="id">ID: ${answersArr[0].id}</li>
         <li class="list-group-item" id="email"><a href="mailto:${answersArr[0].email}">Email: ${answersArr[0].email}</a></li>
         <li class="list-group-item" id="officeNum">Office number: ${answersArr[0].officeNumber}</li>
         </ul>
        </div>
  ${newCard}
         </div>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = generateHTML;
