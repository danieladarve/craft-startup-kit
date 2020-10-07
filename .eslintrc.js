module.exports = {
  root: true,
  'extends': [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  'plugins': [
    'prettier'
  ],
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsx-a11y/href-no-hash': ['off'],
    'no-param-reassign': ['off'],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'max-len': [
      'warn',
      {
        'code': 80,
        'tabWidth': 2,
        'comments': 80,
        'ignoreComments': false,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ]
  }
}
