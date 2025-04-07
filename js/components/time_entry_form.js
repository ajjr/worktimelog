class TimeEntryForm extends HTMLElement {

  connectedCallback() {
    if (this.querySelector('#time-entry-form')) return;
    this.innerHTML = `
    <form id="time-entry-form" name="time-entry-form">
    <p class="form-item">
    <label for="start_time">Period start</label>
    <input type="date" name="start_date" id="start_date" value="${new Date().toJSON().slice(0, 10)}">
    <input type="time" name="start_time" id="start_time">
    </p>
    <p class="form-item">
    <label for="end_time">Period end</label>
    <input type="date" name="end_date" id="end_date" value="${new Date().toJSON().slice(0, 10)}">
    <input type="time" name="end_time" id="end_time">
    <button type="submit">Add</button>
    </p>
    </form>
    `;

    this.querySelector('form').onsubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      this.dispatchEvent(new CustomEvent('time_entry_add', { detail: { form: Object.fromEntries(data.entries()) } }
      ));
      e.target.reset();
    }
  }


}

export const registerTimeEntryForm = () => {
  customElements.define('x-time-entry-form', TimeEntryForm);
}
