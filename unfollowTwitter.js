const userField = document.getElementsByClassName("ProfileCard-userFields");
const input = window.prompt("Enter any usernames you want to continue following separated by a space.");
let i = 0;
let t = 0;
let inputFound = [];
let saveNames = input.split(' ');
let rand = Math.round(Math.random() * 10000);

findUsers();

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

unfollowLoop();

function unfollowLoop(){
    setTimeout(function(){
        if(userField[i].children[1].innerText.includes("Follows you") === false && inputFound[i] === false){
		userField[i].previousElementSibling.children[0].children[0].children[0].children[1].click();
	}
        i++;
        if(i < userField.length){
		rand = Math.round(Math.random() * 10000);
		unfollowLoop();
        }else{
		window.alert("Unfollow Script Finished!");
	}
    }, rand)
}
