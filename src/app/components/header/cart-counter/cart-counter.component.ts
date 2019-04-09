import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  @ViewChild('dropDown') dropDown : ElementRef;

  cartProducts :any[] = [];
  addedProductsId : Number[] = [];

  productCount= 1;
  constructor(private renderer:Renderer2 , private el :ElementRef , private cartService:CartService) { }

  ngOnInit() {
    if(localStorage.getItem('Products')){
      
      this.cartProducts = JSON.parse(localStorage.getItem('Products')).slice();
      this.cartProducts.forEach(product => {        
        this.createAnchorTag(product.ProductName , product.ProductCount);
        this.addedProductsId.push(product.ProductId);
      });
    }
    else{
      localStorage.setItem('Products' , JSON.stringify(this.cartProducts));
      
    }
    this.cartService.orderProduct.subscribe( (product:any) => {
      
      //check to see if the user already added the product
      let currentProductIndex = this.addedProductsId.indexOf(product.ProductId)
      if(currentProductIndex !== -1){

        //update the counter in the component
        this.incrementCounter(product.ProductName , this.cartProducts[currentProductIndex].ProductCount);

        //increase the count by one
        this.cartProducts[currentProductIndex].ProductCount++;      
        
      }
      else{
        //store the product id in the added arrary
        this.addedProductsId.push(product.ProductId);
        //store the product in the array
        this.cartProducts.push({
          "ProductId" : product.ProductId,
          "ProductName" : product.ProductName,
          "ProductPrice" : product.ProductPrice,
          "ProductCount" : this.productCount
        });        
        //crate the element that has the product 
        this.createAnchorTag(product.ProductName , this.productCount);

      }
      //store the product or update in the localstorage    
      localStorage.setItem('Products' , JSON.stringify(this.cartProducts));

    });

    this.cartService.removeProduct.subscribe((productIndex:number) => {
      // console.log(this.dropDown.nativeElement.children[productIndex]);
      this.decrementCounter(this.dropDown.nativeElement.children[productIndex]);
      localStorage.setItem('Products' , JSON.stringify(this.cartProducts));
            
    });
  }


    //create the anchor tag the appends the element in the menu
    createAnchorTag(productName:string , productCount:number){      
      const anchor = this.renderer.createElement('a');
      this.renderer.addClass(anchor , 'dropdown-item');
      this.renderer.setAttribute(anchor , 'ngbDropdownItem' , '');
      let span = this.renderer.createElement('span');
      this.renderer.setAttribute(span , 'aria-hidden' , 'true');
      let text = this.renderer.createText(productName);
      this.renderer.appendChild(span , text);
      this.renderer.appendChild(anchor , span);
      span = this.renderer.createElement('span');
      this.renderer.setAttribute(span , 'aria-hidden' , 'true');
      text = this.renderer.createText(" (" + productCount + ")");
      this.renderer.appendChild(span , text);
      this.renderer.appendChild(anchor , span);
      const button = this.createXButton();
      this.renderer.appendChild(anchor , button);
      this.renderer.appendChild(this.dropDown.nativeElement , anchor);
    }

  //create the x button for every product that gets added
  createXButton(){
    const button = this.renderer.createElement('button');
    this.renderer.setAttribute(button , 'type' , 'button');
    this.renderer.setAttribute(button , 'aria-label' , 'Close');
    this.renderer.addClass(button , 'close');
    const span = this.renderer.createElement('span');
    this.renderer.setAttribute(span , 'aria-hidden' , 'true');
    const text = this.renderer.createText('×');
    this.renderer.appendChild(span , text);
    this.renderer.appendChild(button , span);    
    this.renderer.listen(button , 'click' , (element) => {
      this.removeItemFromDropDown(element);
    });
    return button;
  }
  //remove the element from the dropdown menu
  removeItemFromDropDown(element){    
    let parent = element.target.parentNode.parentNode;    
    this.decrementCounter(parent);  
    localStorage.setItem('Products' , JSON.stringify(this.cartProducts));
  }
  
  //remove the element from the array
  decrementCounter(parent){   
    
    //get the index of the product
    var index = Array.prototype.indexOf.call(this.dropDown.nativeElement.children, parent);
    //decrease it by one
    this.cartProducts[index].ProductCount--;
    
    //if it is below 1 Remove it From the array
    //and remove it from the added array
    //and remove it from the component
    if(this.cartProducts[index].ProductCount < 1){
      this.addedProductsId.splice(index , 1);
      this.cartProducts.splice(index, 1);
      this.renderer.removeChild(this.dropDown.nativeElement , parent);     
    }
    else{

      //remove one from the counter in component
      parent.children[1].innerHTML = " (" + this.cartProducts[index].ProductCount + ")";
    }

  }

  incrementCounter(productName:String , productCount){

    //loop over all of the children of the parent
    for (let child of this.dropDown.nativeElement.children) {
      //if u find the right child
      if(child.children[0].innerHTML === productName){    
        //increase the count by 1 
        productCount++;   

        //and set the innerhtml to the new value
        child.children[1].innerHTML = " (" + productCount + ")";
      }
    }
  }


}
