import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function BottomBar({ data }) {
    return (
        <div>
            <ul className="flex items-center">
                {data.map(list => (
                    <li className="mx-3"><a href={list.url} className='flex items-center text-blue-500 hover:text-blue-600 hover:underline'{...(list.outside ? { target: '_blank', rel: 'noreferrer' } : {})}>{list.text} {list.outside && <BsBoxArrowUpRight className='ml-2' />}</a></li>
                ))}
            </ul>
        </div>
    );
}