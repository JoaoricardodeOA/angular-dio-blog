import { Component , Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string="https://i.ytimg.com/vi/mVjYG9TSN88/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEyhWMA8=&rs=AOn4CLAd8M7O1rK30HRH-9RXrVAjhjqCOA"
  cardTitle:string=""
  cardDescription:string=""
  private id:string | null = "0"
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
        this.id = value.get("id")
      )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    console.log(result)
    this.cardTitle = result.title
    this.cardDescription = result.description
    this.photoCover = result.photo
  }
}
