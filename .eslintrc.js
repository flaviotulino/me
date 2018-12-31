module.exports = {
    "extends": "airbnb",
    "rules": {
        "indent": ["error", 2],

        "camelcase": ["error", {
            ignoreDestructuring: true,
        }],
        "no-case-declarations": "off",
        "max-len": "off",
        "no-shadow": "off",
        "react/jsx-filename-extension": "off",
        "react/require-default-props": "off",
        "react/forbid-prop-types": {
            "forbid": {}
        }
    },
    "globals": {
        "document": true,
        "it": true, // Testing
    }
};
