var elements=["front_lock_placeholder","bedroom_lock_placeholder","bedroom_light_1","bedroom_light_2","office_light_1","office_light_2","kitchen_light_1","kitchen_light_2","bathroom_light","corridor_light_1","corridor_light_2","bedroom_blinds","office_blinds","kitchen_blinds","kitchen_blinds_2","kitchen_light_11","kitchen_light_22","bathroom_light_2","front_lock_2","corridor_light_11","corridor_light_22","bedroom_lock_2","bedroom_blinds_2","bedroom_light_11","bedroom_light_22","office_blinds_2","office_light_11","office_light_22","-n"];
var elements_id=["#front_lock_placeholder","#bedroom_lock_placeholder","#bedroom_light_1","#bedroom_light_2","#office_light_1","#office_light_2","#kitchen_light_1","#kitchen_light_2","#bathroom_light","#corridor_light_1","#corridor_light_2","#bedroom_blinds","#office_blinds","#kitchen_blinds","#kitchen_blinds_2","#kitchen_light_11","#kitchen_light_22","#bathroom_light_2","#front_lock_2","#corridor_light_11","#corridor_light_22","#bedroom_lock_2","#bedroom_blinds_2","#bedroom_light_11","#bedroom_light_22","#office_blinds_2","#office_light_11","#office_light_22","-n"];
var positive=["lock","lock","on","on","on","on","on","on","on","on","on","open","open","open","open", "on", "on",  "on", "lock", "on", "on", "lock", "open", "on", "on", "open", "on", "on","-n"];
var negative=["unlock","unlock","off","off","off","off","off","off","off","off","off","close","close","close","close", "off", "off", "off", "unlock", "off", "off", "unlock", "close", "close", "off", "off", "close", "off", "off","-n"];
var elements_names=["Front lock", "Bedroom lock", "Bedroom main light","Bedroom ambient light","Office main light","Office ambient light","Kitchen main light","Kitchen ambient light","Bathroom light","Corridor main light","Corridor ambient light", "Bedroom blinds","Office blinds","Kitchen blinds","Kitchen blinds","Kitchen main light","Kitchen ambient light","Bathroom light","Front lock","Corridor main light","Corridor ambient light","Bedroom lock","Bedroom blinds","Bedroom main light","Bedroom ambient light","Office blinds","Office main light","Office ambient light","-n"];
let i = 0;
while (elements[i] !== "-n")
{
    $(elements_id[i]).append( '<div class="card card_element"><div class="card-header">'+elements_names[i]+'</div><div class="card-body"><div class="btn-group" role="group"><input type="radio" class="btn-check" name="'+elements[i]+'" id="'+elements[i]+'_positive" autocomplete="off" checked><label class="btn btn-outline-success" for="'+elements[i]+'_positive">'+positive[i]+'</label><input type="radio" class="btn-check" name="'+elements[i]+'" id="'+elements[i]+'_'+negative[i]+'" autocomplete="off"><label class="btn btn-outline-danger" for="'+elements[i]+'_'+negative[i]+'">'+negative[i]+'</label></div></div></div>' );
    i++;
}; 




