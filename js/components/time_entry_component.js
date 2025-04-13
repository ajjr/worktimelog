class TimeEntryComponent extends HTMLElement {
  #dayList = [];
  #errorState = false;

  connectedCallback() {
    if (this.querySelector('h1')) return;

    this.innerHTML = `
    <x-time-entry-list></x-time-entry-list>
    <x-time-entry-form></x-time-entry-form>
    <x-time-entry-summary></x-time-entry-summary>
    <x-time-entry-error></x-time-entry-error>
    `;

    this.querySelector('x-time-entry-form').addEventListener(
      'time_entry_add', (e) => {
        let errorState = false;
        const entry = e.detail.form;
        const startDatetime = new Date(entry.start_date + 'T' + entry.start_time);
        const endDatetime = new Date(entry.end_date + 'T' + entry.end_time);
        this.#dayList.forEach((val) => {
          const valStartDatetime = new Date(val.start_date + 'T' + val.start_time);
          const valEndDatetime = new Date(val.end_date + 'T' + val.end_time);
          if (
            (startDatetime >= valStartDatetime && startDatetime <= valEndDatetime) ||
            (endDatetime >= valStartDatetime && endDatetime <= valEndDatetime)
          ) {
            errorState = true;
          }
        });
        if (!errorState) {
          entry.time_passed = endDatetime - startDatetime;
          this.#dayList.push(entry);
        }
        this.#errorState = errorState;
        this.update();
      });
    this.update();

  }

  update() {
    this.querySelector('x-time-entry-list').list = this.#dayList.slice();
    this.querySelector('x-time-entry-summary').update(this.#dayList.slice());
    this.querySelector('x-time-entry-error').update(this.#errorState);
  }
}

export const registerTimeEntryComponent = () => {
  customElements.define('x-time-entry-component', TimeEntryComponent);
}
