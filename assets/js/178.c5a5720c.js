(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{576:function(t,i,e){"use strict";e.r(i);var a=e(4),n=Object(a.a)({},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-app-ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-ios","aria-hidden":"true"}},[t._v("#")]),t._v(" Titanium.App.iOS")]),t._v(" "),e("TypeHeader"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("h3",{attrs:{id:"local-notifications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-notifications","aria-hidden":"true"}},[t._v("#")]),t._v(" Local Notifications")]),t._v(" "),e("p",[t._v("Local notifications are a way for an application that is not running in the foreground to let\nusers know that it has information for them. When invoked, the application either displays a\nbanner message or an alert dialog with a "),e("strong",[t._v("Close")]),t._v(" button to dismiss and an "),e("strong",[t._v("Open")]),t._v(" button to bring the application\ninto the foreground. The application can also modify the icon badge, to show the\nnumber of pending notifications, and generate a sound.")]),t._v(" "),e("p",[t._v("To send a local notification, the application needs to:")]),t._v(" "),e("ol",[e("li",[t._v("Enroll the application to send local notifications with the\n"),e("type-link",{attrs:{type:"Titanium.App.iOS.registerUserNotificationSettings"}},[t._v("Titanium.App.iOS.registerUserNotificationSettings")]),t._v(" method.")],1),t._v(" "),e("li",[t._v("Schedule a local notification with the "),e("type-link",{attrs:{type:"Titanium.App.iOS.scheduleLocalNotification"}},[t._v("Titanium.App.iOS.scheduleLocalNotification")]),t._v(" method.")],1),t._v(" "),e("li",[t._v("Monitor the "),e("type-link",{attrs:{type:"Titanium.App.iOS.notification"}},[t._v("notification")]),t._v(" event to respond to the\nnotification.")],1)]),t._v(" "),e("p",[t._v("For instructions on sending local interactive notifications, see the\n"),e("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/iOS_Local_Notifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Local Notifications guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"local-interactive-notifications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-interactive-notifications","aria-hidden":"true"}},[t._v("#")]),t._v(" Local Interactive Notifications")]),t._v(" "),e("p",[t._v("You can create interactive notifications, where users can respond to application notifications\nwithout launching the application to the foreground. The user needs to reveal notification\nactions in the notification, then press a notification action to respond to the notification.")]),t._v(" "),e("p",[t._v("To create an interactive notification, the application needs to:")]),t._v(" "),e("ol",[e("li",[t._v("Create and configure notification actions with the\n"),e("type-link",{attrs:{type:"Titanium.App.iOS.createUserNotificationAction"}},[t._v("Titanium.App.iOS.createUserNotificationAction")]),t._v(" method.")],1),t._v(" "),e("li",[t._v("Create notification categories and assign notification actions to them\nwith the "),e("type-link",{attrs:{type:"Titanium.App.iOS.createUserNotificationCategory"}},[t._v("Titanium.App.iOS.createUserNotificationCategory")]),t._v(" method.")],1),t._v(" "),e("li",[t._v("Register the notification categories with the\n"),e("type-link",{attrs:{type:"Titanium.App.iOS.registerUserNotificationSettings"}},[t._v("Titanium.App.iOS.registerUserNotificationSettings")]),t._v(" method.")],1),t._v(" "),e("li",[t._v("Monitor the "),e("type-link",{attrs:{type:"Titanium.App.iOS.localnotificationaction"}},[t._v("localnotificationaction")]),t._v(" event.")],1)]),t._v(" "),e("p",[t._v("For instructions on sending local interactive notifications, see the\n"),e("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/iOS_Local_Notifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Local Notifications guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"background-downloads"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background-downloads","aria-hidden":"true"}},[t._v("#")]),t._v(" Background Downloads")]),t._v(" "),e("p",[t._v("In iOS 7, Apple introduced new background execution modes which allow the application to download\ncontent in the background. These background modes are supported in Titanium SDK 3.2.0 and later.")]),t._v(" "),e("p",[t._v("For more information on getting started, refer to the\n"),e("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/iOS_Background_Services",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Background Services guide"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"handoff-user-activities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handoff-user-activities","aria-hidden":"true"}},[t._v("#")]),t._v(" Handoff User Activities")]),t._v(" "),e("p",[t._v("Handoff allows you to create and transfer user activies from one device to another. For example, you can start editing\na document on your phone, then transfer the activity to your iPad to continue editing the document.")]),t._v(" "),e("p",[t._v("To make an activity shareable, use the "),e("type-link",{attrs:{type:"Titanium.App.iOS.UserActivity"}},[t._v("Titanium.App.iOS.UserActivity")]),t._v(" API to create the activity.\nTo continue the activity on another device, listen for the\n"),e("type-link",{attrs:{type:"Titanium.App.iOS.continueactivity"}},[t._v("continueactivity")]),t._v(" event.")],1),t._v(" "),e("h3",{attrs:{id:"index-application-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-application-content","aria-hidden":"true"}},[t._v("#")]),t._v(" Index Application Content")]),t._v(" "),e("p",[t._v("In iOS 9 and later, Apple lets you index application content, such as music, videos, images and documents, to allow it\nto be searched in iOS Spotlight. To effectively add and remove information from the iOS search index\nyou will need to use the following APIs:")]),t._v(" "),e("ul",[e("li",[e("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItemAttributeSet"}},[t._v("Titanium.App.iOS.SearchableItemAttributeSet")]),t._v(" - Used to create metadata related to the "),e("code",[t._v("Ti.App.iOS.SearchableItem")])],1),t._v(" "),e("li",[e("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItem"}},[t._v("Titanium.App.iOS.SearchableItem")]),t._v(" - Used to assemble metadata into a unique object package to be used by "),e("code",[t._v("Ti.App.iOS.SearchableIndex")])],1),t._v(" "),e("li",[e("type-link",{attrs:{type:"Titanium.App.iOS.SearchableIndex"}},[t._v("Titanium.App.iOS.SearchableIndex")]),t._v(" - Used to add and remove "),e("code",[t._v("Ti.App.iOS.SearchableItem")]),t._v(" objects to the device search index")],1)]),t._v(" "),e("ApiDocs")],1)},[],!1,null,null,null);i.default=n.exports}}]);