import { Html, Head, Main, NextScript } from 'next/document'
import { hasOnlyExpressionInitializer } from 'typescript'
import estil from '../styles/document.module.css'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <style>{"html { background-color: rgba(0,0,0,0.1); }"}</style>
    </Html>
  )
}