type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  otroMetodo() {
    if (this.name.length <= 0) throw Error("Name is empty");
    if (this.price <= 0) throw Error("Price is zero");
    if (this.size.length <= 0) throw Error("Sice is empty");
  }

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
          break;
        case "number":
          if (<number>this[key] <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
      console.log(key, typeof this[key]);
    }
    return true;
  }

  toString() {
    // No DRY
    // if (this.name.length <= 0) throw Error("Name is empty");
    // if (this.price <= 0) throw Error("Price is zero");
    // if (this.size.length <= 0) throw Error("Sice is empty");
    if (!this.isProductReady()) return;
    return `${this.name} ($${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue Large Pants", 10, "M");
  //   const bluePants2 = new Product("");

  console.log(bluePants.toString());
  //   console.log(bluePants2.toString());
})();
