import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { user } from "../icons/user";

export function Signin(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button loading={true} variant="primary" text="Signin" startIcon={user()} fullWidth={true}/>
            </div>
            
        </div>
    </div>
}