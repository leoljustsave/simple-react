import { createWorker, Worker } from 'tesseract.js';

interface ParseProps {
  lang?: string | string[];
  img: string;
}

export class Tesseract {
  private worker: Worker;

  constructor() {
    this.worker = createWorker({
      logger: (m) => console.log('[tesseract]:', m),
    });
  }

  async parse({ lang = 'chi_sim', img }: ParseProps) {
    const parseLang = Array.isArray(lang) ? lang.join('+') : lang;

    await this.worker.load();
    await this.worker.loadLanguage(parseLang);
    await this.worker.initialize(parseLang);
    const res = await this.worker.recognize(img);

    console.log('tesseract res: ', res);

    await this.worker.terminate();

    return res.data.text;
  }
}
