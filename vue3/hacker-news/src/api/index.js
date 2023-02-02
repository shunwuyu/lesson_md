import axios from 'axios'


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/"
});


function getTopStories(){
    return instance.get('topstories.json?print=pretty')
}
function fetchItem(id){
    return instance.get(`item/${id}.json?print=pretty`)
}
const API = {
    getTopStories: getTopStories,
    fetchItem: fetchItem

}

export default API