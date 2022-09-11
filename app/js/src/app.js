class App {
  constructor () {
    this.addEvents();
  }

  addEvents () {
    document.addEventListener('DOMContentLoaded', e => {
      this.initLibs();
      this.initModules();
    });
    document.documentElement.addEventListener('touchstart', e => {
      if (e.touches.length > 1) e.preventDefault();
    });
  }

  initLibs () {
  }

  initModules () {
    disablingPreloader();
  }
}

const app = new App();
