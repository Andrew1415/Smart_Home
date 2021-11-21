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