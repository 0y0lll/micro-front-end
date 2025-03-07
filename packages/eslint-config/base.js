import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      'react/react-in-jsx-scope': 'off', // ~> import React from 'react' 제외
      'import/default': 'off', // 모듈에서 기본으로 내보내는 객체 또는 값을 검사하는 옵션 ~> 'off'
      'react/prop-types': 'off', // React 컴포넌트의 prop-types를 정의하지 않았을 때 경고 발생 ~> 'off'
      'import/no-unresolved': 'off', // 해석할 수 없는 모듈 경로를 감지하여 경고 발생 ~> 'off'
      'import/no-named-as-default-member': 'off', // 한 파일 내에서 export default A와 export B로 내보냈을 때, import A, { B } 에 대해 경고 발생 ~> 'off'
      'import/no-named-as-default': 'off', // 한 파일 내에서 export default A와 export B로 내보냈을 때, import A 에 대해 경고 발생 ~> 'off'
      'eol-last': 'error', // 코드의 마지막 줄에 개행 문자가 있지 않으면 'error'
      'no-unused-vars': 'off', // 사용되지 않는 변수를 사용하거나 가져오는 경우 경고 발생 ~> 'off'
      'unused-imports/no-unused-imports': 'error', // 사용되지 않는 'import'문을 감지 'error'
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
        // vars: 'all': 모든 변수에 대해 검사 수행
        // varsIgnorePattern: 변수 이름이 _로 시작하는 것에 대해 검사에서 제외 ~> _timer
        // args: 'after-used': 사용 후에만 인수를 검사하도록 지정
        // argsIgnorePattern: '^_': 인수 이름이 밑줄로 시작하는 경우 검사에서 제외 ~> _onChange
      ],
      'react-hooks/exhaustive-deps': 'off', // useEffect, useCallback, useMemo 2번째 인자 안넣어도 경고 뜨지 않음
      'react/no-unknown-property': ['error', { ignore: ['css'] }], // 알 수 없는 속성이 React 컴포넌트에 사용되었을 때 경고를 발생, 'css' 속성을 무시하도록 지정합니다. (emotion)
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
