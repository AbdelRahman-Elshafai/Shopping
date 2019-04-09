import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  @ViewChild('dropDown') dropDown : ElementRef;

  constructor(private renderer:Renderer2 , private el :ElementRef , private cartService:CartService) { }

  ngOnInit() {
    this.cartService.orderProduct.subscribe( (productName:String) => {
      this.createAnchorTag(productName);
    });
  }

    //create the anchor tag the appends the element in the menu
    createAnchorTag(productName){
      const anchor = this.renderer.createElement('a');
      this.renderer.addClass(anchor , 'dropdown-item');
      this.renderer.setAttribute(anchor , 'ngbDropdownItem' , '');
      const text = this.renderer.createText(productName);
      this.renderer.appendChild(anchor , text);
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
      this.removeItem(element);
    });
    return button;
  }
  removeItem(element){
    this.renderer.removeChild(this.dropDown.nativeElement , element.target.parentNode.parentNode);    
  }

}
