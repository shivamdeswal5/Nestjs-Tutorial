import { Controller, Get } from '@nestjs/common';

@Controller('tweet')
export class TweetController {
    @Get()
    getTweets(){
        
    }
}
