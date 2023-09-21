import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Modal} from '../components/auth';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../store/features/sidebarSlice';
import { closeModal } from '../store/features/modalSlice';

const SharedLayout = () => {
    const dispatch = useDispatch();
    const { showModal } = useSelector((store) => store.modal);
    const { showSidebar } = useSelector((store) => store.sidebar);

    const handleCloseSidebar = () => {
        dispatch(closeSidebar());
    }
    const handleCloseModal = () => {
        showModal && dispatch(closeModal());
    }

    return (
        <section>
            {(showModal) && <div className="overlay"></div>}
            
            <main className='user-container' onClick={handleCloseModal}>

                {showSidebar ? <Sidebar />: null}

                <div className="dashboard-page" >
                    {<Navbar /> }

                    <Outlet />
                </div>
                {showModal && <Modal />}
            </main>
        </section>
    )
}

export default SharedLayout;