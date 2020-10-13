import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

/**
 * Rendering null on the server and not on the client will produce
 * a hydration mismatch warning.
 * Since, in this case, that's expected, we can silence it
 * with a quick wrapper component that will supress the warning
 */
const SafeHydrate = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

const App = () => {
  return (
    <SafeHydrate>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Hello World!</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </SafeHydrate>
  )
}

export default App
