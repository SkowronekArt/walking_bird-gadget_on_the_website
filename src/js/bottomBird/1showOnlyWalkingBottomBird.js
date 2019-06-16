/**
 * @author Anna Skowronek-Jaskuła
 *
 *  You can set when the bird will appear on your screen
 *  (you_SET_delayTimeOfBirdAppear)
 *
 *  The function is to add the display: none to each of the bird-imgs
 *
 */

import * as vars from "../variables/variables"
import walkRight from "./2walkRight"

function showOnlyWalkingBottomBird() {
	let you_SET_delayTimeOfBirdAppear = 1000;
	
	vars.$walkingBirdContainer.style.display = "none";
	
	setTimeout(function () {
		
		return new Promise((resolve) => {
				
				vars.$walkingBirdContainer.style.display = "block";
				
				for (let i = 1; i < vars.$walkingBirdContainer.getElementsByClassName('bird__container-image').length; i++) {
					vars.$walkingBirdContainer.getElementsByClassName('bird__container-image')[i].style.display = "none";
				}
				resolve(walkRight());
			}
		)
	}, you_SET_delayTimeOfBirdAppear)
}


export default showOnlyWalkingBottomBird;
