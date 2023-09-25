import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Modal} from '../components/auth';


const SharedLayout = () => {
    // const { showModal } = useSelector((store) => store.modal);
    // const { showSidebar } = useSelector((store) => store.sidebar);

    // const handleCloseSidebar = () => {
    //     dispatch(closeSidebar());
    // }
    // const handleCloseModal = () => {
    //     showModal && dispatch(closeModal());
    // }

    return (
        <section>
            {/* {(showModal) && <div className="overlay"></div>} */}
            
            <main className='user-container' >

                <Sidebar />

                <div className="dashboard-page" >
                    {<Navbar /> }

                    <Outlet />
                </div>
                {/* {showModal && <Modal />} */}
            </main>
        </section>
    )
}

export default SharedLayout;