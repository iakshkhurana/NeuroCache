import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { user } from "../icons/user";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
            username,
            password,
        }).then((response) => {
            const jwt = response.data.token;
            localStorage.setItem("token",jwt);
            alert("Successfully signed in!");
            navigate("/dashboard");
        }).catch((error) => {
            console.error("Signin error:", error);
            alert("Signin failed!");
        });
    }
    
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" type="password" />
            <div className="flex justify-center pt-4">
                <Button onClick={signin} variant="primary" text="Signin" startIcon={user()} fullWidth={true}/>
            </div>
            
        </div>
    </div>
}