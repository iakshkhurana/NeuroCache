import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
axios

export function useContent(){
    const [contents,setContents] = useState([]);
    useEffect(()=>{
        axios.get(BACKEND_URL + "/api/v1/content",{
            headers:{
                "Authorization" : localStorage.getItem("token")
            }
        }).then((response)=>{
            setContents(response.data.content);
        })
    })
    return contents;
}