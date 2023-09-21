import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../store/features/sidebarSlice';
import { logoutUser } from '../../store/features/auth/userSlice';
import { closeModal } from '../../store/features/modalSlice';
import { FaTimes, FaUser, FaHome, FaWrench, FaBook } from 'react-icons/fa';
import { BiBook, BiBookAlt, BiBookOpen, BiHomeAlt, BiLogOut, BiUser, BiUserCheck, BiBell } from "react-icons/bi";
import { NavLink } from "react-router-dom";


const SharedLayout = () => {
    const dispatch = useDispatch();

    const handleCloseSidebar = () => {
        dispatch(closeSidebar());
    }

    return (
        <aside className="sidebar-outlet">
            <div className="bars" onClick={handleCloseSidebar}><FaTimes /></div>

            <nav>
                <ul>
                    <NavLink to="/profile" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li>
                            <BiUser />
                            Profile
                        </li>
                    </NavLink>

                    <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li>
                            <BiHomeAlt />
                            Home
                        </li>

                    </NavLink>




                    <NavLink to="/notifications" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li>
                            <BiBell />
                            Notifications
                        </li>
                    </NavLink>

                    <NavLink to="/projects" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li>
                            <BiBookOpen />
                            Projects
                        </li>

                    </NavLink>


                    <NavLink to="/tasks" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li>
                            <BiBook />
                            Tasks
                        </li>

                    </NavLink>

                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>
                        <li style={{marginTop:'100px'}} onClick={() => dispatch(logoutUser())}>
                            <BiLogOut />
                            Logout
                        </li>

                    </NavLink>

                </ul>
            </nav>

        </aside>
    )
}

export default SharedLayout;