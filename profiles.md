<html lang="en">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style type="text/css">
html {height: 100%;}
body {
	background-repeat: no-repeat;
	background-attachment: fixed;
	height: 100%;
	min-height: 100%;
	margin: 0;
}

}
#bloctxt {
	border-right-width: 5px;
	border-right-style: solid;
	border-right-color: #962300;
	padding-right: 10px;
	position: absolute;
	top:5%;
	right: 75%;
	width: 600px;
	margin-right: 260px
}
#wrapper {
	padding: 2px;
	margin: 0 auto;
}
#border {
	background-color: #101010;
	border: 1px solid #606060;
	-webkit-border-radius: 1px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	margin: 0 auto;
	padding: 2px;
	width:256px;
	height:224px;
}

#canvas {
	width:256px; 
	height:224px;
}

#MMFCanvas {
	-webkit-box-shadow:  0px 0px 4px 4px rgba(0, 0, 0, 0.25); 
    box-shadow:  0px 0px 4px 4px rgba(0, 0, 0, 0.25);
}


</style>

<span class="span" markdown="1">

##Interactive Character Profile Select	

</span>

	<script>
	   	// Detection of old browsers that do not support the canvas element
		// Falls back to a default page
	    if (!document.createElement("canvas").getContext)
	    {
			window.open("http://www.clickteam.com/html5-fallback", "_self");
		}
	</script>
	
  	<!-- EXTRASOURCES -->
	<!-- Loads the Javascript code...-->
  	<script src="CRBIOS/src/Runtime.js"></script>

</head>

<!-- This is where we create the Canvas element that will contain the application...-->
<body>
    <div id="wrapper">
	    <div id="border">
		    <div id="canvas">
			    <canvas id="MMFCanvas" width="256" height="224">
				    <p>Your browser does not support Canvas.</p>
			    </canvas>   
		    </div>
	    </div>
    </div>  
    <script>
        // RUNTIMESTART
        // This is where the HTML5 runtime is actually started
	    window.addEventListener("load", windowLoaded, false);
	    function windowLoaded()
	    {
		    // Calls the runtime
		    // First parameter : name of the canvas element
		    // Second parameter : path to the cch file. Images and sounds must lay beside this file
		    new Runtime("MMFCanvas", "CRBIOS/assets/CRBIOS.cch");
	    }
        // RUNTIMESTARTEND
    </script>
   </body>
</html>

<script src="assets/js/scrollpage.js"></script>
<p></p><p></p>
<body>
<span class="col-md-3">

	
	
	<span class="span" id="content0" markdown="1">
	
	Click on a character portrait to view their **bio**!
	
</span>
	
	
	
<span class="span" id="content1" markdown="1">
        Concrete Woman - She is a smol who is also bratty. She has a pet mettaur who resided in a husk of the Concrete Man armor.
</span>
		
		
		
    <span class="span" id="content2">
        Jewel Woman - She steal things ok also probably voice of reason. Maybe. I don't know. That's how I viewed her.
    </span>
	
	
	
    <span class="span" id="content3" markdown="1">
	
	![](https://naoshibaikyu.github.io/cyborgresistance/assets/images/mugshots/hornetoriginal.png) **Hornet Man** ![](https://naoshibaikyu.github.io/cyborgresistance/assets/images/sprites/hornetstand.png)
	
	Hornet Man - He is FUCKING PISSED. Also he has a sister named Honey Woman.
	:s
	
		
		
    </span>
	
	
	
    <span class="span" id="content4">
        Tornde. Inform inquired. Detective.
    </span>
	
	
    <span class="span" id="content5">
        Plug Man - NAME: Delta Bravo. Mission: Wait... This is just Cranchio's mugshot invading the bio. Wtf, Cranchio?
    </span>
	
	
    <span class="span" id="content6">
	
		Galaxy Man - **Huh?**
		
    </span>
	
	
    <span class="span" id="content7">
        Magma Man - ACTION JACKTION. He's no longer Sinistar. JUST AS ORIGINALLY INTENDED (NO THANKS TO SPIKE BOI!!!!!)
    </span>
	
	
    <span class="span" id="content8">
        Splash Man - "Pirates are still better than Ninjas. Fight me" says Hornet Man right before Splash Man impales him with the trident.
    </span>
	
	
    <span class="span" id="content9">
        Fakette - One day just shapeshifted into this Fake Man-like figure and she joined the team and pulled (mostly) harmless pranks. The end.
    </span>
	
	
    <span class="span" id="content10">
        Dr. Light is fucking evil.
    </span>
	
	
    <span class="span" id="content11">
        Roll is probably evil too.
    </span>
	

</span>
</body>