function selectElement(){
    let checkbox = tbody.getElementsByClassName('checkbox');
    let toRemove =[]
     Array.from(checkbox).forEach((inputCheckbox) => {
         if(inputCheckbox.checked){
             toRemove.push(parseInt(inputCheckbox.getAttribute('user-id')));
         }
     });
     let users = getUsersFromStorage();
     let keepUsers = users.filter((user) => {
        return toRemove.indexOf(user.id)< 0 ;
     });
     localStorage.setItem('USERS', JSON.stringify(keepUsers))

     tbody.innerHTML='';
    keepUsers.forEach((user) => injectIntoDom(user));
}