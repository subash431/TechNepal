import "./Components.css";
import Button from "./Button";
import Input from "./Input";
import { faSearch, faVoicemail } from "@fortawesome/free-solid-svg-icons"; // Import required icons
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSearch, faVoicemail);

function Components() {
  return (
    <div className="components">
      <header className="App-header"></header>
      <Button>Subscribe</Button>
      <Input
        label="Username:"
        type="text"
        placeholder="Search"
        icon={faSearch}
      />
      <Input
        label="Password:"
        type="password"
        placeholder="Your E-Mail"
        icon={faVoicemail}
      />
    </div>
  );
}

export default Components;
