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

function myAlert(alert){
  document.getElementById('alert').style.display="block";
  switch (alert){
    //var delayInMilliseconds = 5000;
    case 0: document.getElementById("alert").innerHTML = ''; break;
    case 1: document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert"><p><img src="icons/lock-closed.svg" style="width:20px;">Front door has been locked</p></div>'; var delayInMilliseconds = 5000; break;
    case 2: document.getElementById("alert").innerHTML = '<div class="alert alert-danger" role="alert"><p><img src="icons/lock-open.svg" style="width:20px;">Front door has been unlocked</p></div>';var delayInMilliseconds = 5000;  break;
  }
//document.getElementById("content").innerHTML = '';
 //5 second

setTimeout(function() {
  document.getElementById("alert").innerHTML = "";
  document.getElementById('alert').style.display="none";
}, delayInMilliseconds);
}
