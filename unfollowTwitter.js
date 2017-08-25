let i = 0;
let unfollowers = document.getElementsByClassName("ProfileCard-userFields");
unfollowLoop();

function unfollowLoop(){
    setTimeout(function(){
        if(unfollowers[i].children[1].children[2] === undefined){
	            unfollowers[i].previousElementSibling.children[0].children[0].children[0].children[1].click();
        }
        i++;
        if(i < unfollowers.length){
            unfollowLoop();
        }
    }, 2000)
}
