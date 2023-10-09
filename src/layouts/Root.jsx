import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;