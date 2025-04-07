class TimeEntryList extends HTMLElement {
  #currentList = [/* start_datetime, end_datetime, time_passed */];

  set list(newList) {
    this.#currentList = newList;
    this.update();
  }

  update() {
    if (this.#currentList.length === 0) return;

    this.innerHTML =
      '<ul class="time-entry-list">' +
      this.#currentList.map( (entry) => {
        const passedHours = Math.floor(
          entry.time_passed / 1000 / 60 / 60 ).toLocaleString(
            'fi-FI', {minimumIntegerDigits: 2, useGrouping:false});
        const passedMinutes = Math.floor(
          (entry.time_passed / 1000 / 60) % 60 ).toLocaleString(
            'fi-FI', {minimumIntegerDigits: 2, useGrouping:false});
        return `<li id="${entry.id}">From <span class="entry">${entry.start_time}</span> to <span class="entry">${entry.end_time}</span> passed <span class="result">${passedHours}:${passedMinutes}</span> </li>` }
      ).join('\n') +
      '</ul>';
  }
}

export const registerTimeEntryList = () => {
  customElements.define('x-time-entry-list', TimeEntryList);
}
