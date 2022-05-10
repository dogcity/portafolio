import Example from './Example/Example'
import Base from './Base/Base'

const App = ({ routerDom }) => {
  const { Routes, Route } = routerDom

  return (
    <Base>
      <Routes>
        <Route exact path='/' element={<Example />} />
        <Route path='/404' element={<Base />} />
        <Route element={<Base />} />
      </Routes>
    </Base>
  )
}

export default App
