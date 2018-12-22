import path from 'path';
import axios from 'axios';
const BASE_URL = 'https://api.github.com/repos/flaviotulino/me';

const url = url => path.normalize(`${BASE_URL}/${url}`);
export class BlogService {
  static getCategories() {
    return axios.get(url('contents/articles')).then(({data}) => {return data});
  }

  static search(term) {
    // TODO:
    //https://api.github.com/search/code?q=first+in:articles+repo:flaviotulino/me+extension:.md
  }

  static getArticles(category) {
    return axios
      .get(url(`contents/articles/${category}`))
      .then((response) => {
        const articles = response.data;
        return Promise.all(articles.map(article => this.getArticleInfo({category, article: article.name})))
          .then((response) => {
            response.forEach((info, index) => {
              articles[index] = {...articles[index], ...info.data}
            });

            return articles;
          });
      });
  }

  static getArticleInfo({category, article}) {
    return axios
      .get(url(`contents/articles/${category}/${article}/info.json`))
      .then(response => {
        const {download_url} = response.data;
        return axios.get(download_url);
      });
  }

  static getArticle({category, article}) {
    return axios
      .get(url(`contents/articles/${category}/${article}`))
      .then(({data}) => {
        const content = data.find(item => item.name === 'index.md');
        const info = data.find(item => item.name === 'info.json');

        return Promise.all([
          axios.get(content.download_url),
          axios.get(info.download_url)
        ]).then(([content, info]) => {
          return {
            content: content.data,
            ...info.data
          }
        })
      });
  }
}
