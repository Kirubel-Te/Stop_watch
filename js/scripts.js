$(document).ready(function(){
    let count=0,count1=0,count2=0,count3=0,count4=0,count5 = 0;
    let Interval,Interval1,Interval2,Interval3,Interval4,Interval5;
    $(".start").click(function(){
        if($(this).text() === "Start"|| $(this).text() === "Resume"){
            $(this).text("Stop");
            $(this).addClass("stop-button");
            $(this).removeClass("start-button");
            $(".lap-button button").css("cssText","opacity: 1 !important;");
            $(".lap-button button").text("Lap")

            clearInterval(Interval);
            clearInterval(Interval1);
            clearInterval(Interval2);
            clearInterval(Interval3);
            clearInterval(Interval4);
            clearInterval(Interval5);
            Interval = setInterval(() => {
                $(".s6").text(count);
                count++;
                if(count === 10){
                    count = 0;
                    
                }
            },10);
            Interval1 = setInterval(() => {
                $(".s5").text(count1);
                count1++;
                if(count1 === 10){
                    count1 = 0;
                }
            },100);
            Interval2 = setInterval(() => {
                $(".s4").text(count2);
                count2++;
                if(count2 === 10){
                    count2 = 0;
                    
                }
            },1000);
            Interval3 = setInterval(() => {
                $(".s3").text(count3);
                count3++;
                if(count3 === 6){
                    count3 = 0;
                    
                }
            },10000);
            Interval4 = setInterval(() => {
                $(".s2").text(count);
                count4++;
                if(count4 === 10){
                    count4 = 0;
                    
                }
            },60000);
            Interval5 = setInterval(() => {
                $(".s1").text(count);
                count5++;
                if(count5 === 6){
                    count5 = 0;
                    
                }
            },600000);
            
        }
        else if($(this).text() === "Stop"){
            $(this).text("Resume");
            $(this).addClass("start-button");
            $(this).removeClass("stop-button");
            $(".lap-button button").text("Reset");

            clearInterval(Interval);
            clearInterval(Interval1);
            clearInterval(Interval2);
            clearInterval(Interval3);
            clearInterval(Interval4);
            clearInterval(Interval5);
        }



    })
    $(".lap").click(function(){
        if($(".start").text() !="Start" && $(this).text() === "Lap"){

        }
        else if($(this).text() === "Reset"){
            $(".lap-button button").text("Lap");
            $(".lap-button button").css("cssText","opacity: 0.5 !important;");
            $(".start").text("Start");
            $(".s6").text("0");
            $(".s5").text("0");
            $(".s4").text("0");
            $(".s3").text("0");
            $(".s2").text("0");
            $(".s1").text("0");
            count = 0;
            count1 = 0;
            count2 = 0;
            count3 = 0;
            count4 = 0;
            count5 = 0;
        }
    })
})