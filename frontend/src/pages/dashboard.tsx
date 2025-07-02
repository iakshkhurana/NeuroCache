import { useState } from "react";
import { Button } from "../components/Button";
import { PlusIcon } from "../icons/plus";
import { ShareIcon } from "../icons/share";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { Sidebar } from "../components/Sidebar";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div>
      <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false); }} />
        <div className="flex justify-end gap-4">
          <Button variant="primary" text="Add content" startIcon={<PlusIcon />} />
          <Button variant="secondary" text="Share brain" startIcon={<ShareIcon />} />
        </div>
        <div className="flex gap-4 mt-8">
          <Card type="twitter" link="https://x.com/kirat_tw/status/1633685473821425666" title="First tweet" />
          <Card type="youtube" link="https://www.youtube.com/watch?v=Oo3qsxihXqY" title="First video" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;