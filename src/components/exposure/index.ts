export class ExposureObserver {
  observer: IntersectionObserver;
  neverExposed = true;
  neverExposedCallback: () => void;
  constructor(
    exposedCallback: () => void, // 曝光回调
    neverExposedCallback: () => void = () => { }, // 未曝光回调
    options: IntersectionObserverInit = {
      threshold: 1, // 触发回调的曝光阈值
      root: null, // 祖先元素，null则为顶层元素
    },
  ) {
    this.neverExposedCallback = neverExposedCallback;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.intersectionRatio > 0) {
          exposedCallback();
          this.neverExposed = false;
          this.unobserve(item.target); // 曝光一次就停止监听
        }
      });
    }, options);
  }

  // 停止对被观察者的观察
  unobserve(el: Element) {
    this.observer.unobserve(el);
    if (this.neverExposed) {
      this.neverExposedCallback();
    }
  }

  // 添加被观察者
  observe(el: Element) {
    this.observer.observe(el);
  }

  // 关闭观察器
  disconnect() {
    if (!this.observer) {
      return;
    }
    this.observer.disconnect();
  }
}
