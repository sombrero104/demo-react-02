import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],\
      'no-unused-vars': 'off', // 사용되지 않는 변수가 있으면 경고 또는 오류를 내는 규칙.
      'react/prop-types': 'off', // PropTypes를 안 써도 ESLint가 경고하지 않음.
                                // (PropTypes는 컴포넌트가 받는 props의 타입을 체크하는 도구.)
    },
  },
])
