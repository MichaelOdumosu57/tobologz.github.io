            // viewport is adjusted for tablets as well
            var site_info_instruction = document.location.href.split("?");
                            if(site_info_instruction.length == 2 ){
                                site_info_instruction = site_info_instruction[1]
                            }
                            
            var devices;
            //all related information about the viewport of the device
                            
            
            
                         
            $(document).ready(function() {
                console.log( $("meta").attr("content"))
                var phone = $("meta").attr("content");
                var tablet = $("meta").attr("content").split("=");
                var display_length = parseInt($("body").css("width").split("p")[0])
                console.log($("body").css("width"))
                
                
                
                if(display_length > 3000){
                    tablet[2] = .60.toString()
                    tablet = tablet[0] + "=" + tablet[1] + "=" + tablet[2];
                    console.log(tablet)
                    $("meta").attr("content" , tablet)
                }
                else{
                    $("meta").attr("content" , phone)
                    
                }

        var getBrowserWidth = function(){
            if(window.outerWidth < 768){
                // Extra Small Device
                return ["xs",window.outerWidth];
            } else if(window.outerWidth < 991){
                // Small Device
                return ["sm",window.outerWidth];
            } else if(window.outerWidth < 1199){
                // Medium Device
                return ["md",window.outerWidth]
            } else {
                // Large Device
                return ["lg",window.outerWidth]
            }
        };
        //differentiates between device being used
        
        devices = getBrowserWidth();
        console.log(devices)
            });
            
            // to fix
            
            // to fix this you must find the most common phones and adjust them to the viewport technologies.html
            //site_map.html
            //process.html
            