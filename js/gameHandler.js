class gameHandler{
	constructor(){
		this.points = 0;
		this.valueMultiplier = 1.0;
		this.redpointsValue = 1.0;
		this.redDuration
		this.RedList = [];
	}
	
	increasePoints(value){
		this.points += value*this.valueMultiplier;
	}
	
	createParticle(Scolor){
		var particleGeo;
		var particleMaterial;
		switch(Scolor){
			case red:
				particleMaterial = new THREE.SpriteMaterial( color: red_color );
				particleGeo = new THREE.Sprite(particleMaterial);
				particleGeo.position();
				RedList.append(particleGeo);
				break;
			case blue:
				break;
			case yellow:
				break;
			case purple:
				break;
		}
	}
	
	redParticleStats(){
		this.redDuration = 5.0 + durationMod;
		this.redpointsValue = 1.0 + valueMod;
		//var durationValue = 1.0;
	}
	
	redUpdate(NumRed){
		var redTime += Clock.getDelta;
		if (redTime >= 1.0){
			increasePoints(redpointsValue * NumRed)
			redTime = 0;
		}
		for x in this.RedList{
			currentLifetime = RedList[x].elapsedTime;
			if (currentLifetime >= this.redDuration){
				RedList[x].remove();
			}
		}
	}
}