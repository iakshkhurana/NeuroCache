import {Button} from "./components/Button";
import { PlusIcon } from "./icons/plus";
import { ShareIcon } from "./icons/share";
import {Card} from "./components/Card";

function App() {
  return <div>
    <Button variant="primary" text="Add content" startIcon={<PlusIcon/>}></Button>
    <Button variant="secondary" text="Share brain" startIcon={<ShareIcon/>}></Button>
    <Card/>
  </div>
}

export default App;