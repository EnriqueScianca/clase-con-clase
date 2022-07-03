class Product{
  name: string
  brand:string
  price: number

  constructor(name:string, marca:string, price:number){
    this.name = name
    this.brand = marca
    this.price = price


  }
}

class DescriptionProduct{
  description: any
  size:number
  
  constructor(description:Product[], size:number){
    this.description = description
    this.size = size
  }
}


function main(){
  const product = new Product("Campera Deportiva", "Nike", 5578);
  const description = new DescriptionProduct([product], 4);

console.log(description.description);
console.log("--------------------------------")
console.log(description.size);

}

main()
