formatMarkdown();

// Replace markdown with formatted HTML
function formatMarkdown()
{
	// A dictionary of tags and class names
	// Add to this dictionary to add new markdown tags
	var tags = {
		"@LOCATION": "location",
		"@EPNUM:": "epnum",
		"@TITLE:": "eptitle",
		"@AUTHOR:": "author",
		"@ACTNUM:": "actnum",
		"%%": "description",
		"%": "description",
	};

	var locationDirectory = "../../../cyborgresistance/assets/images/locations/";
	var mugshotDirectory = "../../../cyborgresistance/assets/images/mugshots/";
	var json = getJsonData();
	var characters = json.names;
	var emotes = json.emotes;

	document.body.innerHTML = document.body.innerHTML.replace("<p>EpStart</p>", "<div id='ep'>");
	document.body.innerHTML = document.body.innerHTML.replace("<p>EpFin</p>", "</div>");

	var paragraphs = document.getElementById('ep').getElementsByTagName('p'); // Get all paragraph tags in the ep
	var line;
	var comment = false;

	for(var i = 0; i < paragraphs.length; i++)
	{
		var p = document.createElement('p');
		var div = document.createElement('div');
		line = paragraphs[i].innerHTML;

		// single line parsing
		// multi line parsing

		// if any token matches

		var state = setParsingState(line);

		function setParsingState(line)
		{
			for (var token in tags)
			{
				if (line.startsWith(token))
				{
					if (tags[token] === "location")
					{
						return "location";
					}
					else if (tags[token])
					{

					}
				}
			}
			
			return "multi";
			return "single";
		}
		
		// Add classes to divs
		for (var token in tags)
		{
			if (line.startsWith(token))
			{
				div.className = tags[token];
				line = line.substr(token.length, line.length); // Remove the markdown

				// Set background image for locations
				if (tags[token] === "location")
				{
					var location = line.substring(0, line.lastIndexOf(':'));
					if (location) 
					{
						div.style.backgroundImage = "url('" + locationDirectory + location + ".png')";
					}
					line = line.substr(line.indexOf(":") + 1, line.length);
				}
				else if (token === "%%")
				{
					comment = true;
				}

				break;
			}
		}

		if (comment === true)
		{
			continue;
		}

		// Dialogue styling
	    if (!div.className)
	    {
			div.className = "dialogue";
			var speaker = line.substr(0, line.indexOf(':')).toLowerCase();
			var name = speaker;
			var emote = "neutral"

			if (speaker.indexOf(' ') > -1)
			{
				name = speaker.substr(0, speaker.indexOf(' '));
				emote = speaker.substr(speaker.indexOf(' ')+1, speaker.length);
			}

			var emoteIndex = emotes.indexOf(emote);
			var displayname = line.substr(0, line.indexOf(':')).toLowerCase();
			var imagePath = "";

			if (name in characters)
			{
				displayname = characters[name].displayName;

				if (characters[name].imagePathPrefix)
					imagePath = "<img id=double src=" + mugshotDirectory + characters[name].imagePathPrefix + emotes[emoteIndex] + ".png>"; 
			}

			var replace =  imagePath + " <p><profilename>" + displayname + "</profilename></br>";
			find = new RegExp(speaker + ":", "gi");
			line = line.replace(find, replace);	
			div.innerHTML = line;
		}
		else 
		{
			p.innerHTML = line;
			div.innerHTML = p.outerHTML;
		}
	    	
	    paragraphs[i].parentNode.replaceChild(div, paragraphs[i]);
	}
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
//Cyborg Resistance
	//Normal Form	
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
	//Human Forms
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
	//Universe 0
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
			
//Supporting Characters
	//Narrator
			"narrator": {
				"displayName": "Narrator",
				"imagePathPrefix": "narrator"
			},
	//Light and Co.
			"light": {
				"displayName": "Dr. Light",
				"imagePathPrefix": "lightcrew/light"
			},
			
	//Wily and Co.
			"wily": {
				"displayName": "Dr. Wily",
				"imagePathPrefix": "wilycrew/wily"
			},
//Other Teams
	//Seven Mercenaries
			"quint": {
				"displayName": "Quint",
				"imagePathPrefix": "7mercs/quint"
			},
//Seasonal Epilogues
	//Halloween Special
			"witcharrietty": {
				"displayName": "Arrietty",
				"imagePathPrefix": "seasonal/witcharri"
			},
			"ulalamolly": {
				"displayName": "Molly",
				"imagePathPrefix": "seasonal/ulalamolly"
			},
			"onisilver": {
				"displayName": "Silver Dime",
				"imagePathPrefix": "seasonal/onisilver"
			},
			"shademan": {
				"displayName": "Shade Man",
				"imagePathPrefix": "wilycrew/shade"
			},
			"spookyghost": {
				"displayName": "GHOST",
				"imagePathPrefix": "seasonal/ghost"
			},
			"astrozombieg": {
				"displayName": "Astro Zombieg",
				"imagePathPrefix": "seasonal/zombieg"
			},
			"astrozombiegs": {
				"displayName": "A group of Astro Zombiegs",
				"imagePathPrefix": "seasonal/zombieg"
			},
			"gilliamknight": {
				"displayName": "Gilliam Knight",
				"imagePathPrefix": "seasonal/gknight"
			},
			"gilliamknightwolf": {
				"displayName": "Gilliam Knight (Wolf Form)",
				"imagePathPrefix": "seasonal/gknightwolf"
			},
			"ragger": {
				"displayName": "Armor's Helmet",
				"imagePathPrefix": "seasonal/ragger"
			},
			"cyorown": {
				"displayName": "Cyorown",
				"imagePathPrefix": "seasonal/cyorown"
			},
			"battonm48": {
				"displayName": "Batton M48",
				"imagePathPrefix": "seasonal/battonm48"
			},
			"vanpookin": {
				"displayName": "Van Pookin",
				"imagePathPrefix": "seasonal/vanpookin"
			},
	//Christmas Special
			"ghostpast": {
				"displayName": "Ghost of Christmas Past",
				"imagePathPrefix": "seasonal/ghostpast"
			},
			"ghostpresent": {
				"displayName": "Ghost of Christmas Present",
				"imagePathPrefix": "seasonal/ghostpresent"
			},
			"ghostfuture": {
				"displayName": "Ghost of Christmas Future",
				"imagePathPrefix": "seasonal/ghostfuture"
			},
			"pasthornet": {
				"displayName": "Hornet Man (Past)",
				"imagePathPrefix": "seasonal/pasthornet"
			},
			"futurehornet": {
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
