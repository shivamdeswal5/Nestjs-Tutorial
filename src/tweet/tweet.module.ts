import { Module, Scope } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { Tweet } from './tweet';

@Module({
  controllers: [TweetController],
  providers:[
    {
      provide: 'STORE',
      useClass: Tweet,
      scope: Scope.REQUEST
    },
    {
      provide: 'EMAIL',
      useValue: ['shivam@gmail.com', 'deswal@gmail.com']
    },
    {
      provide: 'EVENT_STORE',
      useFactory: (loading:boolean)=> {
        return  loading ?  'Loading ...' : 'Content loaded ...'
      },
      inject: ['LOADING']
    },
    {
      provide: 'LOADING',
      useValue: true
    }
  ]
})
export class TweetModule {}
