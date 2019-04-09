import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  @ViewChild('dropDown') dropDown : ElementRef;

  constructor(private renderer:Renderer2 , private el :ElementRef) { }

  ngOnInit() {
    const anchor = this.renderer.createElement('a');
    const text = this.renderer.createText('hello world');
    this.renderer.appendChild(anchor , text);
    this.renderer.appendChild(this.dropDown.nativeElement , anchor);
    // this.createAnchor();
    this.createXButton();
  }


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
    this.renderer.listen(button , 'click' , () => {
      this.removeItem();
    });
    this.renderer.appendChild(this.dropDown.nativeElement , button);
  }

  removeItem(){
    console.log("hello");
    
  }

}
