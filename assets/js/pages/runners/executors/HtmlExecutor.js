export class HtmlExecutor {
  constructor({ editor, outputElement } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
  }

  stop() {
    if (this.outputElement) {
      this.outputElement.innerHTML = '';
    }
  }

  run() {
    const markup = this.editor?.getValue?.() || '';
    if (!this.outputElement) {
      return;
    }

    try {
      this.outputElement.innerHTML = markup;
    } catch (err) {
      this.outputElement.innerHTML = `<div style="color: red; padding: 1rem;">Error: ${err.message}</div>`;
    }
  }
}

export default HtmlExecutor;
