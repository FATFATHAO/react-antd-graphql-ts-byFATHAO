import { Link, Outlet } from "react-router-dom"
import '../less/Reg-Log/Reg-Log.less'

const Layout = () => {
    return (
        <div className="Navbar">
            <div className="Title">Welcome to HRBUST Control Server BackGround!</div>
            <div className="TitleNav">
                <Link to="/Regesiter">注册</Link>
                <Link to="/Login">登录</Link>
                <Link to="/About">关于</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout;