// Sidebar ke andar ke buttons

import type { ReactElement } from "react";

interface Sidebar{
    text : string;
    icon : ReactElement;
}

export function SidebarItems({text,icon}: Sidebar){
    return <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded transition-all duration-700">
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2">
            {text}
        </div>
        
    </div>
}