export class ListManager {
  lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  getList = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.lists);
      }, 0);
    });

  removeList = (target) =>
    new Promise((resolve) => {
      this.lists = this.lists.filter((item) => item !== target);
      resolve();
    });
}
