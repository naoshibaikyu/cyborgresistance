insertDivs();
insertMugshots();

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

function insertMugshots(json)
{
	var directory = "../../../cyborgresistance/assets/images/mugshots/";
	var json = getJsonData();
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
			var imagePath = directory + characters[characterKey].imagePathPrefix + emotes[emoteKey] + ".png"; 
			var replace = "<img id=double src=" + imagePath + "> <p><profilename>" + displayname + "</profilename></br>";
			var find = new RegExp(str, "gi");
			//TODO: check and see if replace path exists, if not, bold name and continue, else...
			document.body.innerHTML = document.body.innerHTML.replace(find, replace);	
			
			// TODO: Remove this - temp hack to allow spaces in between name and emote
			str = "<p>" + characterKey + " " + emoteSuffix + ":";
			find = new RegExp(str, "gi");
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

function getJsonData() {
	return ({
		"names": {
			"concrete": {
				"displayName": "Concritter",
				"imagePathPrefix": "concrete"
			},
			"magma": {
				"displayName": "Magma Man",
				"imagePathPrefix": "magma"
			},
			"honey": {
				"displayName": "Honey Woman",
				"imagePathPrefix": "honey"
			},
			"galaxy": {
				"displayName": "Galaxy Woman",
				"imagePathPrefix": "galaxy"
			},
			"plug": {
				"displayName": "Plug Man",
				"imagePathPrefix": "plug"
			},
			"tornado": {
				"displayName": "Tornado Man",
				"imagePathPrefix": "tornado"
			},
			"fake": {
				"displayName": "Fakette",
				"imagePathPrefix": "fake"
			},
			"jewel": {
				"displayName": "Jewel Woman",
				"imagePathPrefix": "jewel"
			},
			"splash": {
				"displayName": "Splash Man",
				"imagePathPrefix": "splash"
			},
			"arrietty": {
				"displayName": "Arrietty",
				"imagePathPrefix": "arrietty"
			},
			"molly": {
				"displayName": "Molly",
				"imagePathPrefix": "molly"
			},
			"silver": {
				"displayName": "Silver Dime",
				"imagePathPrefix": "silver"
			},
			"magma0": {
				"displayName": "Magma Man",
				"imagePathPrefix": "classiccr/magma0"
			},
			"concrete0": {
				"displayName": "Concrete Man",
				"imagePathPrefix": "classiccr/concrete0"
			},
			"galaxy0": {
				"displayName": "Galaxy Man",
				"imagePathPrefix": "classiccr/galaxy0"
			},
			"hornet0": {
				"displayName": "Hornet Man",
				"imagePathPrefix": "classiccr/hornet0"
			},
			"plug0": {
				"displayName": "Plug Man",
				"imagePathPrefix": "classiccr/plug0"
			},
			"narrator": {
				"displayName": "Narrator",
				"imagePathPrefix": "narrator"
			},
			"light": {
				"displayName": "Dr. Light",
				"imagePathPrefix": "lightcrew/light"
			},
			"wily": {
				"displayName": "Dr. Wily",
				"imagePathPrefix": "wilycrew/wily"
			},
			"quint": {
				"displayName": "Quint",
				"imagePathPrefix": "7mercs/quint"
			},
			"witchArrietty": {
				"displayName": "Arrietty",
				"imagePathPrefix": "seasonal/witcharri"
			},
			"ulalaMolly": {
				"displayName": "Molly",
				"imagePathPrefix": "seasonal/ulalamolly"
			},
			"oniSilver": {
				"displayName": "Silver Dime",
				"imagePathPrefix": "seasonal/onisilver"
			},
			"ghostPast": {
				"displayName": "Ghost of Christmas Past",
				"imagePathPrefix": "seasonal/ghostpast"
			},
			"ghostPresent": {
				"displayName": "Ghost of Christmas Present",
				"imagePathPrefix": "seasonal/ghostpresent"
			},
			"ghostFuture": {
				"displayName": "Ghost of Christmas Future",
				"imagePathPrefix": "seasonal/ghostfuture"
			},
			"pastHornet": {
				"displayName": "Hornet Man (Past)",
				"imagePathPrefix": "seasonal/pasthornet"
			},
			"futureHornet": {
				"displayName": "Hornet Man (Future)",
				"imagePathPrefix": "seasonal/futurehornet"
			},
			"chill": {
				"displayName": "Chill Man",
				"imagePathPrefix": "seasonal/chill"
			},
			"santa": {
				"displayName": "Santa",
				"imagePathPrefix": "seasonal/santa"
			},
			"elf": {
				"displayName": "Elf",
				"imagePathPrefix": "seasonal/elf"
			}
		},
		"emotes": [
			"neutral",
			"happy",
			"annoyed",
			"angry",
			"shocked",
			"sad",
			"damaged",
			"relieved",
			"pissed",
			"glare",
			"aloof",
			"giddy",
			"scared",
			"nani",
			"snicker",
			"owo",
			"sleep",
			"lenny",
			"hotdog",
			"scary",
			"punched",
			"thinking",
			"smug"
		]
	});
}
