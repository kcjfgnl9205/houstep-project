import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import { Home, Order, Complete, Error, NotFound } from './pages'
import { routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.order} element={<Order />} />
        <Route path={routes.complete} element={<Complete />} />
        <Route path={routes.error} element={<Error />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
