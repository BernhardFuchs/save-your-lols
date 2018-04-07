export class LolData  {
    public location: string;
    public headline: string;
    public imgUrl: string;
    public imgData: any;

    constructor(location: string, headline: string, imgUrl: string, gifData: any) {
        this.location = location;
        this.headline = headline;
        this.imgUrl = imgUrl;
        this.imgData = gifData;
    }
}

/* Server Data:
{
    resHeaderLocation: '',
    resHeadline: '',
    resGifUrl:'',
    resGif: ''
}
*/
