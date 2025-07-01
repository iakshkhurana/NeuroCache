import { SidebarItems } from "./SidebarItem";
import { XIcon } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
import { LogoElement } from "./Logo";
import MachineLearningIcon from "../icons/logo";

export function Sidebar() {
    return (
        <div className="h-screen bg-white border-r w-72 absolute border-2 flex flex-col items-start px-6">
            {/* Logo and Title */}
            <div className="flex items-center gap-2 mt-6 mb-8">
                <MachineLearningIcon />
                <span className="font-semibold text-lg">NeuroBrain</span>
            </div>
            {/* Sidebar Items */}
            <div className="flex flex-col gap-2 w-full">
                <SidebarItems text="Twitter" icon={<XIcon />} />
                <SidebarItems text="Youtube" icon={<Youtube />} />
            </div>
        </div>
    );
}
