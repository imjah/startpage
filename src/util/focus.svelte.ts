export class FocusNavigator {
  index = 0;
  items: HTMLElement[] = $state([]);

  at(index: number) {
    this.index = index
    this.current()
  }

  current() {
    this.items[this.index].focus();
  };

  prev() {
    this.at(Math.max(0, this.index - 1));
  };

  next() {
    this.at(Math.min(this.items.length - 1, this.index + 1));
  };
};
