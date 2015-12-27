			var date = new Date();		
			var hours = open(date.getFullYear(), date.getMonth(), date.getDate(), date.getDay(), date.getHours());
			document.getElementById("container").innerHTML = "<h3>" + hours + "</h3>";