//   here the above items are taken into account as an unfix attribute you must put as an array, this takes at most one item and fixes it once the parallax is done

    //capabilities:core parallax functionality
    //            : paralllax items stick to the screen once they get to the offset points
    //            : functionality applied to multiple parallax items
    //            : non-parallax items treat object as a static object
    
    //planned work :
    //             : universial understanding and appliacation of the parallax
    //             : smoothening of the parallax animation
    //             : object screen vsibility detection
    
var its_ok = 0;
//global variables

    jQuery.fn.extend({
        parallax:function(michael){
            //a parallax is hard to explain in the real world but on a screen each parallax item slides regularly on the screen to a certain point, where it is then covered by the next parallax object to a certain point


            if(michael.unfix != undefined){
                consoles("unfix",michael.unfix,0)
                
            }
            var parallax_array = $.map($(this), function(value, index) {
                return [$(value)];
            });
            consoles("parallax_items",[$(this),parallax_array],1);
            consoles("scrollTop",$(window).scrollTop())
            consoles("distance",[parallax_array[1].offset().top - $(".parallax:first > div > h1").offset().top ,$(".parallax:first > div > h1").css("height")])
            
            var unfix_move = parseFloat(michael.unfix[0].css("top").split("p")[0])
            var unfix_left_set = michael.unfix[0].css("left")
            console.log(unfix_move)
            function react_on_scroll_offset() {
                
                    if ($(window).scrollTop() >= 1044)  {
                        var move = unfix_move;
                        consoles("unfix",michael.unfix,0);
                        michael.unfix[0].css("position","relative")
                        move += (1044-338)/150;
                        michael.unfix[0].css({"top":move.toString() + "em","left":"0em"})
                        
                        return;
                    }
                    //to stop the above items from moving and move along and treat the parallax like a big static object
                        //the math in move involves taking the final from the first, because thats where it belongs
                    else{
                        michael.unfix[0].css("top",unfix_move.toString() + "px")
                        // console.log(michael.unfix[0].css("left"))
                        michael.unfix[0].css({"position":"fixed","left":unfix_left_set})
                    }
                    //this is the end reach of the parallax
                    
                        var move = 0;
                        move += $(window).scrollTop()/15;
                        parallax_array[0].css("top",move.toString() + "em")
                        consoles("coordinates",parallax_array,0);
                        console.log( $(window).scrollTop())
                        console.log(michael.unfix[0].css("top"))
                        //the first must not be limited in order for the parallax to work accordingly
                    if ($(window).scrollTop() >= 338)  {
                        var move = 0;
                        move += ($(window).scrollTop()-338)/15;
                        parallax_array[1].css("top",move.toString() + "em")
                        // consoles("coordinates",parallax_array,0);

                    }
                    
                    if ($(window).scrollTop() >= 671)  {
                        var move = 0;
                        move += ($(window).scrollTop()-671)/15;
                        parallax_array[2].css("top",move.toString() + "em")
                        // consoles("coordinates",parallax_array,0);

                    }
                    
                    if ($(window).scrollTop() >= 996)  {
                        var move = 0;
                        move += ($(window).scrollTop()-996)/15;
                        parallax_array[3].css("top",move.toString() + "em")
                        // consoles("coordinates",parallax_array,0);

                    }
                    // if ($(window).scrollTop() >= 166)  {
                    //     parallax_array[1].css("top",($(window).scrollTop()/10).toString() + "em")
                    // }
                    // if ($(window).scrollTop() <= 366)  {
                    //     var move = 0;
                    //     move -= $(window).scrollTop()/10;
                    //     parallax_array[2].css("top",move.toString() + "em")
                    //     // console.log(parallax_array[2].css("top"),$(window).scrollTop())

                    // }
                    // if ($(window).scrollTop() >= 366)  {
                    //     parallax_array[2].css("top",($(window).scrollTop()/10).toString() + "em")
                    // }
                    // if ($(window).scrollTop() <= 906)  {
                    //     var move = 0;
                    //     move -= $(window).scrollTop()/10;
                    //     parallax_array[3].css("top",move.toString() + "em")
                    //     // console.log(parallax_array[2].css("top"),$(window).scrollTop())

                    // }
                    // if ($(window).scrollTop() >= 906)  {
                    //     parallax_array[3].css("top",($(window).scrollTop()/10).toString() + "em")
                    // }

                wait(0)
            }
            
            $(window).scroll(react_on_scroll_offset);

            // $(window).on("scroll",function () {
            //     // console.log("jacob");
            // })

            //seems not to need the event action anymore can do it on its own
            
            function consoles(action = "none",data = undefined,debug = its_ok) {
                if(debug !== 0){
                    return;
                }
                if(action == "parallax_items"){
                    console.log(data)
                }
                
                if(action == "scrollTop"){
                    console.log(data)
                }
                
                if(action == "distance"){
                    console.log(data)
                }
                
                if(action == "coordinates"){
                    data.forEach(function (selection,i) {
                        console.log(i,selection.css("top"))
                    })
                }
                
                if(action == "unfix"){
                    
                    data.forEach(function (selection,i) {
                        console.log("what i need to move",i,selection.css("top"), $(window).scrollTop())
                    })
                }
                
                
            }
        }
    });
    
    
                function wait(ms){
               var start = new Date().getTime();
               var end = start;
               while(end < start + ms) {
                 end = new Date().getTime();
              }
            }
