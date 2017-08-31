/*jshint esversion: 6 */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
			let userField = document.getElementsByClassName("ProfileCard-userFields");
			let input = window.prompt("Enter any usernames you want to continue following separated by a space.");
			let inputMax = window.prompt("Enter maximum number of seconds to wait between actions. Must be greater than '2'.");
			let i = 0;
			let t = 0;
			let inputFound = [];
			let saveNames = input.split(" ");
			let rand = Math.round(Math.random() * 10000);
			let setMin = 2000;
			let setMax = inputMax * 1000;
			
			this.userField = userField;
			this.input = input;
			this.inputMax = inputMax;
			this.i = i;
			this.t = t;
			this.inputFound = inputFound;
			this.saveNames = saveNames;
			this.rand = rand;
			this.setMin = setMin;
			this.setMax = setMax;
			
			main();
    }
  }
);
  	function main() {
		    if(inputMax > 2){
		        randomIntFromInterval(setMin,setMax);
		        unfollowLoop();
		        findUsers();
		    }else{
		    	inputMax = window.prompt("Please enter a number great than 2");
		    	setMax = inputMax * 1000;
		        main();
		    }
  		}
    
		function findUsers(){
			if(t < userField.length){
				for(u = 0; u < saveNames.length; u++){
					if(userField[t].children[1].innerText.includes(saveNames[u])){
						inputFound[t] = true;
						break;
					}else{
						inputFound[t] = false;
					}
				}
				t++;
				if(t < userField.length){
					findUsers();
				}
			}
		}
		
		function randomIntFromInterval(min,max)
		{
			rand = Math.floor(Math.random()*(max-min+1)+min);
			return rand;
		}
		
		
		function unfollowLoop(){
			let button = userField[i].previousElementSibling.children[0].children[0].children[0].children[1];
			let buttonText = button.innerText;
			let stat = userField[i].children[1].children[2];
			let follows = "";
		
			if(stat === undefined){
				follows = "";
			}else{
		
				follows = stat.innerText;
			}
		
			setTimeout(function(){
				if(follows.includes("Follows you") === false && inputFound[i] === false && buttonText.includes("Following") === true){
					button.click();
		        }
				i++;
				if(i < userField.length){
						randomIntFromInterval(setMin,setMax);
						unfollowLoop();
				}else{
					window.alert("Unfollow Script Finished!");
				}
			}, rand);
		}
