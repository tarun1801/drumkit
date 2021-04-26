var y = document.getElementsByClassName("drum");
var x = y.length;
console.log(x); 
var i;

document.addEventListener("keypress",function(event){
      
     makesound(event.key);
     makeAnimation(event.key);
  
});

for( i = 0 ; i <x;i++)
{
    document.getElementsByClassName('drum')[i].addEventListener("click",function ()
    {
        makesound(this.innerHTML);
        makeAnimation(this.innerHTML);
    });

}


function makesound(key)
{
     if(key ==="w")
     {
     var audio = new Audio("tom-1.mp3");
          audio.play();
          
     }
     if(key ==="a")
     {
     var audio = new Audio("tom-2.mp3");
          audio.play();
          
     }
     if(key ==="s")
     {
     var audio = new Audio("tom-3.mp3");
          audio.play();

     }
     if(key ==="d")
     {
     var audio = new Audio("tom-4.mp3");
          audio.play();
          
     }
     if(key ==="j")
     {
     var audio = new Audio("snare.mp3");
          audio.play();
          
     }
     if(key ==="k")
     {
     var audio = new Audio("kick-bass.mp3");
          audio.play();
          
     }
     if(key ==="l")
     {
     var audio = new Audio("crash.mp3");
          audio.play();
          
     }

}
function makeAnimation(command)
{
     var activeButton = document.querySelector("."+command);
     activeButton.classList.add("pressed");

     setTimeout(function(){
          activeButton.classList.remove("pressed");
     },100);
}
