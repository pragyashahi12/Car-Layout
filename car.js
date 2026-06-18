
$(document).ready(function(){
    $(".accordion-header").click(function(){
        // Close other sections
        $(".accordion-header").not(this).removeClass("active").next(".accordion-content").slideUp();
        
        // Toggle current section
        $(this).toggleClass("active").next(".accordion-content").slideToggle();
    });
});


