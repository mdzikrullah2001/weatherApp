$(document).ready(function(){
    $("#searchBtn").click(function(){
        let city = $("#textBox").val();
        $("#textBox").val("");
        let key = "a358295a53dd3ba2b55af692864a5c5d";
        if(city != ""){
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"&units=metric" ,
                method: "GET",
                dataType: "json",
                timeout: 3000,

                success: function(data){
                    console.log(data);
                    $(".temp").html(data.main.temp+" <sup>o</sup>C");
                    $(".city").text(data.name);
                    $(".hmdt").text(data.main.humidity+" %");
                    $(".wind1").html(data.wind.speed+" km/h");
                },
                error: function(xhr,status,err){
                    if(status === "timeout"){
                        alert("Request Time Out.");
                    }else{
                        console.log(err);
                    }
                }
            });
            
        }else{
            alert("Search box can't be empty");
        }
    });
});
