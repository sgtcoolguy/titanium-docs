(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{594:function(e,t,r){"use strict";r.r(t);var i=r(4),p=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"titanium-app-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.App.Properties")]),e._v(" "),r("TypeHeader"),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("h3",{attrs:{id:"app-properties-in-the-tiapp-xml-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app-properties-in-the-tiapp-xml-file","aria-hidden":"true"}},[e._v("#")]),e._v(" App Properties in the tiapp.xml file")]),e._v(" "),r("p",[e._v("App properties defined in the "),r("code",[e._v("tiapp.xml")]),e._v(" file may be accessed using these APIs.  An app\nproperty is defined inside the root-level "),r("code",[e._v("<ti:app>")]),e._v(" element with the "),r("code",[e._v("<property>")]),e._v(" element.\nUse the "),r("code",[e._v("name")]),e._v(" attribute to define your property name and place the value inline with the\n"),r("code",[e._v("<property>")]),e._v(" element. For example, to define an app property called "),r("code",[e._v("foo")]),e._v(" with the value "),r("code",[e._v("42")]),e._v(":")]),e._v(" "),r("pre",[r("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<ti:app xmlns:ti="http://ti.appcelerator.org">\n    <property name="foo" type="string">42</property>\n</ti:app>\n')])]),e._v(" "),r("p",[e._v("Then, you can retrieve the property during runtime with the following API call:")]),e._v(" "),r("pre",[r("code",[e._v("var foo = Ti.App.Properties.getString('foo');\n")])]),e._v(" "),r("p",[e._v("As of Release 3.2.0, any application properties defined in the "),r("code",[e._v("tiapp.xml")]),e._v(" file are stored in the\ndevice's secure storage, making them read-only.  Additionally, external access to these\nproperties is now restricted.  Other iOS applications cannot access these properties and\nnative Android modules must use the Titanium module API\n"),r("a",{attrs:{href:"https://docs.appcelerator.com/module-apidoc/latest/android/org/appcelerator/platform/TiApplication.html#getAppProperties()",target:"_blank",rel:"noopener noreferrer"}},[e._v("TiApplication.getAppProperties"),r("OutboundLink")],1),e._v("\nmethod to access these properties.")]),e._v(" "),r("p",[e._v("If you need to change the values during runtime, initially create the property with these APIs\nrather than defining them in the "),r("code",[e._v("tiapp.xml")]),e._v(" file.")]),e._v(" "),r("p",[e._v("Prior to Release 3.2.0, application properties defined in the "),r("code",[e._v("tiapp.xml")]),e._v(" file could be\noverwritten by these APIs and accessed externally by other applications and modules.")]),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"store-a-property"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#store-a-property","aria-hidden":"true"}},[e._v("#")]),e._v(" Store a property")]),e._v(" "),r("p",[e._v("Store a string property.")]),e._v(" "),r("pre",[r("code",[e._v("Ti.App.Properties.setString('givenName', 'Paul');\nTi.API.info('The value of the givenName property is: ' + Ti.App.Properties.getString('givenName'));\n")])]),e._v(" "),r("h3",{attrs:{id:"enumerate-over-saved-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enumerate-over-saved-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Enumerate over saved properties")]),e._v(" "),r("p",[e._v("Output all saved properties to the console.")]),e._v(" "),r("pre",[r("code",[e._v("var props = Ti.App.Properties.listProperties();\n\nfor (var i=0, ilen=props.length; i<ilen; i++){\n    var value = Ti.App.Properties.getString(props[i]);\n    Ti.API.info(props[i] + ' = ' + value);\n}\n")])]),e._v(" "),r("ApiDocs")],1)},[],!1,null,null,null);t.default=p.exports}}]);