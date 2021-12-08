module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        'vue/script-setup-uses-vars': 'error',
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    }
}
