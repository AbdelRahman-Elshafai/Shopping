import { Component, OnInit , ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-wish-counter',
  templateUrl: './wish-counter.component.html',
  styleUrls: ['./wish-counter.component.scss']
})
export class WishCounterComponent implements OnInit {
  @ViewChild('dropDown') dropDown : ElementRef;

  wishList : any[] = [];
  addedWishId : Number[] = [];

  constructor(private renderer:Renderer2 , private el :ElementRef , private cartService:CartService) { }

  ngOnInit() {

    if(localStorage.getItem('WishList')){
      this.wishList = JSON.parse(localStorage.getItem('WishList'));
      this.wishList.forEach(product => {
        this.createAnchorTag(product.ProductName);
        this.addedWishId.push(product.ProductId);
      });
    }
    else{
      localStorage.setItem('WishList' , JSON.stringify(this.wishList));
    }

    this.cartService.wishProduct.subscribe( (product:any) => {
      let currentWishIndex = this.addedWishId.indexOf(product.ProductId);

      if(currentWishIndex === -1){

        this.addedWishId.push(product.ProductId);

        this.wishList.push({
          "ProductId" : product.ProductId,
          "ProductName" : product.ProductName
        });

        //crate the element that has the product 
        this.createAnchorTag(product.ProductName);        

        //store the product or update in the localstorage    
        localStorage.setItem('WishList' , JSON.stringify(this.wishList));

      }
    });

    
  }

  //create the anchor tag the appends the element in the menu
  createAnchorTag(productName:string){      
    const anchor = this.renderer.createElement('a');
    this.renderer.addClass(anchor , 'dropdown-item');
    this.renderer.setAttribute(anchor , 'ngbDropdownItem' , '');
    let span = this.renderer.createElement('span');
    this.renderer.setAttribute(span , 'aria-hidden' , 'true');
    let text = this.renderer.createText(productName);
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

      //get the index of the product
      var index = Array.prototype.indexOf.call(this.dropDown.nativeElement.children, parent);
      
      this.addedWishId.splice(index , 1);
      this.wishList.splice(index, 1);
      this.renderer.removeChild(this.dropDown.nativeElement , parent); 

      localStorage.setItem('WishList' , JSON.stringify(this.wishList));

    }

}
