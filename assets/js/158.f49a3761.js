(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{549:function(e,t,n){"use strict";n.r(t);var a=n(4),i=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-android-actionbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-android-actionbar","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.Android.ActionBar")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Starting with Release 3.3.0, the Titanium SDK uses the appcompat library to provide support for\nthe action bar, including devices running Android 2.3.x and prior. If you are using a release earlier\nthan 3.3.0, refer to the "),n("em",[e._v("Applicaton Note")]),e._v(" below for additional information.")]),e._v(" "),n("p",[e._v("You can add action items to the action bar by defining an Android menu and setting the\nmenu items to display as action items. See "),n("type-link",{attrs:{type:"Titanium.Android.Menu"}},[e._v("Menu")]),e._v(" and\n"),n("type-link",{attrs:{type:"Titanium.Android.MenuItem"}},[e._v("MenuItem")]),e._v(" for details.")],1),e._v(" "),n("p",[e._v("In JavaScript, wait for the window or tab group's "),n("code",[e._v("open")]),e._v(" event before accessing\nthe action bar from the window or tab group's "),n("type-link",{attrs:{type:"Titanium.Android.Activity"}},[e._v("activity")]),e._v(".")],1),e._v(" "),n("p",[e._v("Note that setting the "),n("type-link",{attrs:{type:"Titanium.UI.Window.navBarHidden"}},[e._v("Window.navBarHidden")]),e._v(" property\nto true disables the Action Bar since it is part of the navigation title bar.")],1),e._v(" "),n("p",[e._v("For more examples on using the Action Bar, refer to the\n"),n("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Android_Action_Bar",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Action Bar guide"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"application-notes-for-alloy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-notes-for-alloy","aria-hidden":"true"}},[e._v("#")]),e._v(" Application Notes for Alloy")]),e._v(" "),n("p",[e._v("Starting with Alloy 1.5.0, you can add ActionBar attributes to the "),n("code",[e._v("ActionBar")]),e._v(" element.\nTo use the action bar, add the "),n("code",[e._v("<ActionBar>")]),e._v(" tag as a child of either a\na "),n("code",[e._v("<Window>")]),e._v(" or "),n("code",[e._v("<TabGroup>")]),e._v(", then set ActionBar attributes in either the XML or TSS file.")]),e._v(" "),n("p",[e._v("Starting with Alloy 1.4.0, you can also add ActionBar attributes to the "),n("code",[e._v("Menu")]),e._v(" element.\nDo not define ActionBar attributes in both the "),n("code",[e._v("ActionBar")]),e._v(" and "),n("code",[e._v("Menu")]),e._v(" elements. Only define the\nattributes in one element.")]),e._v(" "),n("p",[e._v("To add action items to the action bar, add the "),n("code",[e._v("<Menu>")]),e._v(" tag as a child of either\na "),n("code",[e._v("<Window>")]),e._v(" or "),n("code",[e._v("<TabGroup>")]),e._v(", then add "),n("code",[e._v("<MenuItem>")]),e._v(" tags as children of the "),n("code",[e._v("<Menu>")]),e._v(" tag.\nSet MenuItem attributes in either the XML or TSS file.")]),e._v(" "),n("p",[e._v('For an example of using the Action Bar with Alloy, see "Action Bar using Alloy XML Markup" below.')]),e._v(" "),n("h3",{attrs:{id:"action-bar-icon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action-bar-icon","aria-hidden":"true"}},[e._v("#")]),e._v(" Action Bar Icon")]),e._v(" "),n("p",[e._v("Starting with Release 4.0, due to the requirement that the target SDK must be set to Android 5.0\n(API level 21) or higher, the action bar icon may not display. Google is discouraging\nthe use of icons in toolbars:")]),e._v(" "),n("pre",[n("code",[e._v("In modern Android UIs developers should lean more on a visually distinct color scheme for toolbars\nthan on their application icon. The use of application icon plus title as a standard layout is\ndiscouraged on API 21 devices and newer.\n")])]),e._v(" "),n("p",[e._v("Source: "),n("a",{attrs:{href:"https://developer.android.com/reference/android/support/v7/widget/Toolbar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Developer: Toolbar API reference"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"application-note-for-release-3-2-x-and-earlier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-note-for-release-3-2-x-and-earlier","aria-hidden":"true"}},[e._v("#")]),e._v(" Application Note for Release 3.2.x and earlier")]),e._v(" "),n("p",[e._v("If you are using Release 3.2.x or earlier, this feature is only available in Android 3.0\n(API level 11) and above.")]),e._v(" "),n("p",[e._v("To access the action bar, you must first open a heavyweight window or tab group that\nuses one of the action bar themes (such as the Android Holo theme).")]),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"action-bar-using-alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action-bar-using-alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Action Bar using Alloy XML Markup")]),e._v(" "),n("p",[e._v("Adds action items and sets several properties on a window's action bar in the XML and TSS files.")]),e._v(" "),n("p",[n("code",[e._v("app/views/index.xml")]),e._v(":")]),e._v(" "),n("pre",[n("code",[e._v('<Alloy>\n    <Window title="My Test App">\n        <ActionBar id="actionbar" title="My XML Menu" onHomeIconItemSelected="doMenuClick" />\n        <Menu>\n            <MenuItem id="item1" title="Settings" onClick="openSettings" />\n            <MenuItem id="item2" title="Search" onClick="doSearch" />\n        </Menu>\n        <Label id="label">Welcome!</Label>\n    </Window>\n</Alloy>\n')])]),e._v(" "),n("p",[n("code",[e._v("app/styles/index.tss")]),e._v(":")]),e._v(" "),n("pre",[n("code",[e._v('"MenuItem": {\n    showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS\n},\n"#item1": {\n    icon: Ti.Android.R.drawable.ic_menu_preferences\n},\n"#item2": {\n    icon: Ti.Android.R.drawable.ic_menu_search\n},\n"#actionbar": {\n    icon: "/actionicon.png",\n    displayHomeAsUp: true,\n    backgroundImage: "/actionbackground.png"\n}\n')])]),e._v(" "),n("h3",{attrs:{id:"action-bar-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action-bar-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Action Bar Example")]),e._v(" "),n("p",[e._v("The following example sets several properties on a window's action bar.")]),e._v(" "),n("pre",[n("code",[e._v('var win = Ti.UI.createWindow({\n    title: "Old Title",\n    navBarHidden: false\n});\nvar actionBar;\n\nwin.addEventListener("open", function() {\n    if (Ti.Platform.osname === "android") {\n        if (! win.activity) {\n            Ti.API.error("Can\'t access action bar on a lightweight window.");\n        } else {\n            actionBar = win.activity.actionBar;\n            if (actionBar) {\n                actionBar.backgroundImage = "/bg.png";\n                actionBar.title = "New Title";\n                actionBar.onHomeIconItemSelected = function() {\n                    Ti.API.info("Home icon clicked!");\n                };\n            }\n        }\n    }\n});\n\nwin.open();\n')])]),e._v(" "),n("p",[e._v("Nearly identical code can be used for a tab group, but in Release 3.0, the tab group's\nactivity must be accessed using the "),n("a",{attrs:{href:"Titanium.UI.TabGroup.getActivity"}},[e._v("getActivity")]),e._v(" method.")]),e._v(" "),n("ApiDocs")],1)},[],!1,null,null,null);t.default=i.exports}}]);