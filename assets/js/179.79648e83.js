(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{578:function(e,i,t){"use strict";t.r(i);var n=t(4),a=Object(n.a)({},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-app-ios-backgroundservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-ios-backgroundservice","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.App.iOS.BackgroundService")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("A background service is created by "),t("type-link",{attrs:{type:"Titanium.App.iOS.registerBackgroundService"}},[e._v("Titanium.App.iOS.registerBackgroundService")]),e._v(".")],1),e._v(" "),t("p",[e._v("At creation, a local URL to a JavaScript file must be defined. The code it contains is executed\neach time the application is no longer in the foreground, along with all other services that have\nbeen registered in the same way. When this happens, all background services continue to run until\none of the following occurs:")]),e._v(" "),t("ul",[t("li",[e._v("A service is stopped with the "),t("code",[e._v("stop")]),e._v(" method.")]),e._v(" "),t("li",[e._v("The application resumes, at which points all background services are stopped.")]),e._v(" "),t("li",[e._v('The OS terminates the service for one of the reasons discussed in\n"Background Service Limitations", below.')])]),e._v(" "),t("p",[e._v("A background service can invoke a "),t("type-link",{attrs:{type:"Titanium.App.iOS.LocalNotification"}},[e._v("Titanium.App.iOS.LocalNotification")]),e._v(", which prompts users via\na dialog to return to the application and provides a button that brings it back into the\nforeground.")],1),e._v(" "),t("h3",{attrs:{id:"background-service-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-service-limitations","aria-hidden":"true"}},[e._v("#")]),e._v(" Background Service Limitations")]),e._v(" "),t("p",[e._v("A background service is subject to limitations imposed by the operating system, such as")]),e._v(" "),t("ul",[t("li",[e._v("The OS limits the total amount of time a background service can run for after the application\nis paused, typically to no more than 10 minutes.")]),e._v(" "),t("li",[e._v("The OS may terminate the background service at any point to reclaim resources.")])]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"background-services-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-services-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Background Services Example")]),e._v(" "),t("p",[e._v("Two background services are registered in the following application.")]),e._v(" "),t("p",[e._v("The first service logs a message every time the application is paused and then is stopped to\nrelease the service from memory. The service is not unregistered, and so will continue to be\ninvoked.")]),e._v(" "),t("p",[e._v("The second creates an application property where it stores a run count value. For the first 4\ntimes the application is paused, a local notification is invoked that gives the user the\nopportunity to bring the application back to the foreground. Once the run count reaches 5,\nthe service is unregistered and is not invoked again until the application is relaunched.")]),e._v(" "),t("h4",{attrs:{id:"app-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-js","aria-hidden":"true"}},[e._v("#")]),e._v(" app.js")]),e._v(" "),t("pre",[t("code",[e._v("var win1 = Ti.UI.createWindow({\n  title:'Background Services Example',\n  backgroundColor:'#4186cd',\n  modal:true\n});\n\nTi.API.info('Registering background services');\nvar service = Ti.App.iOS.registerBackgroundService({url:'bg-service1.js'});\nvar service2 = Ti.App.iOS.registerBackgroundService({url:'bg-service2.js'});\nTi.API.info('*** Press home button to pause application ***');\n\nwin1.open();\n")])]),e._v(" "),t("h4",{attrs:{id:"bg-service1-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-service1-js","aria-hidden":"true"}},[e._v("#")]),e._v(" bg-service1.js")]),e._v(" "),t("pre",[t("code",[e._v("Ti.API.info('bg-service1: service has been invoked once, and will now be stopped to release it from memory. ');\nTi.App.currentService.stop();\n\nvar listener = Ti.App.currentService.addEventListener('stop',function(){\n  Ti.API.info('bg-service1: Although the service has been stopped, it is still registered and will be executed again on next pause');\n  Ti.API.info('bg-service1: As all background services are automatically stopped on resume, it is not always necessary to explicitly stop a service');\n});\n")])]),e._v(" "),t("h4",{attrs:{id:"bg-service2-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-service2-js","aria-hidden":"true"}},[e._v("#")]),e._v(" bg-service2.js")]),e._v(" "),t("pre",[t("code",[e._v("var count = Ti.App.Properties.getInt('bg-svc2-count', 0);\n\nif (count > 4){\n  // reset count after 4 invocations\n  count = 0;\n}\n\ncount++;\n\nTi.App.Properties.setInt('bg-svc2-count', count);\n\nTi.API.info('bg-service2 has been run ' + count + ' times');\n\nif (count > 4){\n  Ti.App.currentService.unregister();\n  var finalNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: As service has been invoked more than 4 times, it has been unregistered and will NOT run again. Relaunch the app to re-register it',\n    date:new Date(new Date().getTime() + 1000) // 1 second after unregister\n  });\n} else {\n  var curNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: has been invoked ' + count + ' times. It is still registered and will run again when the app is transitioned to the background',\n    date:new Date(new Date().getTime() + 1000) // 1 second after pause\n  });\n}\n")])]),e._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);i.default=a.exports}}]);