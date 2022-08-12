export default function Button({ className = '', children, type = 'button', href = undefined, disabled = false }) {
    const Element = href ? 'a' : 'button';
    return <Element disabled={disabled} type={type} href={href} className={'px-3 py-2 bg-blue-500 hover:bg-blue-600 hover:outline-double outline-blue-700 border-0 rounded-md text-white ' + (disabled ? ' bg-blue-400 cursor-not-allowed hover:outline-none hover:bg-blue-400 ' : '') + className}>{children}</Element>;
}