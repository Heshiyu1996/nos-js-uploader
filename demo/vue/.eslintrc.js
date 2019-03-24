module.exports = {
    root: true,

    env: {
        browser: true,
        node: true
    },

    extends: ['plugin:vue/essential', 'eslint:recommended'],

    plugins: ['prettier'],

    parserOptions: {
        parser: 'babel-eslint'
    },
    // plugins: ['vue'], // 要求对 *.vue 文件进行lint

    rules: {
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，可以省略参数的括号，否则error提示

        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境中不允许使用console

        'no-console': 'off', // 允许使用console

        'prettier/prettier': 'warn'
    }
}
