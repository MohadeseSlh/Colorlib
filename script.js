/*jquery for wisdom------------------------------------------------------------------------------------------------*/

        $(document).ready(function(){
            $("#wisdom").click(function(){
                $("#panel").slideToggle("slow");
            });
        });        
       
/* btn-----------------------------------------------------------------------------------------------------------*/

        $(document).ready(function(){
            $("#btn1").on({
                focus: function(){
                    $(this).css("color", "black");
                    $(this).css("border", "3px solid rgba(54, 175, 231, 0.705)");
                },  
                mouseleave: function(){
                    $(this).css("color", "rgb(224, 56, 56)");
                    $(this).css("border", "1px solid white");
                }, 
         
            });
        });

/* day counter---------------------------------------------------------------------------------------------------- */

// Set the date we're counting down to
var countDownDate = new Date("dec 30, 2018 15:37:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days  

        document.getElementById("hours").innerHTML =hours 

    document.getElementById("minutes").innerHTML =minutes 

    document.getElementById("seconds").innerHTML =seconds ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
  
/* video -----------------------------------------------------------------------------------------------*/

$(document).ready(function(){
    $('.card2').click(function(){
        $('#hidden').css('display','block')
    })
})

    $(document).ready(function(){
        $('#video-btn').click(function(){
            $('#hidden').css('display','block')
        })
    })


    $(document).ready(function(){
        $('.card2').click(function(){
            $('html').css('opacity','0.7')
        })
    })
    $(document).ready(function(){
        $('#video-btn').click(function(){
            $('html').css('opacity','0.7')
        })
    })


/* email------------------------------------------------------------------------------------------------*/

    function required()
{
var email = document.forms["form1"]["text1"].value;
if (email != "")
{
alert('ایمیل وارد شده است.');
}

}

/* close video--------------------------------------------------------------------------------------*/
$(document).ready(function(){
    $('#close').click(function(){
        $('#hidden').css('display','none')
    })
})

$(document).ready(function(){
    $('#close').click(function(){
        $('html').css('opacity','1')
    })
})