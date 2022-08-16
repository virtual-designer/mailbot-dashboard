import { formatDistance } from "date-fns";
import { useState } from "react";
import { MdMoreVert } from 'react-icons/md';
import Dropdown from "./Dropdown";

export default function Thread({ title, user, createdAt }) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="p-3 shadow rounded border hover:border-blue-500 m-2 thread">
            <div className="flex align-center">
                <div className="basis-[95%]">
                    <a className="text-2xl hover:text-blue-500 hover:underline" href="#abc">{title}</a>
                    <p className="text-gray-500">Created by <strong className="font-bold">{user}</strong> &middot; {formatDistance(new Date(), createdAt instanceof Date ? createdAt : new Date(createdAt))}</p>
                </div>
                <div className="basis-[5%] flex justify-end">
                    <button onFocus={() => setShowDropdown(true)} onBlur={() => setShowDropdown(false)} className="hover:bg-[rgba(0,0,0,0.2)] rounded-full h-8 w-8 flex justify-center items-center"><MdMoreVert size={20} /></button>
                    <Dropdown visible={showDropdown} />
                </div>
            </div>
        </div>
    );
}