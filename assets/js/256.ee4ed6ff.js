(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{580:function(e,a,i){"use strict";i.r(a);var t=i(4),n=Object(t.a)({},function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-ui-android-searchview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-android-searchview","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.Android.SearchView")]),e._v(" "),i("TypeHeader"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[i("code",[e._v("SearchView")]),e._v(" provides a user interface to enter a search query and submit a request to a search provider.")]),e._v(" "),i("p",[e._v("Search views are most commonly used for filtering the rows in a "),i("type-link",{attrs:{type:"Titanium.UI.TableView"}},[e._v("TableView")]),e._v(".\nSimilar to "),i("type-link",{attrs:{type:"Titanium.UI.SearchBar"}},[e._v("SearchBar")]),e._v(", you can add a search view to a table view by setting the table view's\n"),i("type-link",{attrs:{type:"Titanium.UI.TableView.search"}},[e._v("search")]),e._v(" property. A search view can be used without a "),i("code",[e._v("TableView")]),e._v(".")],1),e._v(" "),i("p",[e._v("You can also use a "),i("code",[e._v("SearchView")]),e._v(" object as the "),i("type-link",{attrs:{type:"Titanium.UI.ListView.searchView"}},[e._v("Titanium.UI.ListView.searchView")]),e._v("\nproperty of a "),i("type-link",{attrs:{type:"Titanium.UI.ListView"}},[e._v("ListView")]),e._v(" object.")],1),e._v(" "),i("p",[e._v("You can also add "),i("code",[e._v("SearchView")]),e._v(" to an "),i("code",[e._v("ActionBar")]),e._v(" as a view (see example below).")]),e._v(" "),i("p",[e._v("Use the "),i("type-link",{attrs:{type:"Titanium.UI.Android.createSearchView"}},[e._v("Titanium.UI.Android.createSearchView")]),e._v(" method or "),i("strong",[i("code",[e._v("<SearchView>")])]),e._v(" Alloy element to create\na search view. You must set the Alloy element's "),i("code",[e._v("ns")]),e._v(" attribute to "),i("strong",[e._v("Ti.UI.Android")]),e._v(":")],1),e._v(" "),i("pre",[i("code",[e._v('<SearchView ns="Ti.UI.Android" platform="android"/>\n')])]),e._v(" "),i("h2",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("h3",{attrs:{id:"search-view-for-table-in-action-bar"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#search-view-for-table-in-action-bar","aria-hidden":"true"}},[e._v("#")]),e._v(" Search View for Table in Action Bar")]),e._v(" "),i("p",[e._v("The following example creates a SearchView widget for a TableView\nand displays it as an Action Bar item if the Google API level is 11 or later.\nIf not, it defaults to use the search bar.")]),e._v(" "),i("pre",[i("code",[e._v("var win = Ti.UI.createWindow({\n    backgroundColor: 'blue',\n    fullscreen: false\n});\n\n// Use action bar search view\nvar search = Ti.UI.Android.createSearchView({\n    hintText: \"Table Search\"\n});\n\nwin.activity.onCreateOptionsMenu = function(e) {\n    var menu = e.menu;\n    var menuItem = menu.add({\n        title: 'Table Search',\n        actionView : search,\n        icon: (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : \"my_search.png\"),\n        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW\n    });\n};\n\nvar data = [];\ndata.push(Ti.UI.createTableViewRow({title:'Apple'}));\ndata.push(Ti.UI.createTableViewRow({title:'Banana'}));\ndata.push(Ti.UI.createTableViewRow({title:'Orange'}));\ndata.push(Ti.UI.createTableViewRow({title:'Raspberry'}));\n\nvar tableview = Titanium.UI.createTableView({\n    data: data,\n    search: search,\n    searchAsChild: false\n});\n\nwin.add(tableview);\nwin.open();\n")])]),e._v(" "),i("h3",{attrs:{id:"alloy-xml-markup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),i("p",[e._v("Previous example as an Alloy project.")]),e._v(" "),i("p",[e._v("index.xml:")]),e._v(" "),i("pre",[i("code",[e._v('<Alloy>\n    <Window id="win" backgroundColor="blue" fullscreen="false" layout="vertical">\n        <TableView id="tableview" top="10" searchAsChild="false">\n            <TableViewRow title="Apple" />\n            <TableViewRow title="Banana" />\n            <TableViewRow title="Orange" />\n            <TableViewRow title="Raspberry" />\n        </TableView>\n    </Window>\n</Alloy>\n')])]),e._v(" "),i("p",[e._v("index.js:")]),e._v(" "),i("pre",[i("code",[e._v('// use action bar search view\nvar search = Alloy.createController("searchview").getView();\n$.tableview.search = search;\n$.win.addEventListener("open", function() {\n    $.win.activity.onCreateOptionsMenu = function(e) {\n        e.menu.add({\n            title: "Table Search",\n            icon: (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png"),\n            actionView: search,\n            showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW\n        });\n    }\n    $.win.activity.invalidateOptionsMenu();\n});\n\n$.win.open();\n')])]),e._v(" "),i("p",[e._v("searchview.xml:")]),e._v(" "),i("pre",[i("code",[e._v('<Alloy>\n    <SearchView id="searchView" ns="Ti.UI.Android" platform="android" hintText="Table Search" />\n</Alloy>\n')])]),e._v(" "),i("ApiDocs")],1)},[],!1,null,null,null);a.default=n.exports}}]);