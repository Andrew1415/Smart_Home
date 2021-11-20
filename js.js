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
/*
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var toastTrigger_front_door_lock = document.getElementById('front_lock')
var toastTrigger_front_door_unlock = document.getElementById('front_unlock')
var toastLive_front_door_lock = document.getElementById('liveToast1')
var toastLive_front_door_unlock = document.getElementById('liveToast2')
if (toastTrigger_front_door_lock) {
  toastTrigger_front_door_lock.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLive_front_door_lock)

    toast.show()
  })
}
if (toastTrigger_front_door_unlock) {
  toastTrigger_front_door_unlock.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLive_front_door_unlock)

    toast.show()
  })
}
*/

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

var alertTrigger = document.getElementById('front_lock')
if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'success')
  })
}