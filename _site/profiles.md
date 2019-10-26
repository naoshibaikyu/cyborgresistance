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

.container {
    width: 90%;

}

#profilename {
    width: 100%;
    font-size: 28px;
    text-align: center;
    padding-bottom: 8px;
}

#leftside {
  border-radius: 12px;
  background: #202020;
  width: 48%;
  height: 100%;
  word-wrap: break-word;
  min-height: 160px;
  float: left;
  padding-top: 8px;
  padding-left: 8px;
  padding-bottom: 8px;
  color: white;
  font-size: 14px;
  margin: auto;
}
#rightside {
  border-radius: 12px;
  background: #202020;
  width: 48%;
  height: 100%;
  word-wrap: break-word;
  min-height: 160px;
  float: right;
  padding-left: 8px;
  padding-bottom: 8px;
  color: white;
  font-size: 14px;
  margin: auto;
}


</style>


<div align="center">
<h1>Interactive Character Profile Select</h1>
</div>

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
	
	
	
<div id="content3">

	<span id="profilename">Hornet Man</span>

	<span id="leftside">*fuck* u</span>
	<span id="rightside" markdown="1"> what?

</div>
	
	
	
<span class="span" id="content4" markdown="1">
        Tornde. Inform inquired. Detective.
</span>
	
	
<span class="span" id="content5" markdown="1">
        Plug Man - NAME: Delta Bravo. Mission: Wait... This is just Cranchio's mugshot invading the bio. Wtf, Cranchio?
</span>
	
	
<span class="span" id="content6" markdown="1">
	
		Galaxy Man - **Huh?**
		
</span>
	
	
<span class="span" id="content7" markdown="1">
        Magma Man - ACTION JACKTION. He's no longer Sinistar. JUST AS ORIGINALLY INTENDED (NO THANKS TO SPIKE BOI!!!!!)
</span>
	
	
<span class="span" id="content8" markdown="1">
        Splash Man - "Pirates are still better than Ninjas. Fight me" says Hornet Man right before Splash Man impales him with the trident.
</span>
	
	
<span class="span" id="content9" markdown="1">
        Fakette - One day just shapeshifted into this Fake Man-like figure and she joined the team and pulled (mostly) harmless pranks. The end.
</span>
	
	
<span class="span" id="content10" markdown="1">
        Dr. Light is fucking evil.
</span>
	
	
<span class="span" id="content11" markdown="1">
        Roll is probably evil too.
</span>
	

</span>
</body>