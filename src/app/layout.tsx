import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Поиск работы в Израиле - Доска вакансий',
    description: 'Найдите идеальную работу в Израиле с помощью нашей доски вакансий. ' +
        'Платформа предлагает широкий выбор вакансий в различных отраслях, ' +
        'удобный поиск и поддержку на каждом шагу поиска работы.',
};

const confLin = {
    "env": {

              "browser": true,
      
      "node": true,
      "es6": true
    },
    "globals": {
      "_IS_DEV_": true
    },
    "extends": [
      "next/core-web-vitals",
      "eslint:recommended",
      "airbnb",
      "plugin:react/recommended",
      "plugin:i18next/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:jest/recommended",
      "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
        "globalReturn": false,
        "impliedStrict": true
      },
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint", "i18next"],
    "rules": {
      "quotes": ["warn", "single"],
      "semi": ["error", "always"],
      "indent": [2, 4],
      "react/jsx-indent": [2, 4],
      "react/jsx-indent-props": [2, 4],
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "eqeqeq": ["error", "always"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "jsx-quotes": ["warn", "prefer-double"],
      "react/jsx-filename-extension": [2, {
        "extensions":
          [".js", ".jsx", ".ts", ".tsx"]
      }],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
  
  
  
    },
    "overrides": [
      {
        "files": ["src/**/*.test.{ts,tsx}"],
        "rules": {
          "i18next/no-literal-string": "off"
        }
      }
    ]
  }
  
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
