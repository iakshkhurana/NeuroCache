import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/plus";
import { ShareIcon } from "../icons/share";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import type { Content } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(true);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false); }} />
        <div className="flex justify-end gap-4">
          <Button onClick={() => setModalOpen(true)} variant="primary" text="Add content" startIcon={<PlusIcon />} />
          <Button onClick={async()=>{
            const response = await axios.post(BACKEND_URL + "/api/v1/brain/share/",{
              share:true
            },{
              headers:{
                Authorization:localStorage.getItem("token")
              }
            });
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            alert(shareUrl);
          }} variant="secondary" text="Share brain" startIcon={<ShareIcon />} />
        </div>
        <div className="flex gap-4 mt-8 flex-wrap">
          {contents.map(({ type, link, title }: Content) => (
            <Card
              key={link}
              type={type}
              link={link}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;