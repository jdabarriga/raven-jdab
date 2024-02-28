"use strict";
exports.__esModule = true;
var folderUtils_1 = require("../logic/folderUtils");
test("Unit Test GetExtension", function () {
    var filename = "mycoolfile.exe";
    var filenameExtension = (0, folderUtils_1.GetExtension)(filename);
    expect(filenameExtension).toBe("exe");
});
