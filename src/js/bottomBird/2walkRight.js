/**
 * @author Anna Skowronek-Jaskuła
 *
 *  The file is to set the walk to the right direction
 *  the bird goes in the random distance with the random speed
 *
 *  You can set the speed (min and max DistanceIn1Sec) ->
 *  -> the bird can move faster or slower in one milisecond interval
 *  right now it's set to 0.3px - 2px every one milisecond
 *  (faster than it goes to the left)
 *
 *  You can also set how far will the bird go right.
 *  The 1 is the full window width
 *  I have set it it in the random distance
 *  from 0.28 (28%) to 0.8 (80%) od the window width
 *
 *
 *  Once the function is done, the bird will start eating (line 59)
 *
 */


import * as vars from "../variables/variables"
import eatTwice from "./3eatTwice"


function walkRight() {
	let you_SET_minDistanceIn1Sec = 0.3;            //  how fast will the bird move; random min)
	let you_SET_maxDistanceIn1Sec = 2;              //  how fast will the bird move; random max)
	
	let you_SET_minOffsetLeft = 0.28;                  //  how far can the bird go left (random min)
	let you_SET_maxOffsetLeft = 0.8;               //  how far can the bird go left (random max)
	
	
	if (vars.$walkingBirdContainer === undefined) {
	
	} else {
		
		return new Promise((resolve) => {
			let offsetLeft = vars.$walkingBirdContainer.offsetLeft;
			let dx = Math.random(you_SET_maxDistanceIn1Sec - you_SET_minDistanceIn1Sec) + you_SET_minDistanceIn1Sec;
			let posX = offsetLeft;
			
			vars.$walkingBirdContainer.style.webkitTransform = "scaleX(1)";
			
			if (vars.$walkingBirdContainer) {
				
				let randomOffsetLeft = Math.floor((Math.random() * (you_SET_maxOffsetLeft - you_SET_minOffsetLeft) + you_SET_minOffsetLeft) * 100) / 100;
				
				var interval = setInterval(function () {
					
					posX += dx;
					vars.$walkingBirdContainer.style.left = posX + "px";
					
					
					if (vars.$walkingBirdContainer.offsetLeft > randomOffsetLeft * vars.windowWidth) {
						
						clearInterval(interval);
						resolve(eatTwice());
					}
				}, 1);
			}
		})
	}
}

export default walkRight;