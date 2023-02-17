export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[100, 'No data uploaded'], [200, 'Data is corrupted'], [300, 'Data deleted']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}

const data = new ErrorRepository();
