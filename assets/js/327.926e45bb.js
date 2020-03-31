(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{374:function(e,t,i){"use strict";i.r(t);var a=i(4),r=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-ui-slider"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-slider","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.Slider")]),e._v(" "),i("TypeHeader"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("table",{attrs:{id:"platformComparison"}},[i("tbody",[i("tr",[i("td",[i("img",{attrs:{src:"images/slider/slider_android.png",height:"25"}})]),e._v(" "),i("td",[i("img",{attrs:{src:"images/slider/slider_ios.png",height:"25"}})]),e._v(" "),i("td",[i("img",{attrs:{src:"images/slider/slider_wp.png",height:"25"}})])])]),e._v(" "),i("tfoot",[i("tr",[i("th",[e._v("Android")]),e._v(" "),i("th",[e._v("iOS")]),e._v(" "),i("th",[e._v("Windows Phone")])])])]),e._v(" "),i("p",[e._v("A slider lets the user select from a range of values by dragging the slider thumb.")]),e._v(" "),i("p",[e._v("Use the "),i("type-link",{attrs:{type:"Titanium.UI.createSlider"}},[e._v("Titanium.UI.createSlider")]),e._v(" method or "),i("strong",[i("code",[e._v("<Slider>")])]),e._v(" Alloy element to create a slider.")],1),e._v(" "),i("h3",{attrs:{id:"android-platform-implementation-notes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-implementation-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Platform Implementation Notes")]),e._v(" "),i("p",[e._v("On Android, the user can also maniuplate the slider using the arrow keys. For this\nreason, placing other focusable UI elements to the left or right of\nthe slider is not recommended.")]),e._v(" "),i("p",[e._v("On Android, both "),i("code",[e._v("min")]),e._v(" and "),i("code",[e._v("max")]),e._v(" must be specified for the slider to work properly.")]),e._v(" "),i("p",[e._v("Earlier versions of the Titanium SDK implicitly enforced that both the "),i("type-link",{attrs:{type:"Titanium.UI.Slider.leftTrackImage"}},[e._v("leftTrackImage")]),e._v(" and\n"),i("type-link",{attrs:{type:"Titanium.UI.Slider.rightTrackImage"}},[e._v("rightTrackImage")]),e._v(" properties be specified before the properties would be honored. Beginning with\nTitanium SDK 4.0.0 this limitation has been removed. However it is recommended that either both or neither be specified.")],1),e._v(" "),i("h2",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("h3",{attrs:{id:"simple-slider"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simple-slider","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Slider")]),e._v(" "),i("p",[e._v("The following sample demonstrates creating a slider and adding a listener to\nhandle the change events.")]),e._v(" "),i("pre",[i("code",[e._v("var slider = Titanium.UI.createSlider({\n    top: 50,\n    min: 0,\n    max: 100,\n    width: Ti.UI.FILL,\n    value: 50\n    });\n\nvar label = Ti.UI.createLabel({\n    text: slider.value,\n    width: Ti.UI.FILL,\n    top: 30,\n    left: 0,\n    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER\n});\n\nslider.addEventListener('change', function(e) {\n    label.text = String.format('%3.1f', e.value);\n});\n")])]),e._v(" "),i("h3",{attrs:{id:"alloy-xml-markup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),i("p",[e._v("Previous example as an Alloy view.")]),e._v(" "),i("p",[e._v("Implement the "),i("code",[e._v("updateLabel")]),e._v(" callback in the controller to update the label value\nand set the initial "),i("code",[e._v("text")]),e._v(" value for the label in the TSS file or controller.")]),e._v(" "),i("p",[e._v("index.xml:")]),e._v(" "),i("pre",[i("code",[e._v('<Alloy>\n    <Window id="window" backgroundColor="white">\n        <Slider id="slider" top="50" min="0" max="100" width="Ti.UI.FILL" value="50" onChange="updateLabel"/>\n        <Label id="label" width="Ti.UI.FILL" top="30" left="0" />\n    </Window>\n</Alloy>\n')])]),e._v(" "),i("p",[e._v("index.js:")]),e._v(" "),i("pre",[i("code",[e._v("$.slider.text = $.slider.value;\nfunction updateLabel(e) {\n    $.label.text = String.format('%3.1f', e.value);\n}\n$.window.open();\n")])]),e._v(" "),i("ApiDocs")],1)},[],!1,null,null,null);t.default=r.exports}}]);