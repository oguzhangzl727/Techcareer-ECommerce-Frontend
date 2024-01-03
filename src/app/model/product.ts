export class Product {
    id: number | undefined;
    quantity: number | undefined;
    pictureurl: string | undefined;
    name: string | undefined;
    price: number | undefined;
  
    constructor(id?: number, quantity?: number, pictureurl?: string, name?: string, price?: number) {
      this.id = id;
      this.quantity = quantity;
      this.pictureurl = pictureurl;
      this.name = name;
      this.price = price;
    }
  
    getId(): number | undefined {
      return this.id;
    }
  
    setId(id: number): void {
      this.id = id;
    }
  
    getName(): string | undefined {
      return this.name;
    }
  
    setName(name: string): void {
      this.name = name;
    }
  
    getPrice(): number | undefined {
      return this.price;
    }
  
    setPrice(price: number): void {
      this.price = price;
    }
  
    getQuantity(): number | undefined {
      return this.quantity === 0 ? 1 : this.quantity;
    }
  
    setQuantity(quantity: number): void {
      this.quantity = quantity;
    }
  
    getPictureUrl(): string | undefined {
      return this.pictureurl;
    }
  
    setPictureUrl(pictureurl: string): void {
      this.pictureurl = pictureurl;
    }
  }
  