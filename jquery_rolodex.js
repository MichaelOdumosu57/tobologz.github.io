//almost done with jquery rolodex animate, it just wont, all indexes align in time, it just wont move as its reordered
//capabilities : place any amount of items into rolodex
//             : rolodex clockwise core functionality
//             : rolodex counterclockwise core functionality
//             : 3d data consideration
//             : fully functional xml_recontent capability
//             : attribute options
//

//
// planned work : easing functionality
//              : order resort (if you built your items in one order and used another way to do it
//              : object.rolodex_item concept, what will happen is that if can pass any amout of objects to the rolodex, and rolodex will give each item its item class so rolodex know what to do with it


//FIX rolodex_animation, parameters do not match up
//global variables and functions
var rolodex_array = new Array(); //to see what items the function is working with
var z_array  = new Array(); //this variable sees what is facing to the front
var rolodex_item = 0; //refers to the items in the rolodex
var its_ok ; //debugger
var rolodex_set;
var decision = "object"; // lets function know whether to use this items or the the rolodex_array,$(this) once again is misleading and refers to the whole window
var rolodex_element; //for optional 3d animation
var rolodex_movement_type; //will hold a function which controls how the rolodex moves itself
var desired_display; //for xml rolodex item recontent
var rolodex_execute;
var rolodex_execute_clockwise;
var rolodex_execute_counterwise;
//to return how many times the data_collect function, this is to keep track of the head as well as to help the xml_re_content attribute


    
    jQuery.fn.extend({
        rolodex:function(michael,$left,$right){
            //this function takes items and attempts to make a rolodex out of it. A rolodex is an object which behaves like a carousel but instead of left to right all the objects are part of a circle overlapping each other with the current items having the highest z-index and the others overlapping in proper fashion
            
            
            // option control
            function z_display (which,z_element){
                z_element[0].css("z-index",z_element[which][1][1].split(" ")[1]);
            }
            if(michael.simple_3d == 'true'){

            }
            // rolodex changes with account for z-index, without it the face is always in front
            
            if(michael.animate == 'true'){
                function rolodex_amination (animate_element) {
                    rolodex_movement_type = animate_element.animate;
                    // console.log(rolodex_movement_type);
                }
                function animate_wait(){
                    return;
                }
                
            }
            //rolodex eases instead of slides
            

                        
            
            
            var rolodex_set = $(this).length; //this variable gives the size of the rolodex to let the function know what it has to do
            var rolodex_array = new Array(1 * rolodex_set); //to see what items the function is working with
            var z_array  = new Array(1 * rolodex_set);
            var rolodex_item = 0; //refers to the items in the rolodex
            rolodex_movement_type = $.offset;
            var its_ok = 1; //debugger
            rolodex_execute = 0; //becuase at this point data collect will execute once
            rolodex_execute_clockwise = 0; //how many times the rolodex went clockwise and counter
            rolodex_execute_counterwise = 0;

            var decision_first = $.map($(this), function(value, index) {
                return [[$(value),undefined]];
            });
            
            //turns jquery selector to an array for compatability from initialization to rolodex use
            //returned as such 1, needs selector for jquery function compatability
            //returned becuase the rolodex array will have the the items query as the first items in its subarrays
            //need a rolodex array or without knowing about the prev and next necessary information, we would be using a highly unfavorable linked list
                    

            if(michael.xml_re_content !== undefined){
                console.log(michael.xml_re_content)
                if(michael.xml_re_content[0] == 'true'){
                    var pull_index = 0;
                    desired_display = [];
                    while(pull_index != parseInt(michael.xml_re_content[2]) + 1   ) {
                        desired_display.push(decision_first[pull_index][0].offset());
                        pull_index += 1;
                    }
                    consoles("re_content",[michael.xml_re_content,desired_display],0);
                    if(michael.xml_re_content[1] === michael.xml_re_content[2] || michael.xml_re_content[1] === undefined || michael.xml_re_content[2] === undefined){
                        console.log("can't be same index or need to be different indexes");
                        desired_display = undefined;
                    }
                }
            }
            // rolodex rolls through chosen amount of rolodex items and skips the others
            

            data_collect(0);
            //this finds out about the positions of every item, it is the control room loop, when the rolodex moves, the rolodex gets updated realtime with this
            //find out why it cant be a function
            //rolodex_item reset to zero for later use
            

            
            function find_face() {
                //this function goes through the information arrays and finds out which items is facing to the front at the given moment but we might not need to know this
            }
            
            
            function data_collect (direction = "none") {
                 rolodex_item = 0;
                 if (direction == 1 || direction == 2) {
                    rolodex_array.forEach(function(rolodex_element,i){
                            
                            
                            rolodex_element[0].addClass(i.toString());
                            // for animation purposes, for offset to differenatiate things


                            consoles(direction,rolodex_element);

                            if(michael.z_only == 'true'){
                                z_display(direction,rolodex_element);

                            }
                            
                            else if(rolodex_amination !== undefined){
        
                            // rolodex_element[0].css({
                            // "transition": "transform 5s",
                            // "-webkit-transform": "translateX(5)",
                            // "-o-transform": "translateX(5)",
                            // "-moz-transform": "translateX(5)"
                            // });
                                var slowly;
                                var difference ;
                                    while(true){
                                        
                                        slowly = rolodex_element[0].offset();
                                        // console.log(slowly)
                                        difference = $("." + i.toString()).offset().top  - rolodex_element[direction][1][0].top;
                                        // console.log(difference)
                                        // console.log($("." + i.toString()).offset().top)
                                        console.log("wait executed")
                                        wait(50);
                                        
                                        if(  (difference < 1 && difference > 0) || (difference < 0 && difference > -1) ){
                                            
                                            rolodex_element[0].offset({ top:rolodex_element[direction][1][0].top,left:rolodex_element[direction][1][0].left});
                                            console.log("return final here",rolodex_element[0].offset())
                                            
                                            break;
                                            
                                            
                                            
                                        }
                                        else {
                                    
                                        // console.log(c)
                                            newPos = new Object();
                                            // console.log(newPos)
                                            var nume =slowly.top - rolodex_element[direction][1][0].top;
                                            var deom = slowly.left - rolodex_element[direction][1][0].left;
                                            var rate = nume/deom;
                                            var other_rate = deom/nume;
                                            // rate *= 5;
                                            if (rate < 0){
                                                rate += -(2*rate);
                                            }
                                            if (other_rate < 0) {
                                                other_rate += -(2*other_rate)
                                            }

                                            // console.log(rate,nume,deom);
        
                                            
                                            // console.log(rate);
                                            //animation will be done over rates, needs to know exact rate so that after the delay function the items are in the right place
                                            newPos.top = slowly.top;
                                            newPos.left = slowly.left;
                                            
                                            // console.log(difference)
                                        
                                            if (slowly.top - rolodex_element[direction][1][0].top > 0){
                                                newPos.top -= rate;
                                                
                                            }
                                            else {
                                                newPos.top += rate;
                                            }
                                            
                                            if (slowly.left - rolodex_element[direction][1][0].left > 0){
                                                newPos.left -= other_rate;
                                            }
                                            else{
                                                newPos.left += other_rate;
                                            }
                                            
                                            // console.log(difference)
    
                                            
                                            $("." + i.toString()).offset({top:newPos.top,left:newPos.left}).ready();
                                            // console.log(rolodex_element[0].offset())
                                        
                                            // break;
                                        
                                        
                                        
                                        
                                        
                                    
                                                
                                        }
                                        
                                    }
                            }
                            
                            
                            else {

                                rolodex_element[0].offset({
                                        top:rolodex_element[direction][1][0].top,
                                        left:rolodex_element[direction][1][0].left
                                    });
                            }
                            if (michael.simple_3d == 'true'){
                                // consoles("simple_z_display",simple_z_display);
                                z_display(direction,rolodex_element);
                            }
                            

    
                    });
                 }
                 //direction represent clockwise or counterclockwise functions, the offset is where the elements position is changed
 
            consoles("none");

            
            if (direction == 1 || direction == 2) {
                decision = rolodex_array;
                

            }
            //this means the function has all the coordinates and can edit effortesly
            else {
                decision = decision_first;

            }
            
            //this means the rolodex_a rray has yet to have all the offset variables to assort
            //cant use this, the init array you need is in decision_first, $(this) is very misleading
            

            while(rolodex_item != rolodex_set){
                
                
                rolodex_prev_item = rolodex_item - 1; //refers to previous item in rolodex
                rolodex_next_item = rolodex_item + 1; //refers  to next item in rolodex
                if ( rolodex_prev_item  < 0){
                     rolodex_prev_item = decision.length - 1;
                }
                if ( rolodex_next_item  > decision.length - 1){
                     rolodex_next_item = 0;
                     
                }
                //so they do not break bounds and we have a big bug
                consoles(3,[rolodex_prev_item,rolodex_next_item]);


                //powerful jquery function which made everything work
                
                var prev_offset = [decision[rolodex_prev_item][0].offset(),"z-index "  +decision[rolodex_prev_item][0].css("z-index")];
                var next_offset = [decision[rolodex_next_item][0].offset(),"z-index "  + decision[rolodex_next_item][0].css("z-index")];
                
                //receving coordinates for re-positioning


                rolodex_array[rolodex_item] = [decision[rolodex_item][0], ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ];
                z_array[rolodex_item] = ([rolodex_item,parseInt(decision[rolodex_item][0].css("z-index"))]);
                // }
                rolodex_item += 1;
                //item information for the re-positiong

                }
                rolodex_item = 0;
                //always set to zero once data is sorted through, the items never changed in the order they were brought into the function, don't think of the items to be in a line think of them to be with seperate ID's
                rolodex_execute += 1;
                return rolodex_execute;
            }
            
            $left.click(function () {
                data_collect(1);
                rolodex_execute_counterwise +=1;
                rolodex_execute_clockwise -= 1;
                consoles("re_content",[rolodex_execute_counterwise,rolodex_execute_clockwise],1);
                
                if(desired_display != undefined){

                    if(rolodex_execute_counterwise > desired_display.length - 1 || rolodex_execute_counterwise == 0 ){
                        var i = 0;//counter to switch back to first
                        while (i != rolodex_set - desired_display.length) {
                            data_collect(1);
                            i +=1;
                        }
                    rolodex_execute_counterwise = 0;
                    rolodex_execute_clockwise = 0;
                    }
                }
                
                
                // if(desired_display !== undefined ){
                //     console.log("ready to work");
                //     var i = 0;// so desired display can reset

                //     if (rolodex_execute_counterwise > desired_display.length -1 || rolodex_execute > desired_display.length -1 ){
                //         console.log(rolodex_execute)
                //         while(i != rolodex_set - (desired_display.length ) ){
                //             data_collect(1);
                //             i += 1;
                            
                //         }
                //         rolodex_execute = 1;
                //         rolodex_execute_counterwise = 0;
                        
                //     }
                    
                // }
                
                // && !(rolodex_execute >= rolodex_set - 1 && rolodex_execute <= rolodex_set + desired_display.length)
                //didnt make counterwise work, if it was in middle of rolodex it messed up, plus worked for only
            

            
                
            });
            //moves in clockwise function
            $right.click(function () {
                data_collect(2);
                rolodex_execute_clockwise += 1;
                rolodex_execute_counterwise -= 1;
                consoles("re_content",[rolodex_execute_clockwise,rolodex_execute_counterwise],1);
                
                if(desired_display != undefined){
                    if(rolodex_execute_clockwise >= desired_display.length || rolodex_execute_clockwise == 0 ){
                        rolodex_execute_clockwise = 0;
                        rolodex_execute_counterwise = 0;
                        
                    }
                    if(rolodex_execute_clockwise == 1 || rolodex_execute_clockwise > desired_display.length){
                        var i = 0;//counter to switch back to first
                        // console.log(desired_display.length)
                        while (i != rolodex_set - desired_display.length) {
                            data_collect(2);
                            i +=1;
                        }
                    
                    }
                }

                // if(desired_display !== undefined ){
                //     // if (rolodex_execute_counterwise == 0){
                //     //     rolodex_execute_counterwise = desired_display.length  ;
                //     // }
                //     console.log("ready to work");
                //     var i = 0;// so desired display can reset
                //     if( rolodex_execute >= 3 && rolodex_execute <= desired_display.length + 1 ){
                //         consoles("re_content" ,rolodex_execute);
                //         rolodex_execute -= 2;
                        
                        
                        
                //     }
                //     //left was executed
                //     else if (rolodex_execute < (rolodex_set + 2) - desired_display.length  ){
                //         while(i != rolodex_set - (desired_display.length ) ){
                //             data_collect(2);
                //             i += 1;
                            
                //         }
                //     }
                //     //revert past dataless items to last data item, but bad conditional statement
                                      
                //     else if(rolodex_execute >= rolodex_set + desired_display.length - 2) {
                //         console.log(rolodex_set + desired_display.length -2)
                //         rolodex_execute = 1;
                //     }
                //     //reset rolodex execute
                        
                    
                    
                // }
                
                
            });
            //moves in counterclockwise function
            // console logs
            function consoles(action = "none",data = undefined,debug = its_ok) {
                if(debug !== 0){
                    return;
                }
                
                if(action  == 1){
                    console.log("counterwise seperate actions");
                    console.log(data)
                    console.log("where items is",data[0].offset());
                    console.log("where items must go",data[1][1][0]);
                    console.log("new z -index",data[1][1][1].split(" ")[1]);
                    // console.log("i cant call this loop normally",execute)
                }
                
                if(action == 2){
                    console.log("clockwise seperate actions");
                    console.log(data)
                    console.log("where items is",data[0].offset());
                    console.log("where items must go",data[2][1][0]);
                    // console.log("i cant call this loop normally",execute)
                }
                
                if(action == 3){
                    console.log("working on rolodex item #" + rolodex_item);
                    console.log("should be one less that the length of the array", decision.length -1)
                    console.log("what the prev_item returns on universal application", data[0])
                    console.log("what the next_item returns on universal application", data[1])
                }
                
                if (action === 'simple_z_display'){
                    console.log(data);
                    
                }
                
                if (action === 're_content'){

                        console.log(data);
                    
                }
                else {
                    console.log("michael element\n",michael);
                    console.log("clockwise control element\n",$left);
                    console.log("counter-clockwise control element\n",$right);
                    console.log("holding element",$(".rolodex"));
                    console.log( "rolodex_set",rolodex_set);
                    console.log( "rolodex_array \n" ,rolodex_array);
                    console.log( "z_array \n" ,z_array);
                    console.log("rolodex_item \n" , rolodex_item);
                    console.log("rolodex_execute \n" , rolodex_execute);
                    // console.log("prev_rolodex_item \n" , rolodex_prev_item);
                    // console.log("next_rolodex_item \n" , rolodex_next_item);
                    
                }
            }
            //cant use console as function call
            
            function wait(ms){
               var start = new Date().getTime();
               var end = start;
               while(end < start + ms) {
                 end = new Date().getTime();
              }
            }

            consoles();

            
            
            

            
        }
    });
    
// (function( $ ) {
//     $.fn.rolodex = function (michael,$left,$right) {
//             var rolodex_set = $(this).length; //this variable gives the size of the rolodex to let the function know what it has to do
//             var rolodex_array = []; //to see what items the function is working with
//             var z_array = []; //this variable sees what is facing to the front
//             var rolodex_item = 0; //refers to the items in the rolodex
//             var its_ok = 0; //debugger

            

//             while(rolodex_item != rolodex_set){
//                 var rolodex_prev_item = rolodex_item - 1; //refers to previous item in rolodex
//                 var rolodex_next_item = rolodex_item + 1; //refers  to previous item in rolodex
//                 if ( rolodex_prev_item  < 0){
//                      rolodex_prev_item = $(this).length -1;
//                 }
//                 if ( rolodex_next_item  > 7){
//                      rolodex_next_item = 0;
//                 }
//                 var prev_offset = [$(this).eq(rolodex_prev_item).offset(),"z-index "  +$(this).eq(rolodex_prev_item).css("z-index")];
//                 var next_offset = [$(this).eq(rolodex_next_item).offset(),"z-index "  + $(this).eq(rolodex_next_item).css("z-index")];
//                 rolodex_array.push([$(this).eq(rolodex_item), ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ]);
//                 z_array.push([rolodex_item,parseInt($(this).eq(rolodex_item).css("z-index"))])
//                 rolodex_item += 1;
//             }
//             //this finds out about the positions of every item, it is the control room loop, when the rolodex moves, the rolodex gets updated realtime with this
            
            
//             $left.click(function () {
//                 rolodex_array.forEach(function(element){
//                     consoles("counterwise",element);
//                     element[0].offset({top:element[1][1][0].top,left:element[1][1][0].left})
                    
                    
//                 });
//             });
//             //counterclock function
            
            
//             function consoles(action,data = undefined,debug = its_ok) {
//                 if(debug != 0){
//                     return;
//                 }
//                 if(action == "counterwise"){
//                     console.log("counterwise seperate actions");
//                     console.log(data)
//                     console.log("where items is",data[0].offset());
//                     console.log("where items must go",data[1][1][0]);
//                 }
//                 else {
//                     console.log("michael element\n",michael);
//                     console.log("clockwise control element\n",$left);
//                     console.log("counter-clockwise control element\n",$right);
//                     console.log("holding element",$(".rolodex"));
//                     console.log( "rolodex_set",rolodex_set);
//                     console.log( "rolodex_array \n" ,rolodex_array);
//                     console.log( "z_array \n" ,z_array);
//                     console.log("rolodex_item \n" , rolodex_item);
//                 }
//             }
//             //cant use console as function call

//             consoles("none");

            
            
            
//             if (michael == "none"){
//                 return;
//             }
                        

//     };
    

// }(jQuery));

