import { useState, type ReactElement } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
CrossIcon
import { Input } from "./Input";


export function CreateContentModal({open,onClose}){
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded shadow-slate-500">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon/>
                    </div>
                    <div>
                        <Input placeholder={"Title"}/>
                        <Input placeholder={"Link"}/>
                    </div>
                    <div className="flex justify-center">
                    <Button variant="primary" text="Submit" startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
}></Button>
                    </div>
                </span>
            </div>
        </div>}
    </div>
}
