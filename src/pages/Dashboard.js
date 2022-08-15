import Thread from "../components/Thread";
import useRequest from '../hooks/useRequest';
import { MdError } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { useEffect } from "react";
import { endpoint } from '../utils/util';

export default function Dashboard() {
    const { error, inProgress, response, send } = useRequest();

    useEffect(() => {
        send(endpoint('/threads'));
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl px-3 py-2 my-3 border-l-blue-500 border-l-4">All threads</h1>

            <div className="p-2 md:grid grid-cols-[4fr_1fr] gap-10">
                <div>
                    {error && <div className="mx-3 bg-red-100 text-red-400 p-3 rounded border border-red-600"><MdError size={20} className='inline-block' /> {error}</div>}
                    {inProgress && <div className="text-2xl mx-3"><FaSpinner size={20} className='inline-block spinner' /> Loading...</div>}
                    {response && (
                        <>
                            {response.length > 0 ? response.map((thread, index) => (
                                
                                <Thread title={thread.user} user={thread.author} createdAt={new Date(thread.createdAt)} key={index} />
                            )) : <div className="text-2xl mx-3">No open thread.</div>}
                        </>
                    )}
                </div>
                <div>
                    Empty
                </div>
            </div>
        </div>
    );
}