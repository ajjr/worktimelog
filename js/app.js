import { registerTimeEntryForm } from "./components/time_entry_form.js";
import { registerTimeEntryList} from "./components/time_entry_list.js";
import { registerTimeEntrySummary } from "./components/time_entry_summary.js";
import { registerTimeEntryComponent  } from "./components/time_entry_component.js";
import { registerTimeEntryErrorDisplay } from "./components/time_entry_error.js";

import('./components/time_entry_list.css');

const app = () => {
  registerTimeEntryForm();
  registerTimeEntryList();
  registerTimeEntrySummary();
  registerTimeEntryComponent();
  registerTimeEntryErrorDisplay();
}
document.addEventListener('DOMContentLoaded', app);

