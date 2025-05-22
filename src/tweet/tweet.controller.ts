import { Controller, Get, Inject } from '@nestjs/common';
import { Tweet } from './tweet';
import { TweetInterface } from './tweet';

@Controller('tweet')
export class TweetController {
    constructor(
    @Inject('STORE') private tweet:Tweet, 
    @Inject('EMAIL') private email:string[],
    @Inject('EVENT_STORE') private eventStote:string){}

    @Get()
    getTweets(){
        const tweet : TweetInterface = {
            id: 1,
            name: 'Shivam',
            message: 'Shivam Deswal'
        }
        this.tweet.addTweet(tweet);
        console.log(this.tweet.getTweets());
        console.log("Emails are: ",this.email);
        console.log('Result of Factory Function: ',this.eventStote);
        
    }
}
