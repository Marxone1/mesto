export class Section {
    constructor({ items, renderer }, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
    clear(){
        this._container.innerHTML = ''
    }
    renderItems(cards) {
      this.clear();
      cards.forEach(item => {
        this._renderer(item);
      });
    }
    setItems(cards){
      this._renderedItems = cards;
    }
  }