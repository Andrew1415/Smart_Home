$("#front_lock , #Front_door_lock").click(function(){
    $("#alert").append(function(){
        return " <div id='front_lock_alert'><div class='alert alert-success' >The door has been locked</div></div>";
    });
    setTimeout(function(){
        $("#front_lock_alert").remove();
    }, 5000);

})
$("#front_unlock , #Front_door_unLock").click(function(){
    $("#alert").append(function(){
        return "<div id='front_unlock_alert'><div class='alert alert-danger' >The door has been unlocked</div></div>";
    });
    setTimeout(function(){
        $("#front_unlock_alert").remove();
    }, 5000);

})
$("#M_Bedroom_Lock, #M_Bedroom_Lock2").click(function(){
    $("#alert").append(function(){
        return "<div id='M_Bedroom_Lock_alert'><div class='alert alert-success' > Bedroom door has been locked successfully </div></div>";
    });
    setTimeout(function(){
        $("#M_Bedroom_Lock_alert").remove();
    }, 5000);

})
$("#M_Bedroom_unLock, #M_Bedroom_unLock2").click(function(){
    $("#alert").append(function(){
        return "<div id='M_Bedroom_unLock_alert'><div class='alert alert-danger' > Bedroom door has been unlocked! </div></div>";
    });
    setTimeout(function(){
        $("#M_Bedroom_unLock_alert").remove();
    }, 5000);

})
$("#Master_blinds_Open, #Master_blinds2_Open").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_blinds_Open_Alert'><div class='alert alert-Success' > Bedroom blinds are being opened. </div></div>";
    });
    setTimeout(function(){
        $("#Master_blinds_Open_Alert").remove();
    }, 5000);

})
$("#Master_blinds_Closed, #Master_blinds2_Closed").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_blinds_Closed_Alert'><div class='alert alert-success' > Bedroom blinds are being closed. </div></div>";
    });
    setTimeout(function(){
        $("#Master_blinds_Closed_Alert").remove();
    }, 5000);

})
$("#Office_blinds_Open, #Office_blinds2_Open").click(function(){
    $("#alert").append(function(){
        return "<div id='Office_blinds_Open_Alert'><div class='alert alert-Success' > Office blinds are being opened. </div></div>";
    });
    setTimeout(function(){
        $("#Office_blinds_Open_Alert").remove();
    }, 5000);

})
$("#Office_blinds_Closed, #Office_blinds2_Closed").click(function(){
    $("#alert").append(function(){
        return "<div id='Office_blinds_Closed_Alerts'><div class='alert alert-success' > Office blinds are being closed. </div></div>";
    });
    setTimeout(function(){
        $("#Office_blinds_Closed_Alerts").remove();
    }, 5000);

})
$("#Kitchen_blinds_Open, #Kitchen_blinds2_Open").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_blinds_Open_Alerts'><div class='alert alert-success' > Kitchen blinds are being opened. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_blinds_Open_Alerts").remove();
    }, 5000);

})
$("#Kitchen_blinds_Closed, #Kitchen_blinds2_Closed").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_blinds_Closed_Alerts'><div class='alert alert-success' > Kitchen blinds are being closed. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_blinds_Closed_Alerts").remove();
    }, 5000);

})
$("#Shower_on, #Shower2_on").click(function(){
    $("#alert").append(function(){
        return "<div id='Shower_on_Alerts'><div class='alert alert-success' > The shower has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Shower_on_Alerts").remove();
    }, 5000);

})
$("#Shower_off, #Shower2_off ").click(function(){
    $("#alert").append(function(){
        return "<div id='Shower_off_Alerts'><div class='alert alert-success' > The shower has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Shower_off_Alerts").remove();
    }, 5000);

})
$("#BathroomSink_OFF, #BathroomSink2_OFF").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomSink_OFF_Alerts'><div class='alert alert-success' > Bathroom sink tap has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomSink_OFF_Alerts").remove();
    }, 5000);

})
$("#BathroomSink_ON, #BathroomSink2_ON").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomSink_ON_Alerts'><div class='alert alert-success' > Bathroom sink tap has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomSink_ON_Alerts").remove();
    }, 5000);

})
$("#KitchenSink_ON, #KitchenSink2_ON").click(function(){
    $("#alert").append(function(){
        return "<div id='KitchenSink_ON_Alerts'><div class='alert alert-success' > Kitchen sink tap has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#KitchenSink_ON_Alerts").remove();
    }, 5000);

})
$("#KitchenSink_OFF, #KitchenSink2_OFF").click(function(){
    $("#alert").append(function(){
        return "<div id='KitchenSink_OFF_Alerts'><div class='alert alert-success' > Kitchen sink tap has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#KitchenSink_OFF_Alerts").remove();
    }, 5000);

})
$("#Master_Bedroom_Main_Light_ON, #Master_Bedroom_Main_Light2_ON").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Main_Light_ON_Alert'><div class='alert alert-success' > Bedroom main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Main_Light_ON_Alert").remove();
    }, 5000);

})
$("#Master_Bedroom_Main_Light_OFF, #Master_Bedroom_Main_Light2_OFF ").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Main_Light_OFF_Alert'><div class='alert alert-success' > Bedroom main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Main_Light_OFF_Alert").remove();
    }, 5000);

})
$("#Master_Bedroom_Ambient_Light_ON, #Master_Bedroom_Ambient_Light2_ON").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Ambient_Light_ON_Alert'><div class='alert alert-success' > Bedroom ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Ambient_Light_ON_Alert").remove();
    }, 5000);

})
$("#Master_Bedroom_Ambient_Light_OFF ,#Master_Bedroom_Ambient_Light2_OFF ").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Ambient_Light_OFF_Alert'><div class='alert alert-success' > Bedroom ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Ambient_Light_OFF_Alert").remove();
    }, 5000);

})
$("#office_Main_Light_System_on ,#office_Main_Light_on ").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Main_Light_System_on_Alert'><div class='alert alert-success' > Office main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#office_Main_Light_System_on_Alert").remove();
    }, 5000);

})
$("#office_Main_Light_System_off ,#office_Main_Light_on ").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Main_Light_System_off_Alert'><div class='alert alert-success' > Office main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#office_Main_Light_System_off_Alert").remove();
    }, 5000);

})
$("#office_Ambient_Light_System_on ,#office_Ambient_Light_on ").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Ambient_Light_System_on_Alert'><div class='alert alert-success' > Office ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#office_Ambient_Light_System_on_Alert").remove();
    }, 5000);

})
$("#office_Ambient_Light_System_off,#office_Ambient_Light_off").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Ambient_Light_System_off_Alert'><div class='alert alert-success' > Office ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#office_Ambient_Light_System_off_Alert").remove();
    }, 5000);

})
$("#Kitchen_Main_Light2_ON,#Kitchen_Main_Light_ON ").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Main_Light2_ON_Alert'><div class='alert alert-success' > Kitchen main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Main_Light2_ON_Alert").remove();
    }, 5000);

})
$("#Kitchen_Main_Light2_OFF ,#Kitchen_Main_Light_OFF ").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Main_Light2_OFF_Alert'><div class='alert alert-success' > Kitchen main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Main_Light2_OFF_Alert").remove();
    }, 5000);

})
$("#Kitchen_Ambient_Light2_ON ,#Kitchen_Ambient_Light_ON").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Ambient_Light2_ON_Alert'><div class='alert alert-success' > Kitchen ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Ambient_Light2_ON_Alert").remove();
    }, 5000);

})
$("#Kitchen_Ambient_Light2_OFF ,#Kitchen_Main_Light_OFF ").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Ambient_Light2_OFF_Alert'><div class='alert alert-success' > Kitchen ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Ambient_Light2_OFF_Alert").remove();
    }, 5000);

})
$("#BathroomLight_ON ,#BathroomLight2_ON ").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomLight_ON_Alert'><div class='alert alert-success' > Bathroom light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomLight_ON_Alert").remove();
    }, 5000);

})
$("#BathroomLight_OFF ,# ").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomLight_OFF_Alert'><div class='alert alert-success' > Bathroom light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomLight_OFF_Alert").remove();
    }, 5000);

})
$("#Corridor_light_main2_on ,#Corridor_light_main_on ").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_main2_on_Alert'><div class='alert alert-success' > Corridor main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_main2_on_Alert").remove();
    }, 5000);

})
$("#Corridor_light_main2_off ,#Corridor_light_main_off ").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_main2_off_Alert'><div class='alert alert-success' > Corridor main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_main2_off_Alert").remove();
    }, 5000);

})
$("#Corridor_light_Ambient2_on,#Corridor_light_Ambient_on ").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_Ambient2_on_Alert'><div class='alert alert-success' > Corridor ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_Ambient2_on_Alert").remove();
    }, 5000);

})
$("#Corridor_light_Ambient2_off ,#Corridor_light_Ambient_off ").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_Ambient2_off_Alert'><div class='alert alert-success' > Corridor ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_Ambient2_off_Alert").remove();
    }, 5000);

})
