/********************************************************

Operating System
--------------------------
Name	: Alexander Trianto Kurniawan
NIM		: 1601285494

*********************************************************/


var proButt = document.getElementById("probutton");
var conButt = document.getElementById("conbutton");
var sleepProducer = 0;
var itemCount = 0;
var sleepConsumer = 0;
var BUFFER_SIZE = document.getElementById("buff").value;

function producer(){
	BUFFER_SIZE = document.getElementById("buff").value;
	document.getElementById("probutton").disabled = true; 
	document.getElementById("conbutton").disabled = false;
	document.getElementById("infoProducer").innerHTML += "Producer is waking up...<br>";
	//clearInterval(sleepConsumer);
    sleepProducer = setInterval(function(){
		if (itemCount == BUFFER_SIZE) {
	        clearInterval(sleepProducer); //sleep
	        document.getElementById("infoProducer").innerHTML += "Sleep...<br>";
	        consumer();
	    }
	    else{
	    	temp = itemCount + 1;
			$('#buffers').append('<span id="xx">| '+ temp +' |</span>');
			itemCount+=1;
			document.getElementById("infoProducer").innerHTML += "Producer is adding item |"+ itemCount +"|<br>";
			if(itemCount >= 2) consumer();
		}
			var element = document.getElementById("scroll");
			element.scrollTop = element.scrollHeight;

	}, 1200);
}


function consumer(){
	document.getElementById("probutton").disabled = false; 
	document.getElementById("conbutton").disabled = true;
	//clearInterval(sleepProducer);
	document.getElementById("infoConsumer").innerHTML += "Consumer is waking up...<br>";
	sleepConsumer = setInterval(function(){
		if(itemCount == 0){
			clearInterval(sleepConsumer); //sleep
			document.getElementById("infoConsumer").innerHTML += "Sleep...<br>";
			producer(); 
		}
		else{
			$('#xx:nth-last-child(2)').remove();
			document.getElementById("infoConsumer").innerHTML += "Consumer is taking item |"+ itemCount +"|<br>";
			itemCount-=1;
		}
		var c = document.getElementById("scroll2");
		c.scrollTop = c.scrollHeight;
		console.log(itemCount);

	}, 1000);
}
