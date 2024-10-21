import { PropsWithChildren } from "react"
import { Layout } from "./Components/Layout"

function App({children}: PropsWithChildren) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}

export default App