//look for function solution and shorten this code, $(this) was screwing you big time


//global variables and functions
var rolodex_array = new Array(1,1,1,1,1,1,1); //to see what items the function is working with
var z_array = [] = new Array(1,1,1,1,1,1,1); //this variable sees what is facing to the front
var rolodex_item = 0; //refers to the items in the rolodex
var its_ok = 1; //debugger
var rolodex_set


    
    jQuery.fn.extend({
        rolodex:function(michael,$left,$right){
            //this function takes items and attempts to make a rolodex out of it. A rolodex is an object which behaves like a carousel but instead of left to right all the objects are part of a circle overlapping each other with the current items having the highest z-index and the others overlapping in proper fashion
            
            var rolodex_set = $(this).length; //this variable gives the size of the rolodex to let the function know what it has to do
 
            var rolodex_item = 0; //refers to the items in the rolodex
            var its_ok = 1; //debugger

            var decision_first = $.map($(this), function(value, index) {
                return [[$(value),$(value)]];
            });
            
            //turns jquery selector to an array for compatability from initialization to rolodex use
            //returned as such 1, needs selector for jquery function compatability
            //returned becuase the rolodex array will have the the items query as the first items in its subarrays
                    


            
            // console.log(decision)
            

            // return;

            // while(rolodex_item != rolodex_set){
            //     var rolodex_prev_item = rolodex_item - 1; //refers to previous item in rolodex
            //     var rolodex_next_item = rolodex_item + 1; //refers  to previous item in rolodex
            //     if ( rolodex_prev_item  < 0){
            //          rolodex_prev_item = $(this).length -1;
            //     }
            //     if ( rolodex_next_item  > 7){
            //          rolodex_next_item = 0;
            //     }
            //     var prev_offset = [$(this).eq(rolodex_prev_item).offset(),"z-index "  +$(this).eq(rolodex_prev_item).css("z-index")];
            //     var next_offset = [$(this).eq(rolodex_next_item).offset(),"z-index "  + $(this).eq(rolodex_next_item).css("z-index")];
            //     rolodex_array.push([$(this).eq(rolodex_item), ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ]);
            //     z_array.push([rolodex_item,parseInt($(this).eq(rolodex_item).css("z-index")),$(this).eq(rolodex_item).offset()])
            //     rolodex_item += 1;
            // }
            // rolodex_item = 0;
            data_collect(0);
            //this finds out about the positions of every item, it is the control room loop, when the rolodex moves, the rolodex gets updated realtime with this
            //find out why it cant be a function
            //rolodex_item reset to zero for later use
            

            
            function find_face() {
                //this function goes through the information arrays and finds out which items is facing to the front at the given moment but we might not need to know this
            }
            
            
            function data_collect (direction = "none") {
                 if (direction == 1 || direction == 2) {
                    rolodex_array.forEach(function(element){
    
                            consoles(direction,element);
                            element[0].offset({top:element[direction][1][0].top,left:element[direction][1][0].left});
    
                    });
                 }
                 //direction represent clockwise or counterclockwise functions, the offset is where the elements position is changed
 
            consoles("none");
            var decision = "object",
                index = 0; // lets function know whether to use this items or the the rolodex_array,$(this) once again is misleading and refers to the whole window
            
            if (direction == 1 || direction == 2) {
                decision = rolodex_array;
                

            }
            //this means the function has all the coordinates and can edit effortesly
            else {
                decision = $(this);

            }
            
            //this means the rolodex_array has yet to have all the offset variables to assort
            while(rolodex_item != rolodex_set){
                var rolodex_prev_item = rolodex_item - 1; //refers to previous item in rolodex
                var rolodex_next_item = rolodex_item + 1; //refers  to next item in rolodex
                if ( rolodex_prev_item  < 0){
                     rolodex_prev_item = decision.length - 1;
                }
                if ( rolodex_next_item  > 7){
                     rolodex_next_item = 0;
                }
                //so they do not break bounds and we have a big bug
                
                if (decision != rolodex_array){
                    decision = decision_first;
                }
                //powerful jquery function which made everything work
                
                var prev_offset = [decision[rolodex_prev_item][0].offset(),"z-index "  +decision[rolodex_prev_item][0].css("z-index")];
                var next_offset = [decision[rolodex_next_item][0].offset(),"z-index "  + decision[rolodex_next_item][0].css("z-index")];
                //receving coordinates for re-positioning

                // if (decision != rolodex_array){
                //     rolodex_array.push([$(this).eq(rolodex_item), ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ]);
                //     z_array.push([rolodex_item,parseInt($(this).eq(rolodex_item).css("z-index")),$(this).eq(rolodex_item).offset()]);
                // }
                // else {
                rolodex_array[rolodex_item] = [decision[rolodex_item][0], ["object  "  + ( rolodex_prev_item).toString() +"prev is" , prev_offset],["object  " + (rolodex_next_item).toString() +"next is" , next_offset] ];
                z_array[rolodex_item] = ([rolodex_item,parseInt(decision[rolodex_item][0].css("z-index"))]);
                // }
                rolodex_item += 1;
                //item information for the re-positiong

                }
                rolodex_item = 0;
                //always set to zero once data is sorted through, the items never changed in the order they were brought into the function, don't think of the items to be in a line think of them to be with seperate ID's
            }
            
            $left.click(function () {
            
            

                data_collect(1);
                
            

            
                
            });
            //moves in counterclockwise function
            $right.click(function () {
                
                
                data_collect(2);
                
            });
            //moves in clockwise function
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
                    // console.log("i cant call this loop normally",execute)
                }
                
                if(action == 2){
                    console.log("clockwise seperate actions");
                    console.log(data)
                    console.log("where items is",data[0].offset());
                    console.log("where items must go",data[2][1][0]);
                    // console.log("i cant call this loop normally",execute)
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
                    // console.log("prev_rolodex_item \n" , rolodex_prev_item);
                    // console.log("next_rolodex_item \n" , rolodex_next_item);
                    
                }
            }
            //cant use console as function call

            consoles();

            
            
            
            if (michael == "none"){
                return;
            }
            
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

