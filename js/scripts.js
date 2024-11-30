$(document).ready(function(){
  
    let ETime = {
        centi: 0, sec: 0, min: 0
    }
    let LTime = {
        centi: 0, sec: 0, min: 0
    }
    let totalE = 0, totalL = 0;
    let Interval;
    let count = 0;
    let template;
    function Lapnotification(message, duration = 3000){
        $notification = $("#notification");
        $notification.text(message).fadeIn();
        setTimeout(() => {
            $notification.fadeOut()
        },duration);
    }
    $(".lap-button button").addClass("opah");
    $(".start").click(function(){
        if($(this).text() === "Start"|| $(this).text() === "Resume"){
            if(count < 6){
                $(".lap-button button").removeClass("opah");
            }
            else{
                $(".lap-button button").removeClass("opa1");
                $(".lap-button button").addClass("opah");
            }
            $(this).text("Stop");
            $(this).addClass("stop-button");
            $(this).removeClass("start-button");
            $(".lap-button button").text("Lap");

            clearInterval(Interval);

            Interval = setInterval(() => {
                ETime.centi++;
                if(ETime.centi > 99){
                    ETime.centi = 0;
                    ETime.sec++
                }
                if(ETime.sec > 59){
                    ETime.sec = 0;
                    ETime.min++;
                }
                $(".s6").text(ETime.centi.toString().padStart(2,'0'));
                $(".s4").text(ETime.sec.toString().padStart(2,'0'));
                $(".s2").text(ETime.min.toString().padStart(2,'0'));
                
            },10);
        }
        else if($(this).text() === "Stop"){
            $(this).text("Resume");
            $(this).addClass("start-button");
            $(this).removeClass("stop-button");
            $(".lap-button button").text("Reset");
            if(count <= 6 && $(".lap-button button").text() === "Reset"){
                $(".lap-button button").removeClass("opah");
                $(".lap-button button").addClass("opa1");
            }
            clearInterval(Interval);
        }
    })
    $(".lap").click(function(){
        if($(".start").text() !="Start" && $(this).text() === "Lap"){
            $(".score").css("cssText","display: block !important;")
            count++;
            if(count < 7){
                totalE = (ETime.min*6000) + (ETime.sec*100) + ETime.centi;
                totalL = totalE - totalL;
                LTime.min = Math.floor(totalL/6000);
                remainingsecond = totalL%6000;
                LTime.sec = Math.floor(remainingsecond/100);
                LTime.centi = remainingsecond % 100;
                $(".score").append(`<ul>
                    <li>${count.toString().padStart(2,'0')}</li>
                    <li>${LTime.min.toString().padStart(2,'0')}:${LTime.sec.toString().padStart(2,'0')}.${LTime.centi.toString().padStart(2,'0')}</li>
                    <li>${ETime.min.toString().padStart(2,'0')}:${ETime.sec.toString().padStart(2,'0')}.${ETime.centi.toString().padStart(2,'0')}</li>`)
                totalL = totalE;
                $(".score ul").addClass("lap-start");
                $(".score ul li").addClass("lap-list");

            }
            if(count==6){
                $(".lap-button button").removeClass("opa1");
                $(".lap-button button").addClass("opah")
                Lapnotification("Reached the maximum amount of lap")
            }
        }
        else if($(this).text() === "Reset"){
            $(".lap-button button").text("Lap");
            $(".lap-button button").removeClass("opa1");
            $(".lap-button button").addClass("opah");
            $(".start").text("Start");
            $(".s6").text("00");
            $(".s4").text("00");
            $(".s2").text("00");
            $(".score").css("cssText","display: none !important;")
            ETime = {centi:0, sec: 0, min: 0};
            LTime = {centi:0 , sec: 0, min: 0};
            count = 0;
            template = $(".score").find(".lap-title");
            $(".score").empty();
            $(".score").append(template);
            $(".lap-title").addClass("lap-start");
            $(".score ul li").addClass("lap-list");
            $(".score").append("<hr/>");
        }
    })
})