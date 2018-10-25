function showsub(id) {
    var number = id.replace('sublink', '');
    var blocks = document.querySelectorAll("[id^=subcontent");
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }
    document.querySelector('#subcontent' + number).style.display = 'block';
	
}


function show(id) {
    var number = id.replace('link', '');
    var blocks = document.querySelectorAll("[id^=content");
    var subblocks = document.querySelectorAll("[id^=subcontent");
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = 'none';
    }
    for (var j = 0; j < subblocks.length; j++) {
        subblocks[j].style.display = 'none';
    }
    document.querySelector('#content' + number).style.display = 'block';
}

    function init() {

        var divs = document.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++) {
            if (divs[i].className == "div") {
                divs[i].style.display = 'none';
            }
        }
        var a = document.getElementsByTagName("a");
        a.onclick = show;
    }

    window.onload = init;
	
	
//At the start of the page, automatically executes a code.
	window.onload = function(){
		javascript:show('link0')
}