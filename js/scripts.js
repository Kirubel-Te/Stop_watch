$(document).ready(function(){
    let count=1,count1=0,count2=1,count3=0,count4=1,count5 = 0;
    let Interval,Interval1,Interval2,Interval3,Interval4,Interval5;
    let pausedTime = {
        centi: 0, sec: 0, min: 0
    }
    let remainingTime = {
        centi: 0, sec: 0, min: 0
    }
    $(".start").click(function(){
        if($(this).text() === "Start"|| $(this).text() === "Resume"){
            $(this).text("Stop");
            $(this).addClass("stop-button");
            $(this).removeClass("start-button");
            $(".lap-button button").css("cssText","opacity: 1 !important;");
            $(".lap-button button").text("Lap")

            clearInterval(Interval);
            clearInterval(Interval2);
            clearInterval(Interval4);

            count = pausedTime.centi;
            count2 = pausedTime.sec;
            count4 = pausedTime.min;
            let startTime = new Date().getTime();
            if(remainingTime.centi > 0){
                setTimeout(() => {
                    count++;
                    if(count > 99){
                        count = 0;
                    }
                    $(".s6").text(count.toString().padStart(2,'0'));
                    //remainingTime.centi = 0;
                    Interval = setInterval(() => {
                        count++;
                        if(count > 99){
                            count = 0;
                        }
                        $(".s6").text(count.toString().padStart(2,'0'));
                    },10)
                },remainingTime.centi);
            }
            else{
                Interval = setInterval(() => {
                    count++;
                    if(count > 99){
                        count = 0;
                    }
                    $(".s6").text(count.toString().padStart(2,'0'));
                },10);
            }
            if(remainingTime.sec > 0){
                setTimeout(() => {
                    count2++;
                    if(count2 > 59){
                        count2 = 0;
                        //count4++;
                    }
                    $(".s4").text(count2.toString().padStart(2,'0'));
                    //remainingTime.sec=0;
                    Interval2 = setInterval(() => {
                        count2++;
                        if(count > 59){
                            count2 = 0;
                            //count4++;
                        }
                        $(".s4").text(count2.toString().padStart(2,'0'));
                    },1000);
                },remainingTime.sec)
            }
            else{
                Interval2 = setInterval(() => {
                    count2++;
                    if(count2 > 59){
                        count2 = 0;
                        //count4++;
                    }
                    $(".s4").text(count2.toString().padStart(2,'0'));
                   // count2++;
                    
                },1000);
            }

            if(remainingTime.min > 0){
                setTimeout(() => {
                    count4++;
                    if(count4 > 59){
                        count4 = 0;
                    }
                    $(".s2").text(count4.toString().padStart(2,'0'));
                    //remainingTime.min = 0;
                    Interval4 = setInterval(() => {
                        count4++;
                        if(count4 > 59){
                            count4 = 0;
                        }
                        $(".s2").text(count4.toString().padStart(2,'0'));
                    },60000)
                },remainingTime.min)
            }
            else{
                Interval4 = setInterval(() => {
                    count4++;
                    if(count4 > 59){
                        count4 = 0;
                    }
                    $(".s2").text(count4.toString().padStart(2,'0'));
      
                },60000);
            }
            
        }
        else if($(this).text() === "Stop"){
            $(this).text("Resume");
            $(this).addClass("start-button");
            $(this).removeClass("stop-button");
            $(".lap-button button").text("Reset");
            
            pausedTime.centi = count;
            pausedTime.sec = count2;
            pausedTime.min = count4

            let endTime = new Date().getMilliseconds();

            clearInterval(Interval);
            clearInterval(Interval2);
            clearInterval(Interval4);
            
            let currentTime = new Date().getTime - startTime;

            remainingTime.centi = 10 - Math.round(currentTime%10);
            remainingTime.sec = 1000 - Math.round(current%1000)
            remainingTime.min = 60000 - Math.round(currentTime%60000);
        }



    })
    $(".lap").click(function(){
        if($(".start").text() !="Start" && $(this).text() === "Lap"){

        }
        else if($(this).text() === "Reset"){
            $(".lap-button button").text("Lap");
            $(".lap-button button").css("cssText","opacity: 0.5 !important;");
            $(".start").text("Start");
            $(".s6").text("00");
            $(".s5").text("0");
            $(".s4").text("00");
            $(".s3").text("0");
            $(".s2").text("00");
            $(".s1").text("0");
            count = count2 = count4 = 1;
            pausedTime = {centi: 0, sec: 0, min: 0};
            remainingTime = {centi:0, sec: 0, min: 0};
        }
    })
})