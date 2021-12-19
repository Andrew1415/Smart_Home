var ac=["#bedroom_ac","#office_ac","#kitchen_ac","#bathroom_ac","#bathroom_shower","#bathroom_sink","#kitchen_sink","#kitchen_ac_2","#kitchen_sink_2","#bathroom_ac_2","#bathroom_shower_2","#bathroom_sink_2","#bedroom_ac_2","#office_ac_2","-n"];
var ac_names=["Bedroom AC","Office AC","Kitchen AC","Bathroom AC","Bathroom shower","Bathroom sink","Kitchen sink","Kitchen AC","Kitchen sink","Bathroom AC","Bathroom shower","Bathroom sink","Bathroom AC","Office AC","-n"];
let n=0;
while (ac[n] !== "-n"){
    $(ac[n]).append('<div class="card card_element"> <div class="card-header"> '+ac_names[n]+' </div> <div class="card-body"> <div class="btn-group" role="group" aria-label="'+ac[n]+'"> <input type="radio" class="btn-check" name="'+ac[n]+'" id="'+ac[n]+'_on"  autocomplete="off"> <label class="btn btn-outline-success" for="'+ac[n]+'_on">ON</label> <input type="radio" class="btn-check" name="'+ac[n]+'" id="'+ac[n]+'_off" autocomplete="off" checked> <label class="btn btn-outline-danger" for="'+ac[n]+'_off">OFF</label> </div> <select class="form-select" aria-label="ShowerAC"> <option selected>Select the temperature</option> <option class="options"></option> </select> </div> </div>');
    n++;
};
for (var m=15; m<29; m++){
    $(".options").replaceWith('<option value="'+m+'">'+m+'&#8451</option><option class="options"></option>');
};


