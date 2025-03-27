import { Route, Routes } from 'react-router'
import './App.css'
import { LoginForm } from './components/login-form'
import Layout from './layouts/Layout'
import Home from './components/Home'
import { CoachSearch } from './features/Coach/CoachSearch'

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/search" element={<CoachSearch />} />
            </Route>
        </Routes>
    )
}

export default App
