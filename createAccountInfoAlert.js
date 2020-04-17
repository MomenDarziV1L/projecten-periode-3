function AccountInfoAlert( ){
    // Select the input id and get its value 
    var  accountRoepname = document.getElementById("roepnaam").value;
    var  accountAchternaam = document.getElementById("achternaam").value;
    var  accountEmail = document.getElementById("email").value;
    var  accountPassword = document.getElementById("password").value;
    var  accountPhone = document.getElementById("phone").value;
    var  accountGender = document.getElementById("gender").value;

    // Display the values
    alert(accountRoepname + ", " + accountAchternaam + ", " + accountEmail + ", " + accountPassword + ", " + accountPhone + ", " + accountGender);
}
