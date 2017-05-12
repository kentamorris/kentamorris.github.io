window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	var maxParts = 35; 
	var particles = [];
	for(var i = 0; i < maxParts; i++)
	{
		particles.push({
			x: Math.random()*W, 
			y: Math.random()*H, 
            r: 1, 
			d: Math.random()*maxParts,
            tempX: (Math.random()*2)-1,
            tempY: (Math.random()*2)-1
		})
	}
    
    var traits = ["1A Mechatronics", "Creativity", "Very Cool"];
	var traitIndex = 0;
    var changingText = document.getElementById("changeText");
    var textOpacity = 0.1;
    
	function draw()
	{
        ctx.fillStyle = "rgba(255,255,255,0.02)";
		ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "rgba(150,150,150,1)";
        ctx.beginPath();
		for(var i = 0; i < maxParts; i++)
		{
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		ctx.fill();
        
        update();
	}
	
    function changeText(i)
    { 
        changingText.innerHTML=traits[i];
//        changingText.style.opacity=0;
        textOpacity = 0;
    }
    
    var counter = 0;
	function update()
	{
        for(var i = 0; i < maxParts; i++)
		{
			var p = particles[i];
            if(counter % 100 == 0){
                p.tempX = (Math.random()*4)-2;
                p.tempY = ((Math.random()>0.5)*2 - 1)*(Math.sqrt(4 - p.tempX*p.tempX));
                
                
            }

            
//            window.log();
            p.x+=p.tempX;  
            p.y+=p.tempY;
            //p.y+=0.4*Math.sin(ang + i)
			
			if(p.x > W+5 || p.x < -5 || p.y > H || p.y < -5)
			{
                p.x=Math.random()*W;
                p.y=Math.random()*H;
			}
		}
        if(counter % 100 == 0){
            changeText(traitIndex)
            if (traitIndex < 3){
                traitIndex += 1;
            }
            else{
                traitIndex = 0;
            }
            
            
        }
        textOpacity+=0.1;
        
        changingText.style.opacity=textOpacity;
        counter+=1;
	}
	
	setInterval(draw, 33);
}





