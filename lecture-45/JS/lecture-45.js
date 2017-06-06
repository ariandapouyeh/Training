var Fjordbakkeskolen = new Object();
Fjordbakkeskolen.leder = "børge";
Fjordbakkeskolen.lærer = new Object();
Fjordbakkeskolen.lærer.b = "Gitte";
console.log(Fjordbakkeskolen.lærer.b + " er 9.B's lærer og " + Fjordbakkeskolen.leder + " er lederen.");
Fjordbakkeskolen.klasse = new Object();
Fjordbakkeskolen.klasse.elev = new Object();
var darkinvader = "Arian Dapouyeh";
Fjordbakkeskolen.klasse.elev.arian = darkinvader;
console.log(Fjordbakkeskolen.klasse.elev.arian);
Fjordbakkeskolen.klasse.elev["augi hil"] = "August Hilger";
console.log(Fjordbakkeskolen.klasse.elev["augi hil"]);

var ottende = {
	klasser: {
		"class 1": "8.A",
		"class 2": "8.B"
	},
	lærer: {
		Gitte: {
			firstName: "Gitte",
			lastName: "Klausen"
		}
	}
};

console.log(ottende.lærer.Gitte.firstName + " " + ottende.lærer.Gitte.lastName + " is our teacher, RIP!");