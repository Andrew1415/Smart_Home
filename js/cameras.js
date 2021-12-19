var cameras=["#kitchen_camera_2","#corridor_camera_2","#bedroom_camera_2","#office_camera_2","#kitchen_camera","#corridor_camera","#bedroom_camera","#office_camera","-n"];
var camera_names=["Kitchen camera","Corridor camera","Bedroom camera","Office camera","Kitchen camera","Corridor camera","Bedroom camera","Office camera","-n"];
let b=0;
while (cameras[b] !== "-n")
{
    $(cameras[b]).append( '<div class="card card_element"> <div class="card-header"> '+camera_names[b]+' </div> <div class="card-body"> Place for the camera </div> </div>' );
    b++;
};