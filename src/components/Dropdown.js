export default function Dropdown({ visible }) {
    return (
        <div className={"dropdown " + (!visible ? 'hidden' : '')}>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </div>
    );
}