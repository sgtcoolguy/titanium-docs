(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{592:function(e,r,n){"use strict";n.r(r);var a=n(4),t=Object(a.a)({},function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-android","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.Android")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"android-preferences-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-preferences-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Preferences Example")]),e._v(" "),n("p",[e._v("Create preferences interface for the application.")]),e._v(" "),n("h4",{attrs:{id:"app-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-js","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("code",[e._v("app.js")])]),e._v(" "),n("pre",[n("code",[e._v("var button = Ti.UI.createButton({\n  title:\t'Click to Open Preferences'\n});\nbutton.addEventListener('click', function() {\n  Ti.API.info('Current value for editText: ' + Ti.App.Properties.getString('editText'));\n  Ti.UI.Android.openPreferences();\n});\nTi.UI.currentWindow.add(button);\n")])]),e._v(" "),n("h4",{attrs:{id:"platform-android-res-xml-preferences-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#platform-android-res-xml-preferences-xml","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("code",[e._v("platform/android/res/xml/preferences.xml")])]),e._v(" "),n("pre",[n("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<PreferenceScreen xmlns:android="http://schemas.android.com/apk/res/android"\n    android:title="Preferences">\n  <PreferenceScreen\n      android:title="Misc. Preferences"\n      android:summary="Click to see more options">\n    <EditTextPreference\n      android:title="Edit Text Preference"\n      android:summary="You may enter a string"\n      android:defaultValue=""\n      android:key="editText" />\n  </PreferenceScreen>\n  <PreferenceCategory android:title="Category One">\n    <CheckBoxPreference\n      android:title="CheckBox Preference"\n      android:defaultValue="false"\n      android:summary="You may enter a boolean"\n      android:key="checkbox" />\n    <RingtonePreference\n      android:title="Ringtone Preference"\n      android:summary="You may pick a ringtone"\n      android:defaultValue=""\n      android:key="ringtone" />\n  </PreferenceCategory>\n  <PreferenceCategory android:title="Category Two">\n    <ListPreference\n      android:title="List Preference"\n      android:summary="You may chose from multiple choices"\n      android:key="list"\n    android:entries="@array/listNames"\n    android:entryValues="@array/listValues"\n    />\n  </PreferenceCategory>\n</PreferenceScreen>\n')])]),e._v(" "),n("h4",{attrs:{id:"platform-android-res-values-array-array-xml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#platform-android-res-values-array-array-xml","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("code",[e._v("platform/android/res/values/array/array.xml")])]),e._v(" "),n("pre",[n("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n  <string-array name="listNames">\n    <item>5 Minutes</item>\n    <item>10 Minutes</item>\n    <item>15 Minutes</item>\n    <item>30 Minutes</item>\n    <item>60 Minutes</item>\n  </string-array>\n  <string-array name="listValues">\n    <item>5</item>\n    <item>10</item>\n    <item>15</item>\n    <item>30</item>\n    <item>60</item>\n  </string-array>\n</resources>\n')])]),e._v(" "),n("ApiDocs")],1)},[],!1,null,null,null);r.default=t.exports}}]);