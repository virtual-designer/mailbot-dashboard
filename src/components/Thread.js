import { formatDistance } from "date-fns";

export default function Thread({ title, user, createdAt }) {
    return (
        <div className="p-3 shadow rounded border m-2">
            <a className="text-2xl hover:text-blue-500 hover:underline" href="#abc">{title}</a>
            <p className="text-gray-500">Created by <strong className="font-bold">{user}</strong> &middot; {formatDistance(new Date(), createdAt instanceof Date ? createdAt : new Date(createdAt))}</p>
        </div>
    );
}