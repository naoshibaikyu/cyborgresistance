insertDivs();
insertMugshots();

//Replace all p tags with div class=dialogue tags
function insertDivs()
{
	document.body.innerHTML = document.body.innerHTML.replace("<p>EpStart</p>", "<div id='ep'>");
	document.body.innerHTML = document.body.innerHTML.replace("<p>EpFin</p>", "</div>");

	var pTags=document.getElementById('ep').getElementsByTagName('p');

	for(i=0;i<pTags.length;i++)
	{
	    var line = pTags[i];  
	    var p = document.createElement('p');
	    var div = document.createElement('div');

	    if (line.innerHTML.startsWith("@LOCATION"))
	    {
			div.className = "location";
	    	line.innerHTML = line.innerHTML.substr(10);
	    }
		else if (line.innerHTML.startsWith("@EPNUM:"))
	    {
	    	div.className = "epnum";
	    	line.innerHTML = line.innerHTML.substr(7);
	    }
		else if (line.innerHTML.startsWith("@TITLE:"))
	    {
	    	div.className = "eptitle";
	    	line.innerHTML = line.innerHTML.substr(7);
	    }
		else if (line.innerHTML.startsWith("@AUTHOR:"))
	    {
	    	div.className = "author";
	    	line.innerHTML = line.innerHTML.substr(8);
	    }
		else if (line.innerHTML.startsWith("@ACTNUM:"))
	    {
	    	div.className = "actnum";
	    	line.innerHTML = line.innerHTML.substr(8);
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

	    //Surround inner HTML with p tags
	    p.innerHTML = line.innerHTML;
	    div.innerHTML = p.outerHTML;

	    line.parentNode.replaceChild(div, line);
	}
}

function insertMugshots()
{
	var directory = "/assets/images/mugshots/";
	//Instances of where a character has an image attached to their name. Along with bolding the name.

	//TODO: Import character names and emotes from separate text files
	var names = {
		//Cyborg Resistance Members (Armored)
		concrete:"Concrete",
		magma:"Magma",
		honey:"Honey",
		galaxy:"Galaxy",
		plug:"Plug",
		tornado:"Tornado",
		fake:"Fake",
		jewel:"Jewel",
		splash:"Splash",
		//Cyborg Resistance Members (Human)
		arrietty:"Arrietty",
		molly:"Molly",
		silver:"Silver",
		//Universe Zero's Cyborg Resistance Members
		"classiccr/magma0":"Magma0",
		"classiccr/concrete0":"Concrete0",
		"classiccr/galaxy0":"Galaxy0",
		"classiccr/hornet0":"Hornet0",
		"classiccr/plug0":"Plug0",
		//Supporting Characters
		narrator:"Narrator",
		"lightcrew/light":"Light",
		//Villains
		"wilycrew/wily":"Wily",
		//Seven Mercenaries
		"7mercs/quint":"Quint",
		//Generic NPCs
		//Seasonal
		//Halloween
		"seasonal/witcharri":"WitchArrietty",
		"seasonal/ulalamolly":"UlalaMolly",
		"seasonal/onisilver":"OniSilver",
		//Christmas Characters
		"seasonal/ghostpast":"GhostPast",
		"seasonal/ghostpresent":"GhostPresent",
		"seasonal/ghostfuture":"GhostFuture",
		"seasonal/pasthornet":"PastHornet",
		"seasonal/futurehornet":"FutureHornet",
		"seasonal/chill":"Chill",
		"seasonal/santa":"Santa",
		"seasonal/elf":"Elf"
	};

	var emotes = {
		neutral:"",
		happy:"Happy",
		annoyed:"Annoyed",
		angry:"Angry",
		shocked:"Shocked",
		sad:"Sad",
		damaged:"Damaged",
		relieved:"Relieved",
		pissed:"Pissed",
		glare:"Glare",
		aloof:"Aloof",
		giddy:"Giddy",
		scared:"Scared",
		nani:"Nani",
		snicker:"Snicker",
		owo:"OwO",
		sleep:"Sleep",
		lenny:"Lenny",
		hotdog:"Hotdog",
		scary:"Scary",
		punched:"Punched",
		thinking:"Thinking",
		smug:"Smug"
	};

	//TODO: make it work with brackets and spaces between the name and emote
	//Look at all name/emote combinations
	for (var nameKey in names)
	{
		for (var emoteKey in emotes)
		{
			var str = "<p>" + names[nameKey] + emotes[emoteKey] + ":";
			var suffix = "";

			//Insert name suffix and prefix
			var displayname = names[nameKey];

			switch(nameKey)
			{
			//Cyborg Resistance Members (Human)
				case "arrietty":
					displayname = "Arrietty";
					break;
				case "molly":
					displayname = "Molly";
					break;
				case "silver":
					displayname = "Silver Dime";
					break;
			//Cyborg Resistance Members (Armored)
				case "magma":
					displayname = "Magma Man";
					break;
				case "splash":
					displayname = "Splash Man";
					break;
				case "plug":
					displayname = "Plug Man";
					break;
				case "tornado":
					displayname = "Tornado Man";
					break;
				case "jewel":
					displayname = "Jewel Woman";
					break;
				case "honey":
					displayname = "Honey Woman";
					break;
				case "galaxy":
					displayname = "Galaxy Woman";
					break;
				case "concrete":
					displayname = "Concritter";
					break;
				case "fake":
					displayname = "Fakette";
					break;
			//Supporting Characters
				case "lightcrew/light":
					displayname = "Dr. Light";
					break;
			//Villains
				case "wilycrew/wily":
					displayname = "Dr. Wily";
					break;
			//Seven Mercenaries
				case "7mercs/quint":
					displayname = "Quint";
					break;
			//Seasonal Stuff
			//Halloween
				case "seasonal/witcharri":
					displayname = "Arrietty";
					break;
				case"seasonal/ulalamolly":
					displayname = "Molly";
					break;
				case "seasonal/onisilver":
					displayname = "Silver Dime";
					break;
			//Christmas Characters
				case "seasonal/chill":
					displayname = " Man";
					break;
				case "seasonal/ghostpast":
					displayname = "Ghost of Christmas Past";
					break;
				case "seasonal/ghostpresent":
					displayname = "Ghost of Christmas Present";
					break;
				case "seasonal/ghostfuture":
					displayname = "Ghost of Christmas Future";
					break;
				case "seasonal/pasthornet":
					displayname = "Hornet Man (Past)";
					break;
			//Cyborg Resistance Members (Universe 0)
				case "classiccr/magma0":
					displayname = "Magma Man";
					break;
				case "classiccr/hornet0":
					displayname = "Hornet Man";
					break;
				case "classiccr/galaxy0":
					displayname = "Galaxy Man";
					break;
				case "classiccr/concrete0":
					displayname = "Concrete Man";
					break;
				case "classiccr/plug0":
					displayname = "Plug Man";
					break;
			}

			var find = new RegExp(str, "gi");
			var imagePath = directory + nameKey + emoteKey + ".png"; 

			replace = "<test><img id=double src=" + imagePath + "> <p><profilename>" + displayname + "</profilename></br></test>";
			
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

