(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{595:function(e,t,a){"use strict";a.r(t);var i=a(4),n=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-alertdialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-alertdialog","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.AlertDialog")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("table",{attrs:{id:"platformComparison"}},[a("tbody",[a("tr",[a("td",[a("img",{attrs:{src:"images/alertdialog/alertdialog_android.png",height:"75"}})]),e._v(" "),a("td",[a("img",{attrs:{src:"images/alertdialog/alertdialog_ios.png",height:"75"}})]),e._v(" "),a("td",[a("img",{attrs:{src:"images/alertdialog/alertdialog_wp.png",height:"75"}})])])]),e._v(" "),a("tfoot",[a("tr",[a("th",[e._v("Android")]),e._v(" "),a("th",[e._v("iOS")]),e._v(" "),a("th",[e._v("Windows Phone")])])])]),e._v(" "),a("p",[e._v("An alert dialog is created using "),a("type-link",{attrs:{type:"Titanium.UI.createAlertDialog"}},[e._v("Titanium.UI.createAlertDialog")]),e._v(" or "),a("strong",[a("code",[e._v("<AlertDialog>")])]),e._v(" Alloy element.")],1),e._v(" "),a("p",[e._v("Although this dialog always appears in the middle of the display (not touching the edges),\nother aspects of its aesthetics and the way the user interacts with it are different for each\nplatform, as described below.")]),e._v(" "),a("h3",{attrs:{id:"android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android","aria-hidden":"true"}},[e._v("#")]),e._v(" Android")]),e._v(" "),a("p",[e._v("On Android, the default alert dialog displays text information, via a title and message, without\nany buttons. As the user can use the system hardware "),a("code",[e._v("back")]),e._v(" button to dismiss it, a button is\noptional.")]),e._v(" "),a("p",[e._v("Buttons are shown if the "),a("code",[e._v("buttonNames")]),e._v(" property is defined, and are rendered horizontally below\nthe message.")]),e._v(" "),a("p",[e._v("To create a custom layout, a view may be added and, in turn, a hierarchy of views added to that\nchild view.")]),e._v(" "),a("h3",{attrs:{id:"ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS")]),e._v(" "),a("p",[e._v("On iOS, the default alert dialog displays text information, via a title and message, with\na single button to allow it to be dismissed.")]),e._v(" "),a("p",[e._v("Buttons are defined using the "),a("code",[e._v("buttonNames")]),e._v(" property and are rendered vertically below\nthe message. Alert dialogs are automatically cancelled when the application is\npaused/suspended. This behavior can be avoided by setting "),a("code",[e._v("persistent")]),e._v(" property on alert dialog\nto be "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("style")]),e._v(" property can be used to allow the user to enter plain text,\nobscured text or login identifier and password. Entered values can be captured with listening\n"),a("code",[e._v("cancel")]),e._v(" event.")]),e._v(" "),a("p",[e._v("Starting at Titanium SDK 5.1.0, you can also specify the "),a("code",[e._v("placeholder")]),e._v(", "),a("code",[e._v("keyboardType")]),e._v(" and "),a("code",[e._v("returnKeyType")]),e._v("\nproperties when using the alert dialog style "),a("type-link",{attrs:{type:"Titanium.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT"}},[e._v("Titanium.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT")]),e._v(" or\n"),a("type-link",{attrs:{type:"Titanium.UI.iOS.AlertDialogStyle.SECURE_TEXT_INPUT"}},[e._v("Titanium.UI.iOS.AlertDialogStyle.SECURE_TEXT_INPUT")]),e._v(".\nWhen using the alert dialog style "),a("type-link",{attrs:{type:"Titanium.UI.iOS.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT"}},[e._v("Titanium.UI.iOS.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT")]),e._v(", you can\nspecify the "),a("code",[e._v("loginPlaceholder")]),e._v(", "),a("code",[e._v("loginKeyboardType")]),e._v(" and "),a("code",[e._v("loginReturnKeyType")]),e._v(" properties for the login field,\nas well as the "),a("code",[e._v("passwordPlaceholder")]),e._v(", "),a("code",[e._v("passwordKeyboardType")]),e._v(" and "),a("code",[e._v("passwordReturnKeyType")]),e._v(" properties for the password field.")],1),e._v(" "),a("h3",{attrs:{id:"global-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-alias","aria-hidden":"true"}},[e._v("#")]),e._v(" Global Alias")]),e._v(" "),a("p",[e._v("A global method "),a("code",[e._v("alert()")]),e._v(" is aliased to this object, and can be invoked with a single message.\nFor example")]),e._v(" "),a("pre",[a("code",[e._v("alert('this is a message');\n")])]),e._v(" "),a("p",[e._v('This will generate an alert with a title of "Alert" and an "OK" button.')]),e._v(" "),a("h3",{attrs:{id:"caveats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caveats","aria-hidden":"true"}},[e._v("#")]),e._v(" Caveats")]),e._v(" "),a("p",[e._v("Multiple alerts should not be shown at once.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("title")]),e._v(" and "),a("code",[e._v("ok")]),e._v(" properties cannot be changed while the alert dialog is being displayed. On\nAndroid only, you can change the "),a("code",[e._v("message")]),e._v(" property while the alert dialog is being displayed.")]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"single-button-alert-dialog-using-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-button-alert-dialog-using-alias","aria-hidden":"true"}},[e._v("#")]),e._v(" Single-button Alert Dialog (using alias)")]),e._v(" "),a("p",[e._v("Create a single-button alert dialog using the global "),a("code",[e._v("alert()")]),e._v(" alias.")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.setBackgroundColor('white');\nvar win = Ti.UI.createWindow({\n  title: 'Click window to test',\n  backgroundColor: 'white',\n  exitOnClose: true,\n  fullscreen: false\n});\n\nwin.addEventListener('click', function(e) {\n  alert('The file has been deleted');\n});\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"single-button-alert-dialog-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-button-alert-dialog-standard","aria-hidden":"true"}},[e._v("#")]),e._v(" Single-button Alert Dialog (standard)")]),e._v(" "),a("p",[e._v("Create a single-button alert dialog, without explicitly defining it using the "),a("code",[e._v("buttonNames")]),e._v("\nproperty, which is invoked when the app window is clicked.")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.setBackgroundColor('white');\nvar win = Ti.UI.createWindow({\n  title: 'Click window to test',\n  backgroundColor: 'white',\nexitOnClose: true,\nfullscreen: false\n});\n\nwin.addEventListener('click', function(e) {\n  var dialog = Ti.UI.createAlertDialog({\n    message: 'The file has been deleted',\n    ok: 'Okay',\n    title: 'File Deleted'\n  });\n  dialog.show();\n});\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"three-button-alert-dialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#three-button-alert-dialog","aria-hidden":"true"}},[e._v("#")]),e._v(" Three-button Alert Dialog")]),e._v(" "),a("p",[e._v("Create a three-button alert dialog, which is invoked when the app window is clicked.\nOutput a message to the log when the cancel button is clicked.")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.setBackgroundColor('white');\nvar win = Ti.UI.createWindow({\n  title: 'Click window to test',\n  backgroundColor: 'white',\n  exitOnClose: true,\n  fullscreen: false\n});\nwin.addEventListener('click', function(e) {\n  var dialog = Ti.UI.createAlertDialog({\n    cancel: 1,\n    buttonNames: ['Confirm', 'Cancel', 'Help'],\n    message: 'Would you like to delete the file?',\n    title: 'Delete'\n  });\n  dialog.addEventListener('click', function(e) {\n    if (e.index === e.source.cancel) {\n      Ti.API.info('The cancel button was clicked');\n    }\n    Ti.API.info('e.cancel: ' + e.cancel);\n    Ti.API.info('e.source.cancel: ' + e.source.cancel);\n    Ti.API.info('e.index: ' + e.index);\n  });\n  dialog.show();\n});\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"alert-dialog-with-plain-text-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alert-dialog-with-plain-text-input","aria-hidden":"true"}},[e._v("#")]),e._v(" Alert Dialog with Plain Text Input")]),e._v(" "),a("p",[e._v("Create an alert dialog and allow the user enter plain text, which is invoked when the\napp window is clicked.\nOutput entered text value to the log when the OK button is clicked.")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.setBackgroundColor('white');\nvar win = Ti.UI.createWindow({\n  title: 'Click window to test'\n});\nwin.addEventListener('click', function(e) {\n  var dialog = Ti.UI.createAlertDialog({\n    title: 'Enter text',\n    style: Ti.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT,\n    buttonNames: ['OK']\n  });\n  dialog.addEventListener('click', function(e) {\n    Ti.API.info('e.text: ' + e.text);\n  });\n  dialog.show();\n});\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"alloy-xml-markup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),a("p",[e._v("Previous three-button alert dialog example as an Alloy view.")]),e._v(" "),a("p",[e._v("alertdialog.xml:")]),e._v(" "),a("pre",[a("code",[e._v('<Alloy>\n    <Window id="win" onClick="showDialog" title="Click window to test" backgroundColor="white"\n        exitOnClose="true" fullscreen="false" >\n\n        <AlertDialog id="dialog" onClick="doClick" title="Delete"\n            message="Would you like to delete the file?" cancel="1">\n\n            \x3c!-- The ButtonNames tag sets the buttonNames property. --\x3e\n            <ButtonNames>\n                <ButtonName>Confirm</ButtonName>\n                <ButtonName>Cancel</ButtonName>\n                <ButtonName>Help</ButtonName>\n            </ButtonNames>\n        </AlertDialog>\n    </Window>\n</Alloy>\n')])]),e._v(" "),a("p",[e._v("alertdialog.js:")]),e._v(" "),a("pre",[a("code",[e._v("function showDialog() {\n    $.dialog.show();\n}\n\nfunction doClick(e) {\n    Ti.API.info('e.text: ' + e.text);\n}\n\n$.win.open();\n")])]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);t.default=n.exports}}]);