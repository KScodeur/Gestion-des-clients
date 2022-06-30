function affichedate(){
    let thisday =new Date();
    let format={weekday:"long", year:"numeric", month:"long", day:"2-digit"}
        let date = thisday.toLocaleDateString("fr",format)
        let heure =("0" + thisday.getHours()).slice(-2) + "h" +("0" + thisday.getMinutes()).slice(-2) +":"+("0" + thisday.getSeconds()).slice(-2)+"s"; 
        let dateheure =`${date} / ${heure}`
        // let dateheure =date + heure
        document.getElementById('fullhours').innerHTML= dateheure
 }
setInterval(affichedate,1000);








// let fullHours = document.getElementById('fullhours');
 
// function automaticHours()
// {
//     window.setTimeout('automaticHours()', 20000);
//     let date = new Date();
 
//     let todayDate =date.getDate()
//     todayDate=((todayDate < 10) ? '0' : '') + todayDate;
    
//     let month=(date.getMonth()+1);
//     month=((month < 10) ? '0' : '') + month;
    
//     let heure = date.getHours();
//     heure = ((heure < 10) ? '0' : '') + heure;

//     let minutes = date.getMinutes();
//     minutes = ((minutes < 10) ? '0' : '') + minutes;

//     let second = date.getSeconds();
//     second = ((second < 10) ? '0' : '') + second;

//     let fullDate= todayDate+'-'+month + '-'+ date.getFullYear()+' ';
//     fullHours.innerHTML = fullDate+' /  '+ heure + ' h ' + minutes + ':'+ second;

// }
// setInterval(automaticHours,1000);
// let fullHours = document.getElementById('fullhours');

// today= document.getElementById('myDate').value
// function SetDate()
// {
// let date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// if (month < 10) month = "0" + month;
// if (day < 10) day = "0" + day;

// today = year + "-" + month + "-" + day;


// document.getElementById('myDate').value = today;
// }
// SetDate()

/* <body onload="SetDate();">  */

