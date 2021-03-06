import { Component} from '@angular/core';
import { QuoteService } from '../service/quote.service';
import { Quote } from '../models/quote.class';

@Component({
    selector: 'quote-box',
    templateUrl: './quote-box.component.html', 
    styleUrls: ['./quote-box.component.css']
})

export class QuoteBoxComponent {
    public quote = new Quote('', '',);
    constructor(public quoteService: QuoteService) {
        this.getQuote();
           
            
    }


    public getQuote() {
        this.quoteService.getRandomQuote().subscribe(
            (data: any) => {
                this.quote = new Quote(data.quote, data.author);
                console.log(this.quote)
            }
        );
    }



}



















    






