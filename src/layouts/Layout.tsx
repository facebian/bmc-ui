import Header from '@/components/Header'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <div>
          <Header />
            <main className='max-w-7xl mx-auto mt-7'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
