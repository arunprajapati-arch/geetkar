import { FaList } from "react-icons/fa";

export default function TrackListButton() {
    return (
        <button className="text-md xl:hidden font-semibold border border-white rounded-lg p-2 px-3  flex items-center justify-between gap-2 ">Track List
            <FaList className="text-md" />
        </button>
    );
}