class TimeEntryErrorDisplay extends HTMLElement {

    update(errorState) {
        if (errorState) {
            this.innerHTML = '<p class="error-msg">Malformed time period.</p>';
        } else {
            this.innerHTML = '';
        }

    }
}

export const registerTimeEntryErrorDisplay = () => {
  customElements.define('x-time-entry-error', TimeEntryErrorDisplay);
}