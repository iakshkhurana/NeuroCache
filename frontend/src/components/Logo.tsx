import type { ReactElement } from "react";

interface Logo{
    startIcon : ReactElement;
    text : string;
}

export function LogoElement({startIcon,text}: Logo){
    return <div className="flex flex-row items-center">
        <div className="pt-6 pr-1 flex">
            {startIcon}
        </div>
        <div className="pt-6.5 text-xl">
            {text}
        </div>
    </div>
}