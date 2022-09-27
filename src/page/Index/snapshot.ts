export class Snapshot {
  private instance: HTMLCanvasElement;

  constructor() {
    this.instance = document.createElement('canvas');
  }

  adjust(width: number, height: number) {
    if (!this.instance) return;

    this.instance.width = width;
    this.instance.height = height;
  }
}
