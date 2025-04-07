class TimeEntrySummary extends HTMLElement {
  update(list) {
    if (list.length === 0) return;

    const sum = list.reduce((sum, item) => {
      return sum + item.time_passed;
    }, 0);
    const hh = Math.floor(sum / 1000 / 60 / 60).toLocaleString(
      'fi-FI', {minimumIntegerDigits: 1, useGrouping:false});
    const mm = Math.floor((sum / 1000 / 60) % 60).toLocaleString(
      'fi-FI', {minimumIntegerDigits: 2, useGrouping:false});
    const hhDec = (sum / 1000 / 60 / 60).toLocaleString(
      'fi-FI', {minimumIntegerDigits: 1, useGrouping:false, minimumFractionDigits: 2});


    this.innerHTML = `<div class="time-entry-summary">
    <p>Workday total: ${hh}:${mm} (${hhDec} hours)</p>
    </div>`;
  }
}

export const registerTimeEntrySummary = () => {
  customElements.define('x-time-entry-summary', TimeEntrySummary);
}
