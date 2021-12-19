$("#front_lock_placeholder_positive, #front_lock_2_positive").click(function(){
    $("#alert").append(function(){
        return " <div id='front_lock_alert'><div class='alert alert-success' >The door has been locked</div></div>";
    });
    setTimeout(function(){
        $("#front_lock_alert").remove();
    }, 2000);

})
$("#front_lock_placeholder_unlock, #front_lock_2_unlock").click(function(){
    $("#alert").append(function(){
        return "<div id='front_unlock_alert'><div class='alert alert-danger' >The door has been unlocked</div></div>";
    });
    setTimeout(function(){
        $("#front_unlock_alert").remove();
    }, 2000);

})
$("#bedroom_lock_placeholder_positive, #bedroom_lock_2_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='M_Bedroom_Lock_alert'><div class='alert alert-success' > Bedroom door has been locked successfully </div></div>";
    });
    setTimeout(function(){
        $("#M_Bedroom_Lock_alert").remove();
    }, 2000);

})
$("#bedroom_lock_placeholder_unlock, #bedroom_lock_2_unlock").click(function(){
    $("#alert").append(function(){
        return "<div id='M_Bedroom_unLock_alert'><div class='alert alert-danger' > Bedroom door has been unlocked! </div></div>";
    });
    setTimeout(function(){
        $("#M_Bedroom_unLock_alert").remove();
    }, 2000);

})
$("#bedroom_blinds_positive, #bedroom_blinds_2_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_blinds_Open_Alert'><div class='alert alert-success' > Bedroom blinds are being opened. </div></div>";
    });
    setTimeout(function(){
        $("#Master_blinds_Open_Alert").remove();
    }, 2000);

})
$("#bedroom_blinds_close, #bedroom_blinds_2_close").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_blinds_Closed_Alert'><div class='alert alert-danger' > Bedroom blinds are being closed. </div></div>";
    });
    setTimeout(function(){
        $("#Master_blinds_Closed_Alert").remove();
    }, 2000);

})
$("#office_blinds_positive, #office_blinds_2_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Office_blinds_Open_Alert'><div class='alert alert-success' > Office blinds are being opened. </div></div>";
    });
    setTimeout(function(){
        $("#Office_blinds_Open_Alert").remove();
    }, 2000);

})
$("#office_blinds_close, #office_blinds_2_close").click(function(){
    $("#alert").append(function(){
        return "<div id='Office_blinds_Closed_Alerts'><div class='alert alert-danger' > Office blinds are being closed. </div></div>";
    });
    setTimeout(function(){
        $("#Office_blinds_Closed_Alerts").remove();
    }, 2000);

})
$("#kitchen_blinds_positive, #kitchen_blinds_2_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_blinds_Open_Alerts'><div class='alert alert-success' > Kitchen blinds are being opened. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_blinds_Open_Alerts").remove();
    }, 2000);

})
$("#kitchen_blinds_close, #kitchen_blinds_2_close").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_blinds_Closed_Alerts'><div class='alert alert-danger' > Kitchen blinds are being closed. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_blinds_Closed_Alerts").remove();
    }, 2000);

})
$("#bathroom_shower_on, #bathroom_shower_2_on").click(function(){
    $("#alert").append(function(){
        return "<div id='Shower_on_Alerts'><div class='alert alert-success' > The shower has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Shower_on_Alerts").remove();
    }, 2000);

})
$("#bathroom_shower_off, #bathroom_shower_2_off").click(function(){
    $("#alert").append(function(){
        return "<div id='Shower_off_Alerts'><div class='alert alert-danger' > The shower has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Shower_off_Alerts").remove();
    }, 2000);

})
$("#bathroom_sink_off, #bathroom_sink_2_off").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomSink_OFF_Alerts'><div class='alert alert-danger' > Bathroom sink tap has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomSink_OFF_Alerts").remove();
    }, 2000);

})
$("#bathroom_sink_on, #bathroom_sink_2_on").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomSink_ON_Alerts'><div class='alert alert-success' > Bathroom sink tap has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomSink_ON_Alerts").remove();
    }, 2000);

})
$("#kitchen_sink_on, #kitchen_sink_2_on").click(function(){
    $("#alert").append(function(){
        return "<div id='KitchenSink_ON_Alerts'><div class='alert alert-success' > Kitchen sink tap has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#KitchenSink_ON_Alerts").remove();
    }, 2000);

})
$("#kitchen_sink_off, #kitchen_sink_2_off").click(function(){
    $("#alert").append(function(){
        return "<div id='KitchenSink_OFF_Alerts'><div class='alert alert-danger' > Kitchen sink tap has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#KitchenSink_OFF_Alerts").remove();
    }, 2000);

})
$("#bedroom_light_1_positive, #bedroom_light_11_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Main_Light_ON_Alert'><div class='alert alert-success' > Bedroom main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Main_Light_ON_Alert").remove();
    }, 2000);

})
$("#bedroom_light_11_off, #bedroom_light_1_off").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Main_Light_OFF_Alert'><div class='alert alert-danger' > Bedroom main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Main_Light_OFF_Alert").remove();
    }, 2000);

})
$("#bedroom_light_2_positive, #bedroom_light_22_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Ambient_Light_ON_Alert'><div class='alert alert-success' > Bedroom ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Ambient_Light_ON_Alert").remove();
    }, 2000);

})
$("#bedroom_light_2_off, #bedroom_light_22_off").click(function(){
    $("#alert").append(function(){
        return "<div id='Master_Bedroom_Ambient_Light_OFF_Alert'><div class='alert alert-danger' > Bedroom ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Master_Bedroom_Ambient_Light_OFF_Alert").remove();
    }, 2000);

})
$("#office_light_1_positive,#office_light_11_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Main_Light_System_on_Alert'><div class='alert alert-success' > Office main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#office_Main_Light_System_on_Alert").remove();
    }, 2000);

})
$("#office_light_1_off ,#office_light_11_off").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Main_Light_System_off_Alert'><div class='alert alert-danger' > Office main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#office_Main_Light_System_off_Alert").remove();
    }, 2000);

})
$("#office_light_2_positive,#office_light_22_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Ambient_Light_System_on_Alert'><div class='alert alert-success' > Office ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#office_Ambient_Light_System_on_Alert").remove();
    }, 2000);

})
$("#office_light_2_off,#office_light_22_off").click(function(){
    $("#alert").append(function(){
        return "<div id='office_Ambient_Light_System_off_Alert'><div class='alert alert-danger' > Office ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#office_Ambient_Light_System_off_Alert").remove();
    }, 2000);

})
$("#kitchen_light_1_positive, #kitchen_light_11_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Main_Light2_ON_Alert'><div class='alert alert-success' > Kitchen main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Main_Light2_ON_Alert").remove();
    }, 2000);

})
$("#kitchen_light_1_off, #kitchen_light_11_off").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Main_Light2_OFF_Alert'><div class='alert alert-danger' > Kitchen main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Main_Light2_OFF_Alert").remove();
    }, 2000);

})
$("#kitchen_light_2_positive, #kitchen_light_22_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Ambient_Light2_ON_Alert'><div class='alert alert-success' > Kitchen ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Ambient_Light2_ON_Alert").remove();
    }, 2000);

})
$("#kitchen_light_2_off, #kitchen_light_22_off").click(function(){
    $("#alert").append(function(){
        return "<div id='Kitchen_Ambient_Light2_OFF_Alert'><div class='alert alert-danger' > Kitchen ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Kitchen_Ambient_Light2_OFF_Alert").remove();
    }, 2000);

})
$("#bathroom_light_positive, #bathroom_light_2_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomLight_ON_Alert'><div class='alert alert-success' > Bathroom light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomLight_ON_Alert").remove();
    }, 2000);

})
$("#bathroom_light_off, #bathroom_light_2_off").click(function(){
    $("#alert").append(function(){
        return "<div id='BathroomLight_OFF_Alert'><div class='alert alert-danger' > Bathroom light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#BathroomLight_OFF_Alert").remove();
    }, 2000);

})
$("#corridor_light_1_positive, #corridor_light_11_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_main2_on_Alert'><div class='alert alert-success' > Corridor main light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_main2_on_Alert").remove();
    }, 2000);

})
$("#corridor_light_1_off, #corridor_light_11_off").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_main2_off_Alert'><div class='alert alert-danger' > Corridor main light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_main2_off_Alert").remove();
    }, 2000);

})
$("#corridor_light_2_positive, #corridor_light_22_positive").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_Ambient2_on_Alert'><div class='alert alert-success' > Corridor ambient light has been turned on. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_Ambient2_on_Alert").remove();
    }, 2000);

})
$("#corridor_light_2_off, #corridor_light_22_off").click(function(){
    $("#alert").append(function(){
        return "<div id='Corridor_light_Ambient2_off_Alert'><div class='alert alert-danger' > Corridor ambient light has been turned off. </div></div>";
    });
    setTimeout(function(){
        $("#Corridor_light_Ambient2_off_Alert").remove();
    }, 2000);

})
