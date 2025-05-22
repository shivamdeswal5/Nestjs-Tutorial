
export interface TweetInterface{
    id: number;
    name: string;
    message: string;
}

export class Tweet{
    private tweets = new Map<number, TweetInterface>();

    addTweet(tweet: TweetInterface){
        this.tweets.set(tweet.id,tweet);
    }

    getTweet(id:number){
        this.tweets.get(id);
    }

    getTweets(){
        return this.tweets;
    }

    deleteTweet(id:number){
        this.tweets.delete(id)
    }

}