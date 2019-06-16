/**
 * @author Anna Skowronek-Jaskuła
 *
 *  The file is to set the eating action
 *
 *  you can set the min and max time the eating lasts

 *  you can also set the position of the bird turn left or right
 *  (now it's 0.6 - you_SET_positionToTurnOtherSite var)
 *
 
 *  you can play with the arrays, which lets you setting
 *  when which bird is shown
 *  (showTheBirdArray and showTheBirdArray2)
 *
 *  Once the function is done, the bird will go left or right (line 96/99)
 *
 */

import * as vars from "../variables/variables"
import walkLeft from "./4walkLeft"
import walkRight from "./2walkRight"

function eatTwice() {
	let you_SET_minMealTime = 8;
	let you_SET_maxMealTime = 20;
	let you_SET_positionToTurnOtherSite = 0.6;
	
	
	if (vars.$walkingBirdContainer === undefined) {
	
	} else {
		
		return new Promise((resolve) => {
			
			let bottomBirdImgArray = [];
			let i;
			let j = vars.$walkingBirdContainer.getElementsByTagName('img').length;
			
			for (i = 0; i < j; i++) {
				bottomBirdImgArray.push(vars.$walkingBirdContainer.getElementsByTagName('img')[i]);
			}
			
			for (let i = 1; i < j; i++) {
				bottomBirdImgArray[i].style.display = "none";
			}
			
			
			let mealTime = Math.floor(10 * Math.random() * (you_SET_maxMealTime - you_SET_minMealTime) + you_SET_minMealTime);
			
			function showHideBird(nr, nextOrPrevious, delayTime) {
				
				if (bottomBirdImgArray[nr]) {
					setTimeout(function () {
						bottomBirdImgArray[nr].style.display = "none";
						bottomBirdImgArray[nr + nextOrPrevious].style.display = "block";
						
					}, delayTime * mealTime);
				}
			}
			
			let showTheBirdArray = [
				showHideBird(0, 1, 0),
				showHideBird(1, 1, 1),
				showHideBird(2, 1, 2),
				showHideBird(3, 1, 3),
				showHideBird(4, -1, 4),
				showHideBird(3, -1, 5),
				showHideBird(2, 1, 6),
				showHideBird(3, 1, 7),
				showHideBird(4, -1, 8),
				showHideBird(3, -1, 9),
				showHideBird(2, -1, 10),
				showHideBird(1, 0, 12)
			];
			showHideBird(showTheBirdArray);
			
			let showTheBirdArray2 = [
				showHideBird(0, 1, 16),
				showHideBird(1, 1, 17),
				showHideBird(2, 1, 18),
				showHideBird(3, 1, 19),
				showHideBird(4, -1, 20),
				showHideBird(3, -1, 21),
				showHideBird(2, -1, 22),
				showHideBird(1, -1, 35)
			];
			showHideBird(showTheBirdArray2);
			
			
			setTimeout(function () {
				
				let offsetLeft = vars.$walkingBirdContainer.offsetLeft;
				
				if (offsetLeft < you_SET_positionToTurnOtherSite * vars.windowWidth) {
					resolve(walkRight());
					
				} else {
					resolve(walkLeft());
				}
				
			}, 37 * mealTime);
			
		});
	}
}

export default eatTwice;
