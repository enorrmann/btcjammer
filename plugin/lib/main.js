var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var Request = require("sdk/request").Request;

require("sdk/tabs").on("ready", runScript);

function runScript(tab) {

	var taburl = tab.url + "";
	
	if (taburl.indexOf("btcjam.com/users") == -1) {
		return;
	}

	var lasti = taburl.lastIndexOf("/");
	var userId = taburl.substr(lasti + 1);

	var w1 = tab.attach({
		contentScriptFile : [ self.data.url("jquery-1.4.2.min.js"),
				self.data.url("jammer.js") ]
	});

	var jammerRequest = Request({
		url : "http://jam.sd.ai/users/" + userId + "/al_chart_data",
		onComplete : function(response) {
			w1.port.emit("replacePage", response.text);
		}
	});

	jammerRequest.get();

}