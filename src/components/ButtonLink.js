import { Link } from "react-router-dom";

export default function ButtonLink({ className = '', children, to }) {
    return <Link to={to} className={'px-3 py-2 bg-blue-500 hover:bg-blue-600 hover:outline-double outline-blue-700 border-0 rounded-md text-white ' + className}>{children}</Link>;
}