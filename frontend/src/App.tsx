import {Button} from "./components/Button";
import { PlusIcon } from "./icons/plus";
import { ShareIcon } from "./icons/share";
import {Card} from "./components/Card";

function App() {
  return <div className="p-8 space-y-4">
    <div className="flex gap-4">
      <Button variant="primary" text="Add content" startIcon={<PlusIcon/>}></Button>
      <Button variant="secondary" text="Share brain" startIcon={<ShareIcon/>}></Button>
    </div>
    <Card title="Sample Twitter Post" link="https://x.com/kanavtwt/status/1939034740721651785?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1939034740721651785%7Ctwgr%5E86df2928d9e11987f754ab8ded96a501885db263%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2Fkanavtwt%2Fstatus%2F1939034740721651785" type="twitter"/>
  </div>
}

export default App;