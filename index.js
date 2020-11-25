var number= document.querySelectorAll(".piano").length;

for(var i=0; i<number; i++){
    document.querySelectorAll(".piano")[i].addEventListener("click",function(){
        var play = this.innerHTML;
        switch (play) {
            case "C":
                var audio = new Audio("sounds/pianoc.mp3");
                audio.play();                
                break;
            case "D":
                var audio = new Audio("sounds/pianod.mp3");
                audio.play();                
                break
            case "E":
                var audio = new Audio("sounds/pianoe.mp3");
                audio.play();                
                break
            case "F":
                var audio = new Audio("sounds/pianof.mp3");
                audio.play();                
                break
            case "G":
                var audio = new Audio("sounds/pianog.mp3");
                audio.play();                
                break
            case "A":
                var audio = new Audio("sounds/pianoh.mp3");
                audio.play();                
                break
            case "B":
                var audio = new Audio("sounds/pianoi.mp3");
                audio.play();                
                break
        
            default:
                break;
        }
    })
}

var number= document.querySelectorAll(".piano1").length;

for(var i=0; i<number; i++){
    document.querySelectorAll(".piano1")[i].addEventListener("click",function(){
        var play2=this.innerHTML;
        switch (play2) {
            case "D1":
                var audio = new Audio("sounds/pianoc1.mp3");
                audio.play();                
                break
            case "E1":
                var audio = new Audio("sounds/pianod1.mp3");
                audio.play();                
                break
            case "F1":
                var audio = new Audio("sounds/pianoe1.mp3");
                audio.play();                
                break
            case "G1":
                var audio = new Audio("sounds/pianof1.mp3");
                audio.play();                
                break
            case "A1":
                var audio = new Audio("sounds/pianoh1.mp3");
                audio.play();                
                break
            case "B1":
                var audio = new Audio("sounds/pianoi1.mp3");
                audio.play();                
                break
        
            default:
                break;
        }
    });
}