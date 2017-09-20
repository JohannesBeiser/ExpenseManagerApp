import { Component, OnInit } from '@angular/core';
import {ComponentCommunicationService} from '../../services/component-communication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(  private _compCommunication: ComponentCommunicationService,
                private router: Router
  ) {
    this._compCommunication.activateHomeSite();

 }

  ngOnInit() {
    this._compCommunication.activateHomeSite();
    this.slideIndex = 0;
    this.slide1=true;
    this.showSlides(this.slideIndex);
  }





/* Slideshow and Slideshowautimation - Horrible Code-->need for Improvement*/
  slideIndex: number =0;
  numberOfSlides: number=3;
  slide1: boolean =false;
  slide2: boolean =false;
  slide3: boolean =false;

  public  plusSlides(n) {
    this.slideIndex = this.slideIndex +n;
    if(this.slideIndex<0){
      this.slideIndex= this.numberOfSlides-1; // wenn zurückÜberlauf-->springe ans ende
    }else if(this.slideIndex>this.numberOfSlides-1){
      this.slideIndex=0; // Wenn weiterÜberlauf-->sprnge zum anfang
    }
    this.showSlides(this.slideIndex);
  }

  public  plusSlidesWithoutRecursive(n) {
    this.slideIndex = this.slideIndex +n;
    if(this.slideIndex<0){
      this.slideIndex= this.numberOfSlides-1; // wenn zurückÜberlauf-->springe ans ende
    }else if(this.slideIndex>this.numberOfSlides-1){
      this.slideIndex=0; // Wenn weiterÜberlauf-->sprnge zum anfang
    }
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    this.slide1=false;
    this.slide2=false;
    this.slide3=false;

    if(this.slideIndex==0){
      this.slide1=true;
    }else if(this.slideIndex==1){
      this.slide2=true;
    }else if(this.slideIndex==2){
      this.slide3=true;

    }

    for (i = 0; i < this.numberOfSlides; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[this.slideIndex].className += " active";
  }

  public  currentSlide(n) { // wird durch Dots ausgelöst-->clicks counten und
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    this.slide1=false;
    this.slide2=false;
    this.slide3=false;

    if(n==0){
      this.slide1=true;
    }else if(n==1){
      this.slide2=true;
    }else if(n==2){
      this.slide3=true;
    }

    for (i = 0; i < this.numberOfSlides; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
   }

  public callHelper(){
      console.log("next Slide");
      if(!this.mouseOverSlideshow){
        this.plusSlides(1);
      }
  }

  mouseOverSlideshow: boolean=false;
  public enterSlideshow(){
    this.mouseOverSlideshow = true;
    console.log("entered Slide");
  }

  public leaveSlideshow(){
    console.log("left Slide");
    this.leaveCounter++;
    setTimeout(this.callHelper2.bind(this), 7000);
  }

  leaveCounter:number=0;
  public callHelper2(){ //hier kommen nur durch events durch einen leave an
    this.mouseOverSlideshow = false;
    if(this.leaveCounter==1){
      console.log("next Slide");
      if(!this.mouseOverSlideshow){
        this.plusSlides(1);
        this.leaveCounter=0;
      }
    }else{//counter
      this.leaveCounter--;
    }
  }

  public  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    this.slide1=false;
    this.slide2=false;
    this.slide3=false;

    if(n==0){
      this.slide1=true;
    }else if(n==1){
      this.slide2=true;
    }else if(n==2){
      this.slide3=true;
    }

    for (i = 0; i < this.numberOfSlides; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[this.slideIndex].className += " active";

    setTimeout(this.callHelper.bind(this), 7000);

  }


}
