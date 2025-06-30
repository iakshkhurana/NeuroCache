import { ShareIcon } from "../icons/share";

export function Card() {
    return (
        <div className="p-4 bg-white rounded-md border border-gray-200 max-w-96">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShareIcon/>
                    <span className="font-medium">Project Ideas</span>
                </div>
                <div className="flex gap-2">
                    <button className="text-gray-500 hover:text-blue-500"><ShareIcon/></button>
                    <button className="text-gray-500 hover:text-blue-500"><ShareIcon/></button>
                </div>
            </div>
        </div>
    );
}