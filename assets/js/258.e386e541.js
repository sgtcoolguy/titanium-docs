(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{574:function(t,e,a){"use strict";a.r(e);var n=a(4),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-attributedstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-attributedstring","aria-hidden":"true"}},[t._v("#")]),t._v(" Titanium.UI.AttributedString")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The AttributedString proxy is created with the "),a("type-link",{attrs:{type:"Titanium.UI.createAttributedString"}},[t._v("Titanium.UI.createAttributedString")]),t._v(" method.")],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("text")]),t._v(" property must be set initially in the constructor when creating an attributed string.\nThe "),a("type-link",{attrs:{type:"Titanium.UI.AttributedString.attributes"}},[t._v("attributes")]),t._v(" can either be set in the constructor or after it has been created.")],1),t._v(" "),a("p",[t._v("For examples of Attributed Strings, see the\n"),a("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Attributed_Strings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Attributed Strings guide"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"adds-an-array-of-attributes-to-a-label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adds-an-array-of-attributes-to-a-label","aria-hidden":"true"}},[t._v("#")]),t._v(" Adds an array of attributes to a label")]),t._v(" "),a("p",[t._v("Creates an AttributedString proxy, adds some attributes to it, and applies them\nto a "),a("type-link",{attrs:{type:"Titanium.UI.Label"}},[t._v("Titanium.UI.Label")]),t._v(".")],1),t._v(" "),a("pre",[a("code",[t._v("var win = Titanium.UI.createWindow({\n    backgroundColor: '#ddd',\n});\n\nwin.open();\n\nvar text =  'Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.';\n\nvar attr = Titanium.UI.createAttributedString({\n    text: text,\n    attributes: [\n        // Underlines text\n        {\n            type: Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE,\n            value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,\n            range: [text.indexOf('Titanium'), ('Titanium').length]\n        },\n        // Sets a background color\n        {\n            type: Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR,\n            value: \"red\",\n            range: [text.indexOf('Appcelerator'), ('Appcelerator').length]\n        },\n        {\n            type: Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR,\n            value: \"blue\",\n            range: [text.indexOf('Titanium'), ('Titanium').length]\n        },\n        {\n            type: Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR,\n            value: \"yellow\",\n            range: [text.indexOf('rocks!'), ('rocks!').length]\n        },\n        // Sets a foreground color\n        {\n            type: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,\n            value: \"orange\",\n            range: [0,  text.length]\n        },\n        {\n            type: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,\n            value: \"black\",\n            range: [text.indexOf('rocks!'), ('rocks!').length]\n        }\n    ]\n});\n\nvar label = Titanium.UI.createLabel({\n    left: 20,\n    right: 20,\n    height: Titanium.UI.SIZE,\n    attributedString: attr\n});\n\nwin.add(label);\n")])]),t._v(" "),a("h3",{attrs:{id:"adds-attributes-one-by-one"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adds-attributes-one-by-one","aria-hidden":"true"}},[t._v("#")]),t._v(" Adds attributes, one by one.")]),t._v(" "),a("p",[t._v("var win = Titanium.UI.createWindow({\nbackgroundColor: '#ddd',\n});")]),t._v(" "),a("p",[t._v("win.open();")]),t._v(" "),a("p",[t._v("var text =  'Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.';")]),t._v(" "),a("p",[t._v("var attr = Titanium.UI.createAttributedString({\ntext: text\n});")]),t._v(" "),a("p",[t._v("// Underlines text\nattr.addAttribute({\ntype: Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE,\nrange: [0, text.length]\n});")]),t._v(" "),a("p",[t._v("var label = Titanium.UI.createLabel({\nleft: 20,\nright: 20,\nheight: Titanium.UI.SIZE,\nattributedString: attr\n});")]),t._v(" "),a("p",[t._v("win.add(label);")]),t._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);e.default=r.exports}}]);