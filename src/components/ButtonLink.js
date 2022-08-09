import { Link } from "react-router-dom";
import Button from './Button';

export default function ButtonLink({ className = '', children, to }) {
    return <Link to={to}><Button className={className}>{children}</Button></Link>;
}