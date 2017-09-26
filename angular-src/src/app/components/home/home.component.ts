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
    this.slideIndex = -1;
    this.slide1=true;

    this.autoRollSlideshow();
  }





/* Slideshow and Slideshowautimation - Horrible Code-->need for Improvement*/
  slideIndex: number =0;
  numberOfSlides: number=3;
  slide1: boolean =false;
  slide2: boolean =false;
  slide3: boolean =false;

  public  plusSlides(n) { // in- or decrements slideIndex
    this.slideIndex = this.slideIndex +n;
    if(this.slideIndex<0){
      this.slideIndex= this.numberOfSlides-1; // wenn zurückÜberlauf-->springe ans ende
    }else if(this.slideIndex>this.numberOfSlides-1){
      this.slideIndex=0; // Wenn weiterÜberlauf-->sprnge zum anfang
    }
    this.showSlides(this.slideIndex);
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

   slideshowRolling : boolean = true;
   public autoRollSlideshow(){
      if(this.slideshowRolling){
        this.plusSlides(1);
        this.showSlides(this.slideIndex)
      }
      setTimeout(this.autoRollSlideshow.bind(this), 7000);
   }



  public enterSlideshow(){
    this.slideshowRolling = false;
  }

  public leaveSlideshow(){
    this.slideshowRolling = true;
  }



  public  showSlides(n) { //sets the current slide as active and deactivates the others
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

    //setTimeout(this.callHelper.bind(this), 7000);

  }


}
