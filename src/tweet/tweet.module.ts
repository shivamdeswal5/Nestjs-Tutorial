import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { Tweet } from './tweet';

@Module({
  controllers: [TweetController],
  providers:[
    {
      provide: Tweet,
      useClass: Tweet
    }
  ]
})
export class TweetModule {}
