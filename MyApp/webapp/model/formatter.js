sap.ui.define([], function() {
	"use strict";

	return {
		delivery: function(sMeasure, iWeight) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle(),
				sResult = "";

			if(sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}
			return sResult;
		},
		
		formatMapUrl : function(iStreet, iCity, iCountry) {
			var tResult = "http://maps.googleapis.com/maps/api/staticmap?center=" + iStreet + "," + iCity + "," + iCountry + "&size=600x300&zoom=13&" + "&markers=color:red|"+ iStreet + "," + iCity + "," + iCountry;
			return tResult;
		}
	};
});