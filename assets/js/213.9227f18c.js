(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{627:function(e,t,i){"use strict";i.r(t);var a=i(4),r=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-filesystem-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-filesystem-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.Filesystem.File")]),e._v(" "),i("TypeHeader"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("Use the "),i("type-link",{attrs:{type:"Titanium.Filesystem.getFile"}},[e._v("Titanium.Filesystem.getFile")]),e._v(" method to get a handle to a "),i("code",[e._v("File")]),e._v(" object,\nwhich represents a given path.  There does not need to be an existing file or directory\ndoes not need to exist before "),i("code",[e._v("getFile")]),e._v(" is called. If the file doesn't exist, and\nthe file path identifies a file in a writable directory, writing to the file\ncreates the file implicitly.")],1),e._v(" "),i("p",[e._v("See "),i("type-link",{attrs:{type:"Titanium.Filesystem"}},[e._v("Titanium.Filesystem")]),e._v(" for constants identifying commonly-used device directories.")],1),e._v(" "),i("p",[e._v("Use the "),i("type-link",{attrs:{type:"Titanium.Filesystem.File.exists"}},[e._v("exists")]),e._v(" method to test whether the file exists.")],1),e._v(" "),i("p",[e._v("A file object can point to an ordinary file, a directory or a symbolic link.\nUse "),i("type-link",{attrs:{type:"Titanium.Filesystem.File.createDirectory"}},[e._v("createDirectory")]),e._v(" to create a directory.\nUse the "),i("type-link",{attrs:{type:"Titanium.Filesystem.File.getDirectoryListing"}},[e._v("getDirectoryListing")]),e._v(" method to\nretrieve a list of the directory's contents.")],1),e._v(" "),i("p",[e._v("The "),i("code",[e._v("File")]),e._v(" object doesn't provide methods for random access into the file.\nThe "),i("code",[e._v("read")]),e._v(" method reads the file's entire contents into a "),i("code",[e._v("Blob")]),e._v(" object.\nThe "),i("code",[e._v("write")]),e._v(" method can either overwrite the entire file or append to an\nexisting file.")]),e._v(" "),i("p",[e._v("For random access to a file, such as accessing a small portion of a larger file,\nyou can open a file as a "),i("type-link",{attrs:{type:"Titanium.Filesystem.FileStream"}},[e._v("FileStream")]),e._v(" object. Use the\n"),i("type-link",{attrs:{type:"Titanium.Filesystem.File.open"}},[e._v("open")]),e._v(" method to get a "),i("code",[e._v("FileStream")]),e._v(" for an\nexisting "),i("code",[e._v("File")]),e._v(" object, or use the "),i("type-link",{attrs:{type:"Titanium.Filesystem.openStream"}},[e._v("Titanium.Filesystem.openStream")]),e._v(" method\nto get a "),i("code",[e._v("FileStream")]),e._v(" directly without calling "),i("code",[e._v("getFile")]),e._v(" first.")],1),e._v(" "),i("p",[e._v("The "),i("type-link",{attrs:{type:"Titanium.Filesystem"}},[e._v("Titanium.Filesystem")]),e._v(" module defines a number of properties and methods related to\nfilesystem access, including properties that specify paths for application-specific\ndirectories, and methods for creating temporary files and directories.")],1),e._v(" "),i("p",[e._v("On Android, files may be stored on external storage (that is, removable media such as\nSD Cards).")]),e._v(" "),i("p",[e._v("Note that once created with "),i("code",[e._v("getFile")]),e._v(", the path associated with a file object is\nimmutable. If you move the underlying file using "),i("type-link",{attrs:{type:"Titanium.Filesystem.File.move"}},[e._v("move")]),e._v("\nor "),i("type-link",{attrs:{type:"Titanium.Filesystem.File.rename"}},[e._v("rename")]),e._v(", you can no longer access it with the\noriginal "),i("code",[e._v("File")]),e._v(" object. You must use "),i("code",[e._v("getFile")]),e._v(" to get a handle to the new path.")],1),e._v(" "),i("h3",{attrs:{id:"resource-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#resource-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Resource Files")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("Resources")]),e._v(" directory and all the files in it are read-only. On Android, resource\nfiles are stored in the resource bundle and do not have all of the properties of\nnormal files. In particular, they do not have creation or modification timestamps.")]),e._v(" "),i("h2",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("h3",{attrs:{id:"reading-a-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reading-a-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Reading a File")]),e._v(" "),i("p",[e._v("Data files shipped with the application are stored in the resources directory.")]),e._v(" "),i("p",[e._v("This example reads string data from a text file.")]),e._v(" "),i("pre",[i("code",[e._v('// resourcesDirectory is actually the default location, so the first\n// argument could be omitted here.\nfile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "textfile.txt");\nvar blob = file.read();\nvar readText = blob.text;\n// dispose of file handle & blob.\nfile = null;\nblob = null;\n')])]),e._v(" "),i("h3",{attrs:{id:"creating-a-subdirectory"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-subdirectory","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a Subdirectory")]),e._v(" "),i("p",[e._v("Files that the application writes to need to be stored outside of the\nresources directory, since that directory is read-only.")]),e._v(" "),i("p",[e._v("This example creates a subdirectory to store downloaded images.\nThe example assumes that two variables are defined elsewhere in the code:\nmyImageID, a string containing some kind of ID for the downloaded image,\nand myImageData, a "),i("code",[e._v("Blob")]),e._v(" containing JPEG image data.")]),e._v(" "),i("pre",[i("code",[e._v("var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,\n    'downloaded_images');\nif (! imageDir.exists()) {\n    imageDir.createDirectory();\n}\n\n// .resolve() provides the resolved native path for the directory.\nvar imageFile  = Ti.Filesystem.getFile(imageDir.resolve(), myImageID + '.jpg');\nTi.API.info(\"ImageFile path is: \" + imageFile.resolve());\nif (imageFile.write(myImageData)===false) {\n    // handle write error\n}\n// dispose of file handles\nimageFile = null;\nimageDir = null;\n")])]),e._v(" "),i("ApiDocs")],1)},[],!1,null,null,null);t.default=r.exports}}]);