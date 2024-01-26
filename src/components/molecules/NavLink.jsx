import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
    return (
        <Link to={to} className="text-sm font-medium hover:underline underline-offset-4 text-neon">
            {children}
        </Link>
    );
};

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default NavLink;
