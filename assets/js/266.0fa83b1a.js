(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{550:function(e,t,a){"use strict";a.r(t);var i=a(4),n=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-imageview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-imageview","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.ImageView")]),e._v(" "),a("TypeHeader"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Use the "),a("type-link",{attrs:{type:"Titanium.UI.createImageView"}},[e._v("Titanium.UI.createImageView")]),e._v(" method or "),a("strong",[a("code",[e._v("<ImageView>")])]),e._v(" Alloy element to create an "),a("code",[e._v("ImageView")]),e._v(".")],1),e._v(" "),a("p",[e._v("Specifying either a "),a("code",[e._v("width")]),e._v(" or "),a("code",[e._v("height")]),e._v(" property for this view will scale its image(s) with\nthe aspect ratio maintained, up to a maximum size that does not exceed its parent view.")]),e._v(" "),a("h3",{attrs:{id:"remote-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Remote Images")]),e._v(" "),a("p",[e._v("You can display both local and remote images in an ImageView. When loading remote images, you should\nset the defaultImage property to a local image, which will be displayed while the remote image is being\ndownloaded. Remote images are cached automatically on the iOS-, Android- and Windows platform.")]),e._v(" "),a("p",[e._v("Android Note: Android 6 and later uses runtime permissions to secure the user's privacy.\nTherefore, you should call "),a("type-link",{attrs:{type:"Titanium.Filesystem.requestStoragePermissions"}},[e._v("Titanium.Filesystem.requestStoragePermissions")]),e._v(" before attempting to load remote images.")],1),e._v(" "),a("p",[e._v("Read more about remote images and general best practices in the "),a("a",{attrs:{href:"https://wiki.appcelerator.org/display/guides2/Image+Best+Practices#ImageBestPractices-Cachingremoteimages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image Best Practices Guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"android-9-patch-scaled-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-9-patch-scaled-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Android 9-Patch Scaled Images")]),e._v(" "),a("p",[e._v("A nine-patch (9-patch) image is simply a standard "),a("code",[e._v("png")]),e._v(' image with a transparent border of a\nsingle pixel, containing "guides" defined by solid black ('),a("code",[e._v("#000")]),e._v(") color fills. Guides added to the\ntop and left edges determine that the image may be stretched in horizontal and vertical planes\nrespectively. Optionally, the content area may be defined by guides added to the bottom and\nright edges.")]),e._v(" "),a("p",[e._v('Although any image editor may be used to create the guides, certain settings can cause the edges\nof the graphic to "bleed" into the transparent border, consequently making it non-transparent.\nThus, the '),a("code",[e._v("draw9patch")]),e._v(" utility provided in the Android SDK tools directory is recommended for\nthis purpose.")]),e._v(" "),a("p",[e._v("For further information about nine-patch images and the Android utility, see the\n"),a("a",{attrs:{href:"https://developer.android.com/guide/topics/graphics/drawables#nine-patch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nine-patch"),a("OutboundLink")],1),e._v("\nand "),a("a",{attrs:{href:"https://developer.android.com/studio/write/draw9patch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Draw 9-patch"),a("OutboundLink")],1),e._v(" sections\nof the Android Developer website.")]),e._v(" "),a("p",[e._v('The nine-patch technique may be used with any of Titanium\'s static image properties. See the\n"Button with Nine-patch Background Image" example for a demonstration.')]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"basic-image-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-image-view","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic Image View")]),e._v(" "),a("p",[e._v("In this example, we create a simple image view:")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.backgroundColor = 'white';\nvar win = Ti.UI.createWindow();\nvar image = Ti.UI.createImageView({\n  image:'/images/myimage.png'\n});\nwin.add(image);\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"button-with-nine-patch-background-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#button-with-nine-patch-background-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Button with Nine-patch Background Image")]),e._v(" "),a("p",[e._v("Create a button with a nine-patch image background, that swaps with another image when\nselected, and generates a message in the console when clicked.")]),e._v(" "),a("p",[e._v("Note that images are referenced in the code without the "),a("code",[e._v(".9")]),e._v(" part of the filename, and that\nthe project should be cleaned to ensure that the files are correctly copied to the project.")]),e._v(" "),a("pre",[a("code",[e._v("var win = Ti.UI.createWindow({\n    backgroundColor: 'white',\n    exitOnClose: true,\n    fullscreen: false,\n    title: 'Click button to test'\n});\n\nvar button = Ti.UI.createButton({\n    backgroundImage: '/images/custom-slider-right.png',\n    backgroundSelectedImage:'/images/custom-slider-left.png',\n    title: 'Click me!',\n    top: 10,\n    width: 300,\n    height: 200\n});\nbutton.addEventListener('click',function(e){\n    Ti.API.info(\"You clicked the button\");\n});\nwin.add(button);\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"alloy-xml-markup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),a("p",[e._v("Previous basic image view example as an Alloy view.")]),e._v(" "),a("pre",[a("code",[e._v('<Alloy>\n    <Window id="win" backgroundColor="white">\n        <ImageView id="image" image="/images/myimage.png" />\n    </Window>\n</Alloy>\n')])]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);t.default=n.exports}}]);