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
            r: 2, 
			d: Math.random()*maxParts,
            tempX: (Math.random()*2)-1,
            tempY: (Math.random()*2)-1
		})
	}
	
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
	
    var counter = 0;
	function update()
	{
        for(var i = 0; i < maxParts; i++)
		{
			var p = particles[i];
            //p.y += Math.cos(ang+p.d) + 1 + p.r/2;
            //p.x += 0.4*Math.sin(ang + i) * 12;
            //p.x=mouseX;
            if(counter % 100 == 0){
                p.tempX = (Math.random()*4)-2;
                p.tempY = ((Math.random()>0.5)*2 - 1)*(Math.sqrt(4 - p.tempX*p.tempX));
            }

            p.x+=p.tempX;  
            p.y+=p.tempY;
            //p.y+=0.4*Math.sin(ang + i)
			
			if(p.x > W+5 || p.x < -5 || p.y > H || p.y < -5)
			{
                p.x=Math.random()*W;
                p.y=Math.random()*H;
                console.log("out!");
			}
		}
        counter+=1;
	}
	
	setInterval(draw, 33);
}





