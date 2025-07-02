export function Input({ placeholder, onChange }: { placeholder: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div>
            <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" onChange={onChange} />
        </div>
    );
}
