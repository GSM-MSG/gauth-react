<div align="center">
  <h1>GAuth - React</h1>

  <p>단 하나의 계정으로 <strong>광주소프트웨어마이스터고등학교</strong>의 모든 서비스를 이용할 수 있게</p>
</div>

## 📚 Description

`GAuth`를 더 편하게 이용할 수 있도록 react 버전으로 만들어진 라이브러리입니다.

## ⚡ Requirements

- axios

## 🛠️ Installation

```bash
// npm
> npm i @msg-team/gauth-react

// yarn
> yarn add @msg-team/gauth-react
```

## 🙋 How to use

[codesandbox example](https://codesandbox.io/p/sandbox/intelligent-bash-bynhop)

```tsx
// index.tsx

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GauthProvider
    redirectUri='http://localhost:3000'
    clientId='client id'
    onSuccess={async (code) => {
      console.log(code)
    }}
  >
    <App />
  </GauthProvider>
)
```

```tsx
// SomeComponent.tsx

import { GauthLoginButton } from '@msg-team/gauth-react'
import '@msg-team/gauth-react/dist/index.css'

function SomeComponent() {
  return <GauthLoginButton />
}

export default SomeComponent
```
