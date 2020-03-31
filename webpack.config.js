const path = require("path");

module.exports = {
    "entry": {
        "polyfills": [
            "./src/polyfills.ts"
        ],
        "styles": [
            "./src/styles.css"
        ],
        "main": [
            "./src/main.ts"
        ]
    },

    output: {
        "path": path.join(process.cwd(), "dist", "ng-builders-test"),
        "filename": "[name].bundle.js",
        "chunkFilename": "[id].chunk.js",
        "crossOriginLoading": false,
        "library": "ngTailor",
        "libraryTarget": "umd",
        "umdNamedDefine": true
    }
}