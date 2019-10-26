insertDivs();
getJson();

//Replace all p tags with div class=dialogue tags
function insertDivs()
{
	var locationDirectory = "../../../cyborgresistance/assets/images/locations/";

	document.body.innerHTML = document.body.innerHTML.replace("<p>EpStart</p>", "<div id='ep'>");
	document.body.innerHTML = document.body.innerHTML.replace("<p>EpFin</p>", "</div>");

	var pTags=document.getElementById('ep').getElementsByTagName('p');

	for(i=0;i<pTags.length;i++)
	{
	    var line = pTags[i];  
	    var p = document.createElement('p');
	    var div = document.createElement('div');

		// Add classes to divs
	    if (line.innerHTML.startsWith("@LOCATION"))
	    {
			var locationLine = line.innerHTML;
			var location = locationLine.substring(9, locationLine.lastIndexOf(':'));
			if (location) {
				div.style.backgroundImage = "url('" + locationDirectory + location + ".png')";
			}

			div.className = "location";
	    }
		else if (line.innerHTML.startsWith("@EPNUM:"))
	    {
	    	div.className = "epnum";
	    }
		else if (line.innerHTML.startsWith("@TITLE:"))
	    {
	    	div.className = "eptitle";
	    }
		else if (line.innerHTML.startsWith("@AUTHOR:"))
	    {
	    	div.className = "author";
	    }
		else if (line.innerHTML.startsWith("@ACTNUM:"))
	    {
	    	div.className = "actnum";
	    }
	    else if (line.innerHTML.startsWith("%"))
	    {
			div.className = "description";
			line.innerHTML = line.innerHTML.substr(1);
	    }
	    else
	    {
			div.className = "dialogue";
		}
		
		// Put story text in between divs
		if (line.innerHTML.startsWith("@"))
		{
			line.innerHTML = line.innerHTML.substr(line.innerHTML.indexOf(':') + 1);
		}

	    //Surround inner HTML with p tags
	    p.innerHTML = line.innerHTML;
	    div.innerHTML = p.outerHTML;

	    line.parentNode.replaceChild(div, line);
	}
}

function getJson()
{
	$.getJSON("../../../cyborgresistance/characters.json").done(insertMugshots);
}

function insertMugshots(json)
{
	var directory = "../../../cyborgresistance/assets/images/mugshots/";
	var characters = json.names;
	var emotes = json.emotes;
	//TODO: make it work with brackets and spaces between the name and emote
	//TODO: don't do a find/replace, do it line by line in the div checker
	//Look at all name/emote combinations
	for (var characterKey in characters)
	{
		for (var emoteKey in emotes)
		{
			var emoteSuffix = emotes[emoteKey];
			if (emotes[emoteKey] === "neutral")
				emoteSuffix = "";
			var str = "<p>" + characterKey + emoteSuffix + ":";
			var displayname = characters[characterKey].displayName;
			var find = new RegExp(str, "gi");
			

			var imagePath = directory + characters[characterKey].imagePathPrefix + emotes[emoteKey] + ".png"; 

			replace = "<img id=double src=" + imagePath + "> <p><profilename>" + displayname + "</profilename></br>";
			
			//TODO: check and see if replace path exists, if not, bold name and continue, else...
			document.body.innerHTML = document.body.innerHTML.replace(find, replace);	
		}
	}

	//Format
	document.body.style.fontSize = "medium";
}

// Showdown markdown functionality

showdown.setOption("strikethrough", "true");
showdown.setOption("tables", "true");

var text = document.getElementById("act1").innerHTML,
    target = document.getElementById("targetDiv"),
    converter = new showdown.Converter(),
    html = converter.makeHtml(text);

    target.innerHTML = html;

// Page turner function. Are we keeping this?

function pageTurn(sourceDiv)
{
    text = document.getElementById(sourceDiv).innerHTML;
    target = document.getElementById("targetDiv");
    converter = new showdown.Converter();
    html = converter.makeHtml(text);

    target.innerHTML = html;
}

