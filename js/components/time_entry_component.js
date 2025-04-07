class TimeEntryComponent extends HTMLElement {
  #dayList = [];

  connectedCallback() {
    if (this.querySelector('h1')) return;

    this.innerHTML = `
    <x-time-entry-list></x-time-entry-list>
    <x-time-entry-form></x-time-entry-form>
    <x-time-entry-summary></x-time-entry-summary>
    `;

    this.querySelector('x-time-entry-form').addEventListener(
      'time_entry_add', (e) => {
        const entry = e.detail.form;
        const startDatetime = new Date(entry.start_date + 'T' + entry.start_time);
        const endDatetime = new Date(entry.end_date + 'T' + entry.end_time);
        entry.time_passed = endDatetime - startDatetime;
        this.#dayList.push(entry);
        this.update();
      });
    this.update();

  }

  update() {
    this.querySelector('x-time-entry-list').list = this.#dayList.slice();
    this.querySelector('x-time-entry-summary').update(this.#dayList.slice());
  }
}

export const registerTimeEntryComponent = () => {
  customElements.define('x-time-entry-component', TimeEntryComponent);
}
