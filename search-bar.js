function filter(event){
    let key =event.target.value;
    let users = getUsersFromStorage();
    let utilisateurFilter =users.filter((user) =>{
        return (new RegExp(key, 'i')).test(user.lastname)||(new RegExp(key, 'i')).test(user.firstname)
        ||(new RegExp(key, 'i')).test(user.email)
    })
    tbody.innerHTML='';
    utilisateurFilter.forEach((user) => injectIntoDom(user))
}