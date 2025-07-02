import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { signupIcon } from "../icons/userplus";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        axios.post(BACKEND_URL + "/api/v1/signup",{
            username,
            password
        }).then(() => {
            alert("You have signed up!");
        }).catch((error) => {
            console.error("Signup error:", error);
            alert("Signup failed!");
        });
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button onClick={signup} variant="primary" text="Signup" startIcon={signupIcon()} fullWidth={true}/>
            </div>
            
        </div>
    </div>
}