class HomeElements {
  static get homeIconButton() {}

  static get headerLinks() {
    return {
      home: () => {},
      contact: () => {},
      aboutUs: () => {},
      cart: () => {},
      login: () => {},
      signUp: () => {},
    };
  }

  static get categoryButtons() {
    return {
      phones: () => {},
      laptops: () => {},
      monitors: () => {},
    };
  }

  static get navigationButtons() {
    return {
      next: () => {},
      previous: () => {},
    };
  }
}
