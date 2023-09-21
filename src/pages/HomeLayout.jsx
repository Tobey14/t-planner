import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/home';

const HomeLayout = () => {
    

    return (
        <section>
            <main className='container'>
                <Navbar />
                
                <Outlet />
                
            </main>
        </section>
    )
}

export default HomeLayout;