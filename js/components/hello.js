class HelloComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 'Hello';
  }
}

export const registerHelloComponent = () => {
  customElements.define('x-hello-component', HelloComponent);
}
