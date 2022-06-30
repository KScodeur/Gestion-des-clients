
// function sauvegarder(){
//     getInfoUser();
//     createLine();
// }

// function getInfoUser(){
//     nom=document.getElementById('nom').value;
//     prenom=document.getElementById('prenom').value;
//     dateDeNaissance=document.getElementById('DateDeNaissance').value;
//     phone=document.getElementById('phone').value;
//     email=document.getElementById('email').value;
// }

// function createLine(){
//    var table = document.getElementsByTagName('table')[0];
//     var line = table.insertRow(1);

//     var cel1 = line.insertCell(0)
//     var cel2 = line.insertCell(1)
//     var cel3 = line.insertCell(2)
//     var cel4 = line.insertCell(3)
//     var cel5 = line.insertCell(4)
//     var cel6 = line.insertCell(5)
//     var cel7 = line.insertCell(6)
//     var cel8 = line.insertCell(7)
//     var cel9 = line.insertCell(8)


//     cel3.innerHTML= document.getElementById('nom').value;
//     cel3.innerHTML= document.getElementById('nom').value;
//     cel3.innerHTML= document.getElementById('nom').value;
//     cel3.innerHTML= document.getElementById('nom').value;
//     cel3.innerHTML= document.getElementById('nom').value;
//     cel3.innerHTML= document.getElementById('nom').value;
//     cel3.innerHTML= document.getElementById('nom').value;
//     cel3.innerHTML= document.getElementById('nom').value;
//     console.log(table)
// }

let tbody=document.getElementById('users-container');
    let nbUser =0

function addUser(){
      nbUser++;
      let user = getUser();
      user.id = nbUser;
       injectIntoDom(user);

        saveUserLocalStorage(user) ;     
  }


  function injectIntoDom(user){
    tbody.innerHTML ='<tr>'
                        +'<td><input user-id="'+user.id+' " type="checkbox" class="checkbox"></td>'
                        +'<td>'+user.id+'</td>'
                        +'<td>'+user.lastname+'</td>'
                        +'<td>'+user.firstname+'</td>'
                        +'<td>'+user.birthday+'</td>'
                        +'<td>'+user.email+'</td>'
                        +'<td>'+user.phone+'</td>'
                        +'<td>'+user.sexe+'</td>'
                        +`<td><i class="fa-solid fa-pencil"></i>
                        <i class="fa-solid fa-eye"></i>
                        <i class="fa-solid fa-xmark"></i>
                        <i class="fa-solid fa-comment"></i></td>`+
                        '<tr>' + tbody.innerHTML;
  }



function saveUserLocalStorage(user){
    let users= getUsersFromStorage()

    users.push(user);

      localStorage.setItem('USERS', JSON.stringify(users))
  }

  function getUsersFromStorage(){
    let users = localStorage.getItem('USERS');
    try{
        users =users? JSON.parse(users): [];
    }
    catch(e){
        users=[];
    }
    return users;
}

function getUser(){
      return{
          lastname: document.getElementById('nom').value,
          firstname: document.getElementById('prenom').value,
          birthday: document.getElementById('DateDeNaissance').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          sexe: document.getElementById('sexe').value,
      }
  }

(function (){
    let users = getUsersFromStorage();
    users.forEach(function(user){
        nbUser =user.id> nbUser ? user.id : nbUser;
        injectIntoDom(user);
    });
}());