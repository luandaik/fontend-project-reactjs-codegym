class AppUrl{
    static BaseUrl = 'http://127.0.0.1:8000/api/';
    
    static ContactSend = `${this.BaseUrl}contactsend`;
    static HomeComicData = `${this.BaseUrl}getcomichome`;
    static AllComicData =  `${this.BaseUrl}getallcomic`;
    static NewComicData = `${this.BaseUrl}getnewcomic`;
    static DetailComicData = `${this.BaseUrl}comicdetails/`;
    static FooterData =  `${this.BaseUrl}getfooter`;
    static AboutData = `${this.BaseUrl}getabout`;
    static ServiceData = `${this.BaseUrl}getservice`;
    static TotalHomeData =`${this.BaseUrl}totalhome`;
    static HomeTopTitleData = `${this.BaseUrl}titlehome`;

}
export default AppUrl;