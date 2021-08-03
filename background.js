if(document.readyState !== 'complete') {
    window.addEventListener('load',afterWindowLoaded);
} else {
    afterWindowLoaded();
}

function afterWindowLoaded(){
    //Everything that needs to happen after the window is fully loaded.
	alert("OK 123456 at background.js");
}