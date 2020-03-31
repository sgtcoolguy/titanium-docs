(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{571:function(t,e,o){"use strict";o.r(e);var n=o(4),a=Object(n.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"titanium-ui-button"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-button","aria-hidden":"true"}},[t._v("#")]),t._v(" Titanium.UI.Button")]),t._v(" "),o("TypeHeader"),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("table",{attrs:{id:"platformComparison"}},[o("tbody",[o("tr",[o("td",[o("img",{attrs:{src:"images/button/button_android.png",height:"50"}})]),t._v(" "),o("td",[o("img",{attrs:{src:"images/button/button_ios.png",height:"50"}})]),t._v(" "),o("td",[o("img",{attrs:{src:"images/button/button_wp.png",height:"50"}})])])]),t._v(" "),o("tfoot",[o("tr",[o("th",[t._v("Android")]),t._v(" "),o("th",[t._v("iOS")]),t._v(" "),o("th",[t._v("Windows Phone")])])])]),t._v(" "),o("p",[t._v("A button displays its  selected state while it is being pressed. The focused state is\nonly used on Android devices that have navigation keys or a keyboard, to indicate\nwhich button has input focus.")]),t._v(" "),o("p",[t._v("You can specify background images for each state, as well as button text and a button\nicon. On iOS, there are button styles which define appearance for each state, even if\nno button images are set.")]),t._v(" "),o("p",[t._v("Use the "),o("type-link",{attrs:{type:"Titanium.UI.createButton"}},[t._v("Titanium.UI.createButton")]),t._v(" method or a "),o("strong",[o("code",[t._v("<Button>")])]),t._v(" Alloy element to create a button\n(see "),o("a",{attrs:{href:"#!/api/Titanium.UI.Button-examples"}},[t._v("Examples")]),t._v(") .")],1),t._v(" "),o("h3",{attrs:{id:"android-platform-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-notes","aria-hidden":"true"}},[t._v("#")]),t._v(" Android Platform Notes")]),t._v(" "),o("p",[t._v("Android uses default button images for the normal, focused, selected and disabled\nstates. If you use a custom button image, you should specify versions for the focused\nand selected states (and the disabled state, if the button is ever disabled).")]),t._v(" "),o("p",[t._v("Android also supports setting the background color for each of the states. These are not\nsupported on iOS.")]),t._v(" "),o("h3",{attrs:{id:"ios-platform-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-notes","aria-hidden":"true"}},[t._v("#")]),t._v(" iOS Platform Notes")]),t._v(" "),o("p",[t._v("iOS buttons have two special properties, "),o("code",[t._v("style")]),t._v(" and "),o("code",[t._v("systemButton")]),t._v(".")]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("style")]),t._v(" property specifies the type of button decoration, and can be set to one\nof the values described in "),o("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButtonStyle"}},[t._v("Titanium.UI.iOS.SystemButtonStyle")]),t._v(".")],1),t._v(" "),o("p",[t._v("To use a custom button style, such as a background gradient, you may need to explicitly set\nthe button's "),o("code",[t._v("style")]),t._v(" property to "),o("code",[t._v("PLAIN")]),t._v(", to prevent the button style from overriding any background color or gradient.")]),t._v(" "),o("p",[t._v("Also note:")]),t._v(" "),o("ul",[o("li",[t._v("When assigning a custom image to the "),o("code",[t._v("backgroundImage")]),t._v(" property, the image must be\npartially or wholly transparent for the background color or background gradient to be visible.")]),t._v(" "),o("li",[t._v("Similarly, for an assigned background gradient to show through, the "),o("code",[t._v("backgroundColor")]),t._v(" may need to be\nset to 'transparent'.")])]),t._v(" "),o("p",[t._v("Unlike Android, iOS doesn't supply any default background images for buttons--\nsystem button styles serve this purpose.")]),t._v(" "),o("p",[t._v("The "),o("code",[t._v("systemButton")]),t._v(" property lets you create a predefined system-defined button,\nsuch as the "),o("strong",[t._v("Camera")]),t._v(" or "),o("strong",[t._v("Add")]),t._v(" buttons, for use in toolbars and nav bars.\nSpecifically, system buttons may be used in the following locations:")]),t._v(" "),o("ul",[o("li",[o("type-link",{attrs:{type:"Titanium.UI.iOS.Toolbar"}},[t._v("Titanium.UI.iOS.Toolbar")]),t._v(". The "),o("code",[t._v("items")]),t._v(" array can contain system buttons.")],1),t._v(" "),o("li",[o("type-link",{attrs:{type:"Titanium.UI.iPad.Popover"}},[t._v("Titanium.UI.iPad.Popover")]),t._v(". The "),o("code",[t._v("leftNavButton")]),t._v(" and "),o("code",[t._v("rightNavButton")]),t._v(" properties can\nrefer to system buttons")],1),t._v(" "),o("li",[o("type-link",{attrs:{type:"Titanium.UI.iPad.SplitWindow"}},[t._v("Titanium.UI.iPad.SplitWindow")]),t._v(". The "),o("code",[t._v("toolbar")]),t._v(" array can contain system buttons.")],1),t._v(" "),o("li",[o("type-link",{attrs:{type:"Titanium.UI.TextField"}},[t._v("Titanium.UI.TextField")]),t._v(". The "),o("code",[t._v("keyboardToolbar")]),t._v(" array can contain system buttons.")],1),t._v(" "),o("li",[o("type-link",{attrs:{type:"Titanium.UI.TextArea"}},[t._v("Titanium.UI.TextArea")]),t._v(". The "),o("code",[t._v("keyboardToolbar")]),t._v(" array can contain system buttons.")],1),t._v(" "),o("li",[o("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Titanium.UI.Window")]),t._v(". The "),o("code",[t._v("leftNavButton")]),t._v(" and "),o("code",[t._v("rightNavButton")]),t._v(" properties can refer to\nsystem buttons and the "),o("code",[t._v("toolbar")]),t._v(" array can contain system buttons.")],1)]),t._v(" "),o("p",[t._v("Use the constants in "),o("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButton"}},[t._v("Titanium.UI.iOS.SystemButton")]),t._v("\nto specify a button type. The size, style and decoration of system buttons is set\nautomatically, so you can create a button by setting only the "),o("code",[t._v("systemButton")]),t._v(" property.")],1),t._v(" "),o("p",[t._v("For example:")]),t._v(" "),o("pre",[o("code",[t._v("var cancelButton = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CANCEL });\n")])]),t._v(" "),o("p",[t._v("In Alloy, you can omit the namespace when setting the "),o("code",[t._v("systemButton")]),t._v(" property:")]),t._v(" "),o("pre",[o("code",[t._v('<Button id="cancelbtn" systemButton="CANCEL"></Button>\n')])]),t._v(" "),o("p",[t._v("Note that the "),o("code",[t._v("systemButton")]),t._v(" property specifies "),o("em",[t._v("appearance")]),t._v(", not behavior. For\nexample, to bring up the camera when the user presses the "),o("strong",[t._v("Camera")]),t._v(" button, you must\nadd an event listener to the button and call "),o("type-link",{attrs:{type:"Titanium.Media.showCamera"}},[t._v("Titanium.Media.showCamera")]),t._v(" when the\nbutton is clicked.")],1),t._v(" "),o("h4",{attrs:{id:"ios-pressed-button-effects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-pressed-button-effects","aria-hidden":"true"}},[t._v("#")]),t._v(" iOS Pressed Button Effects")]),t._v(" "),o("p",[t._v("If you do not supply separate background images for the normal and selected states,\niOS supplies a built-in effect for pressed buttons. For most iOS buttons, the effect\ndims the entire button (except for the text) while the button is being pressed.")]),t._v(" "),o("p",[t._v("For toolbar buttons that use the "),o("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButtonStyle.PLAIN"}},[t._v("PLAIN")]),t._v(" style\nor use system icons such as "),o("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButton.CAMERA"}},[t._v("CAMERA")]),t._v(", a glow effect is\nused. The glow effect shows as a white circular glow or highlight at the center of the button\nwhen the button is pressed.")],1),t._v(" "),o("h2",{attrs:{id:"examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),o("h3",{attrs:{id:"simple-button-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simple-button-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Simple Button Example")]),t._v(" "),o("p",[t._v("var button = Titanium.UI.createButton({\ntitle: 'Hello',\ntop: 10,\nwidth: 100,\nheight: 50\n});\nbutton.addEventListener('click',function(e)\n{\nTitanium.API.info(\"You clicked the button\");\n});")]),t._v(" "),o("h3",{attrs:{id:"alloy-xml-markup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),o("p",[t._v("Previous example as an Alloy view.")]),t._v(" "),o("p",[t._v("button.xml:")]),t._v(" "),o("pre",[o("code",[t._v('<Alloy>\n    <Window id="win" backgroundColor="white">\n        \x3c!-- The title property can also be defined as node text. --\x3e\n        <Button id="button" onClick="doClick" title="Hello"\n            top="10" width="100" height="50" />\n    </Window>\n</Alloy>\n')])]),t._v(" "),o("p",[t._v("button.js:")]),t._v(" "),o("pre",[o("code",[t._v('function doClick(e){\n    Titanium.API.info("You clicked the button");\n};\n')])]),t._v(" "),o("ApiDocs")],1)},[],!1,null,null,null);e.default=a.exports}}]);