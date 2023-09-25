import { Outlet } from 'react-router-dom';
import { logoutUser } from '../../utils/userSlice';
import { closeModal } from '../../store/features/modalSlice';
import { FaTimes } from 'react-icons/fa';
import { BiBook, BiBookOpen, BiHomeAlt, BiLogOut, BiUser, BiBell } from "react-icons/bi";
import { NavLink } from "react-router-dom";


const SharedLayout = () => {
    const handleCloseSidebar = () => {
        document.querySelector('aside').style.visibility = 'hidden';
        document.querySelector('aside').style.width = '0%';
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
                        <li style={{marginTop:'100px'}} onClick={() => logoutUser()}>
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