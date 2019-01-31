
$(".home").animate({width:'100%'},3000)
$(".home").animate({height:'100%'},3000, function(){
    
   $(".tittle h2").slideDown(4000)
    
    
})




$(window).scroll(function(){
    
    var wScroll = $(window).scrollTop();
    
    if(wScroll > 655)
    {
        
 $(".navbar").css("backgroundColor","#2d5861")
    }
     else{
         $(".navbar").css("backgroundColor","transparent")
     }  
    
})

$(window).scroll(function(){
    
    var fatma = $(window).scrollTop();
    
  if(fatma > 880)
    {
        
 $(".item").fadeIn(5000)
    }
       
    
})













