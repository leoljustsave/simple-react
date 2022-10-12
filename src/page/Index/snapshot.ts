interface Size {
  width: number;
  height: number;
}

interface SnapshotInitProps {
  size: Size;
}
export class Snapshot {
  private instance: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor({ size }: SnapshotInitProps) {
    this.instance = document.createElement('canvas');

    this.adjust(size);
  }

  adjust({ width, height }: Size) {
    this.instance.width = width;
    this.instance.height = height;
  }

  clear() {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.instance.width, this.instance.height);
  }

  takeShot(video: HTMLVideoElement) {
    if (!this.instance) return;

    this.ctx = this.instance.getContext('2d');
    this.ctx?.drawImage(video, 0, 0, this.instance.width, this.instance.height);
  }

  getCanvas() {
    return this.instance;
  }

  getImageUrl() {
    return this.instance.toDataURL('image/jpeg');
    // return this.ctx?.getImageData(0, 0, this.instance.width, this.instance.height);
  }
}
