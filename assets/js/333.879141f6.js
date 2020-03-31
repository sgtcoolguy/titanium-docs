(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{359:function(e,t,a){"use strict";a.r(t);var i=a(4),o=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-tableviewrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-tableviewrow","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.TableViewRow")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Use the "),a("type-link",{attrs:{type:"Titanium.UI.createTableViewRow"}},[e._v("Titanium.UI.createTableViewRow")]),e._v(" method or "),a("strong",[a("code",[e._v("<TableViewRow>")])]),e._v(" Alloy element to create\na table view row.")],1),e._v(" "),a("p",[e._v("These may be explicitly added to "),a("type-link",{attrs:{type:"Titanium.UI.TableViewSection"}},[e._v("TableViewSection")]),e._v(" objects, which are applied\nto a "),a("type-link",{attrs:{type:"Titanium.UI.TableView"}},[e._v("TableView")]),e._v(". If a table section is not specified, one will be\nautomatically created.")],1),e._v(" "),a("p",[e._v("A row's contents can be as simple as a single line of text, or comprised of a completely\ncustomized layout of child views.")]),e._v(" "),a("h3",{attrs:{id:"creating-table-view-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-table-view-rows","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating Table View Rows")]),e._v(" "),a("p",[e._v("Rows may be created using the properties directly available on the "),a("code",[e._v("TableViewRow")]),e._v(" object, to\nachieve the following:")]),e._v(" "),a("ul",[a("li",[e._v("Row title to display the text content in the row.")]),e._v(" "),a("li",[e._v("Background color and background image.")]),e._v(" "),a("li",[e._v("Images on the left and right sides of the row.")]),e._v(" "),a("li",[e._v("System decorations, such as checkboxes.")])]),e._v(" "),a("p",[e._v("Alternatively, custom layouts of multiple lines of text, different fonts, and additional\nimages or controls can be created by adding child views to the row. In this case, the row's\n"),a("code",[e._v("title")]),e._v(" property should not be set.")]),e._v(" "),a("p",[e._v("As events automatically bubble/propogate to parent views, a listener may be placed on the table\nview to detect events fired from the rows. The benefit is that it is not necessary to\nexplicitly create a listener for every individual row.")]),e._v(" "),a("p",[e._v("See the "),a("type-link",{attrs:{type:"Titanium.UI.TableView"}},[e._v("TableView")]),e._v(" description and examples section for more information\nabout creating table rows.")],1),e._v(" "),a("h3",{attrs:{id:"improved-table-performance-android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improved-table-performance-android","aria-hidden":"true"}},[e._v("#")]),e._v(" Improved Table Performance (Android)")]),e._v(" "),a("p",[e._v("If you are experiencing performance issues on Android when using custom rows, you can\ntry setting the "),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow.className"}},[e._v("className")]),e._v(" property. The class name serves as a\ncue for reusing the underlying views used to display the rows.")],1),e._v(" "),a("p",[e._v("A given "),a("code",[e._v("className")]),e._v(' value indicates a row with a particular set of child views.\nAll rows that share a class name must have the same set of children -- for example, the class\nname "myCustomRow" could identify a row containing two labels and an image view.')]),e._v(" "),a("p",[e._v('The properties of the child controls may be different. For example, each instance of\n"myCustomRow" could have a different image and different text on the labels.')]),e._v(" "),a("p",[e._v("Note that "),a("code",[e._v("className")]),e._v(" is no longer used on iOS, and is ignored.")]),e._v(" "),a("h3",{attrs:{id:"platform-implementation-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#platform-implementation-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Platform Implementation Notes")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("top")]),e._v(", "),a("code",[e._v("left")]),e._v(" and other positional parameters are not used for their usual purposes, because\nthe table view row is automatically positioned by its parent.")]),e._v(" "),a("p",[e._v("On Android, these properties are used to position the content (title) inside the row. For example,\nsetting "),a("code",[e._v("top")]),e._v(" to 20 moves the title down from the top of the row.")]),e._v(" "),a("p",[e._v("On iOS, these values have no effect.")]),e._v(" "),a("p",[e._v("Also, note that the selected text color, "),a("code",[e._v("selectedColor")]),e._v(", can only be set on iOS.\nOn Android, the text color does not change when the row is selected.")]),e._v(" "),a("h3",{attrs:{id:"row-swipe-gestures-android-and-ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-swipe-gestures-android-and-ios","aria-hidden":"true"}},[e._v("#")]),e._v(" Row Swipe Gestures (Android and iOS)")]),e._v(" "),a("p",[e._v("A common requirement is to enable the user to interact with table rows using swipe gestures.\nAs this event is not available for the "),a("code",[e._v("TableViewRow")]),e._v(' object, it will not "bubble up" to the\n'),a("code",[e._v("TableView")]),e._v(", where a "),a("type-link",{attrs:{type:"Titanium.UI.TableView.swipe"}},[e._v("Titanium.UI.TableView.swipe")]),e._v(" is recognized.")],1),e._v(" "),a("p",[e._v("A typical solution is to use a standard view as a container, or wrapper, for all each row's child\nviews, because it recognizes "),a("type-link",{attrs:{type:"Titanium.UI.View.swipe"}},[e._v("Titanium.UI.View.swipe")]),e._v(' events and allows them to pass to the table.\nEach child view should have touch events disabled, so that the container view provides a reliable\nsource for these events. Refer to the "Row Swipe Gestures" example for a demonstration.')],1),e._v(" "),a("p",[e._v("For iOS, read the "),a("type-link",{attrs:{type:"Titanium.UI.TableView"}},[e._v("Row Editing and Moving Modes notes on TableView")]),e._v(" regarding\nthe interactions between edit modes and swipes.")],1),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"simple-table-view-row-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-table-view-row-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Table View Row example")]),e._v(" "),a("p",[e._v("Create a table view row containing a red square view.")]),e._v(" "),a("pre",[a("code",[e._v("var row = Titanium.UI.createTableViewRow();\nvar view = Titanium.UI.createView({\n  backgroundColor:'red',\n  width: 20, height: 20\n});\nrow.add(view);\n")])]),e._v(" "),a("h3",{attrs:{id:"row-swipe-gestures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-swipe-gestures","aria-hidden":"true"}},[e._v("#")]),e._v(" Row Swipe Gestures")]),e._v(" "),a("p",[e._v("Create a table of rows. When a row is swiped, output its ID to the log.")]),e._v(" "),a("pre",[a("code",[e._v("var tableData = [];\n\nvar win = Ti.UI.createWindow({ backgroundColor: 'white' });\n\nvar table = Ti.UI.createTableView({ objName: 'table' });\n\nfor (var i = 0; i <= 20; i++){\n  var row = Ti.UI.createTableViewRow({\n    className: 'row',\n    objName: 'row',\n    touchEnabled: true,\n    height: 100\n  });\n\n  var enabledWrapperView = Ti.UI.createView({\n    backgroundColor:'#008FD5',\n    objName: 'enabledWrapperView',\n    rowID: i,\n    width: Ti.UI.FILL, height: '100%'\n  });\n\n  var disabledWrapperView = Ti.UI.createView({\n    backgroundColor:'#A2E0FF',\n    objName: 'disabledWrapperView',\n    touchEnabled: false,\n    width: 300, height: '80%'\n  });\n  enabledWrapperView.add(disabledWrapperView);\n\n  var label = Ti.UI.createLabel({\n    backgroundColor:'#313F48',\n    color: 'white',\n    objName: 'label',\n    text: i,\n    touchEnabled: false,\n    left: 0,\n    width: 200\n  });\n  disabledWrapperView.add(label);\n\n  row.add(enabledWrapperView);\n  tableData.push(row);\n}\n\ntable.setData(tableData);\n\ntable.addEventListener('swipe', function(e){\n  if (e.source && e.source.objName !== 'table'){\n    Ti.API.info('Row swiped: ' + e.source);\n    Ti.API.info('Row swiped: ' + e.source.objName);\n    Ti.API.info('Row ID : ' + e.source.rowID);\n  }\n});\n\nwin.add(table);\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"alloy-xml-markup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),a("p",[e._v("Previous simple table view row example as an Alloy view.")]),e._v(" "),a("pre",[a("code",[e._v('<Alloy>\n    <TableViewRow id="row">\n        <View id="view" backgroundColor="red" width="20" height="20"/>\n    </TableViewRow>\n</Alloy>\n')])]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);t.default=o.exports}}]);