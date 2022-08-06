export default function Button({ className = '', children }) {
    return <button className={className + ' px-3 py-2 bg-blue-500 hover:bg-blue-600 hover:outline-double outline-blue-700 border-0 rounded-md text-white'}>{children}</button>;
}