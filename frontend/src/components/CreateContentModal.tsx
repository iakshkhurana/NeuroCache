import { useRef, useState, type ReactElement } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { XIcon } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType{
    Youtube = "youtube",
    Twitter = "twitter"
}

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({open, onClose}: CreateContentModalProps){
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type,setType] = useState(ContentType.Youtube);

    
    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        axios.post(BACKEND_URL + "/api/v1/content" , {
            link,
            title,
            type
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 rounded shadow-slate-500">
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                        <CrossIcon/>
                    </div>
                    <div>
                        <Input ref={titleRef} placeholder={"Title"}/>
                        <Input ref={linkRef} placeholder={"Link"}/>
                    </div>
                    <div className="flex flex-row justify-between">
                        <Button text="Youtube" variant={type===ContentType.Youtube ? "primary" : "secondary"} onClick={()=>setType(ContentType.Youtube)} startIcon={Youtube()}/>
                        <Button text="Twitter" variant={type===ContentType.Twitter ? "primary" : "secondary"} onClick={()=>setType(ContentType.Twitter)} startIcon={XIcon()}/>
                    </div>
                    <div className="flex justify-center mt-2">
                    <Button onClick={addContent} variant="primary" text="Submit" startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
}></Button>
                    </div>
                </span>
            </div>
        </div>}
    </div>
}
