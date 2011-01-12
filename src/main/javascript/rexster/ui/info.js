Rexster.modules.info = function(api) {
	
	var infoContainer = new Info();
	
	function Info(){
		var container = $("#info"),
			containerIcon = container.find(".ui-icon"),
			containerStrong = container.find("strong"),
			containerMessage = container.find("#infoMessage");
		
		this.clear = function() {
			container.hide();
			container.removeAttr("class");
			container.addClass("unit ui-corner-all");
			containerIcon.removeAttr("class");
			containerIcon.addClass("ui-icon");
			containerStrong.text("");
			containerMessage.text("");
			
			container.unbind("click");
			container.click(function() {
				container.hide();
			});
		}
		
		this.display = function(strongText, message, icon, messageType) {
			this.clear();
			container.addClass(messageType);
			containerIcon.addClass(icon);
			containerStrong.text(strongText);
			containerMessage.text(message);
			container.show();
		}
		
		this.displayInfo = function(message) {
			this.display("Info:", message, "ui-icon-info", "ui-state-highlight");
		}
		
		this.displayError = function(message) {
			this.display("Error:", message, "ui-icon-alert", "ui-state-error");
		}
	}
	
	api.showMessageInfo = function(message){
		infoContainer.displayInfo(message);
	};
	
	api.showMessageError = function(message){
		infoContainer.displayError(message);
	};
	
	api.hideMessage = function() {
		infoContainer.clear();
	}
};