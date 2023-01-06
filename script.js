// For AOS
AOS.init();

// Slick
$(document).ready(function () {
  $(".slick-priceing").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    swipeToSlide: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,   
        }
      }
      
    ]
    
  });
});



// 
let numberOfMessage;
let delaySec;
let enteredMessage;
document.getElementById("message-quantity").addEventListener('change',(event)=>{
  
  numberOfMessage = parseInt(event.target.value); 
});
document.getElementById("delay-sec").addEventListener('change',(event)=>{
  
  delaySec = parseInt(event.target.value); 
});
document.getElementById("message-area").addEventListener('change',(event)=>{
  
  enteredMessage = event.target.value; 
  // console.log(enteredMessage)
});

document.getElementById('message-send-button').addEventListener('click',()=>{
  

  let intervalTimeIndex = 0;
  const myInterval = setInterval(myTimer, delaySec);

function myTimer() {
  intervalTimeIndex++;
    console.log(enteredMessage)
    if(intervalTimeIndex > numberOfMessage){
      clearInterval(myInterval);
    }
}

  
})




{/* <msg>my message</msg>:200::1000; */}
let textSyntax;
document.getElementById("message-area").addEventListener('keyup',(e)=>{
  textSyntax = e.target.value;
})

document.getElementById('generate').addEventListener('click',()=>{
  // document.getElementById("message-area").value = 
  let msgTag = textSyntax.search("<msg>") == 0;
  if(msgTag){
    let lastTagIndex = textSyntax.search("</msg>")
    let message = textSyntax.slice(5,lastTagIndex)
    console.log(textSyntax.search("</msg>:"))
  }
})