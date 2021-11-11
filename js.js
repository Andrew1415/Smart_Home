function showMenu(menuId)  {
    //hide all the menues
    document.getElementById('menu1').style.display="none";
    document.getElementById('menu2').style.display="none";
    document.getElementById('menu3').style.display="none";
    document.getElementById('menu4').style.display="none";
    document.getElementById('menu5').style.display="none";
    document.getElementById('menu6').style.display="none";
    document.getElementById('menu7').style.display="none";
    document.getElementById('menu8').style.display="none";
    document.getElementById('menu9').style.display="none";
    document.getElementById('menu10').style.display="none";
    //display the menu for this area of the image
    document.getElementById(menuId).style.display="block";
    }
function hideMenu(menuId){
    document.getElementById('menu1').style.display="none";
    document.getElementById('menu2').style.display="none";
    document.getElementById('menu3').style.display="none";
    document.getElementById('menu4').style.display="none";
    document.getElementById('menu5').style.display="none";
    document.getElementById('menu6').style.display="none";
    document.getElementById('menu7').style.display="none";
    document.getElementById('menu8').style.display="none";
    document.getElementById('menu9').style.display="none";
    document.getElementById('menu10').style.display="block";
}

function saveEdits() {

    //get the editable element
    var editElem = document.getElementById("edit");
    
    //get the edited element content
    var userVersion = editElem.innerHTML;
    
    //save the content to local storage
    localStorage.userEdits = userVersion;
    
    //write a confirmation to the user
    document.getElementById("update").innerHTML="Edits saved!";
    
    }