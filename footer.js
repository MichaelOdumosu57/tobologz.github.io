// <script src="./jquery-1.10.2.js"></script>
// <script src="./jquery-ui.js"></script>

// used a universal .js file just for the websites footer section

$(document).ready(function() {
                    function footer_boxes (recursive, well_length) {   //for different boxes that make up the footer
                    var diff_sites = $("div:last");
                    var shift_right =  40;
                    var shift_top = -100;
                    var diff_site = ["<br> Market Website <br> Tel : xxx-xxx-xxxx <br> email: example@gmail.com","<br> Business Website <br> Tel : xxx-xxx-xxxx <br> email: example@gmail.com"];
        
                    while (recursive != 0) {
                        var clone_diff_sites = diff_sites.clone();
                        shift_right += (well_length/3.05555555556) + ((well_length-1100)/3.07692307692)
                        if (well_length > 1450) {
                            shift_right  -= ((well_length-1450)/5);
                        }
                        // shift_top -= 50;
                        // console.log(shift_right);
                        // diff_sites.after(diff_sites.css("margin-left", shift_right.toString()+ "px"));
                        clone_diff_sites.css({"margin-left": shift_right.toString() + "px", "margin-top" : shift_top.toString() + "px"});
                        diff_sites.after(clone_diff_sites.html(diff_site[recursive-1]));
                        recursive -=  1;
                    }
                    
                }
                footer_boxes(2,parseInt($(".move_7 > .well").css("width").split("p")[0]));
});