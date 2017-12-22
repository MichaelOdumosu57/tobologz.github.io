//   parallax items can be brough to display upon click, now it also has the capability of bringing all the items to proper z-index so they can still be easily accessible

    //capabilities:core parallax functionality
    //            : paralllax items stick to the screen once they get to the offset points
    //            : functionality applied to multiple parallax items
    //            : non-parallax items treat object as a static object
    //            : parallax items can be brough to display upon click
    //            : all parallax items are still accessible through clicking
    
    //planned work :
    //             : bug on zoom, on of the position attributes seems to fall out of place, fix this
    //             : universial understanding and appliacation of the parallax
    //             : smoothening of the parallax animation in chrome browsers
    //             : object screen vsibility detection (method awareness whether objects on the webpage are visible to the user)
    //             : availbility of all parallax items through side panelling their header content in addition
    //             : parallax item position realtime detection and correction by browser
    
    
    // far in the future
    //             : swapping parallax items for user experience
    //             : a reset button for a return to the original state
    
var its_ok = 0;
var showcase = 0;
var spotlight = 1; //this makes sure on the parallax click it shows up as the first item as display
//global variables

    jQuery.fn.extend({
        parallax:function(michael){
            //a parallax is hard to explain in the real world but on a screen each parallax item slides regularly on the screen to a certain point, where it is then covered by the next parallax object to a certain point
            
            var item_selector = $(this).selector;

            if(michael.unfix != undefined){
                consoles("unfix",michael.unfix,0)
                
            }
            var parallax_array = $.map($(this), function(value, index) {
                if(showcase <= parseInt($(value).css("z-index")) ){
                    showcase = parseInt($(value).css("z-index")) + spotlight
                }
                $(value).addClass(index.toString());
                return [$(value)];
            });
            
            //for use in clikcing to display first the parallax items
            // also for use in changing the z-index of the parallax items upon correspective clicks
            consoles("parallax_items",[$(this),parallax_array],1);
            consoles("scrollTop",$(window).scrollTop())
            consoles("distance",[parallax_array[1].offset().top - $(".parallax:first > div > h1").offset().top ,$(".parallax:first > div > h1").css("height")])
            
            var unfix_move = parseFloat(michael.unfix[0].css("top").split("p")[0])
            var unfix_left_set = michael.unfix[0].css("left")
            console.log(unfix_move)
            var i = 0;
            var j = 0;
            var distance_from_spotlight = 0;
            while(i != parallax_array.length ){
                
                $(item_selector).eq(i).on("click",function () {
                    
                    spotlight += 1;
                    console.log($(this).css("z-index"))
                    console.log(spotlight,showcase)
                    $(this).css("z-index",showcase + spotlight);
                    
                    while( j !=  parallax_array.length ){

                        distance_from_spotlight = parseInt($(this)[0].classList.value.split(" ")[$(this)[0].classList.value.split(" ").length-1]) - j;
                        if(distance_from_spotlight < 0){
                            distance_from_spotlight += (-2*distance_from_spotlight)
                        }
                        else if(distance_from_spotlight == 0){
                            j+= 1;
                            console.log("execution")
                            continue;
                        }
                        parallax_array[j].css("z-index", (showcase + spotlight) -distance_from_spotlight)
                        consoles("front_display",[distance_from_spotlight,parseInt($(this)[0].classList.value.split(" ")[$(this)[0].classList.value.split(" ").length-1]),j,parallax_array[j].css("z-index")])
                        // this code allows all parallax items to be seen otherwise they would be covered and would be very hard to access
                        
                        j += 1;
                        
                        
                    }
                    j = 0;
                    
                });
                i+= 1;

            }
            function react_on_scroll_offset() {
                
                    if ($(window).scrollTop() >= 1044)  {
                        var move = unfix_move;
                        consoles("unfix",michael.unfix,0);
                        michael.unfix[0].css({"position":"relative","margin":"auto"})
                        // move /= 15;
                        move = (1065-538)/15
                        michael.unfix[0].css({"top":move.toString() + "em","left":"0em"})
                        //probobaly something to do with everything that came before it
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

            
            

                wait(0)
            }
            
            $(window).scroll(react_on_scroll_offset);
            
            console.log($(item_selector).eq(1))
            
            


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
                
                if(action == "front_display"){
                    
                    console.log(data[0],data[1],data[2],data[3])
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
