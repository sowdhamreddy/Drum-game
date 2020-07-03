var a=document.getElementsByClassName('drum');
for (var i = 0; i <a.length; i++) {
	document.getElementsByClassName('drum')[i].addEventListener("click",function()
		{    
			var b=this.innerHTML;
            drumsound(b);
 			buttonAnimation(b);
	
		});
}


document.addEventListener("keypress",function(event)
 	{
		drumsound(event.key);//key property of an event 	
		buttonAnimation(event.key);
 		
 	});		
//or normal function
//  document.addEventListener("keypress",handleKey);
// function handleKey(event){
//   drumsound(event.key);
//   buttonAnimation(event.key);
// }
   
function drumsound(para)
{
			switch(para)
			{
				case "a": 
				        var audio =new Audio("tom-1.mp3");
                        audio.play();
				 break;
				 case "s":
				        var audio =new Audio("tom-2.mp3");
                        audio.play();
                 break; 
                  case "d":
				        var audio =new Audio("tom-3.mp3");
                        audio.play();
                 break; 
                  case "h":
				          var tom4 = new Audio('tom-4.mp3');
				           tom4.play();
                 break;     
    			 case "j":
				        var audio =new Audio("kick-bass.mp3");
                        audio.play();
                 break;     
                  case "k":
				        var audio =new Audio("crash.mp3");
                        audio.play();
                 break;     
                  case "l":
				        var audio =new Audio("snare.mp3");
                        audio.play();
                 break;     

    			default:console.log(para);

			}
}
function buttonAnimation(currentKey) {

 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
