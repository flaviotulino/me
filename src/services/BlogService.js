import path from 'path';
import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/flaviotulino/articles';

const url = url => path.normalize(`${BASE_URL}/${url}`);

const getArticleFile = ({ category, article, file }) => axios
  .get(url(`contents/${category}/${article}/${file}`))
  .then((response) => {
    const { download_url } = response.data;
    return axios.get(download_url).then(({ data }) => data);
  });

export default class BlogService {
  static getCategories() {
    return axios.get(url('contents')).then(({ data }) => data);
  }

  static search(term) {
    return axios
      .get(`https://api.github.com/search/code?q=${term}+in:articles+repo:flaviotulino/me-articles+extension:.md`, {
        headers: {
          Accept: 'application/vnd.github.v3.text-match+json',
        },
      })
      .then(({ data }) => data);
  }

  static getArticles(category) {
    return axios
      .get(url(`contents/${category}`))
      .then((response) => {
        const articles = response.data;
        const getSingleArticle = articles.map(article => this.getArticle({ category, article: article.name }));

        return Promise.all(getSingleArticle)
          .then((response) => {
            response.forEach((info, index) => {
              articles[index] = { ...articles[index], ...info };
            });

            return articles;
          });
      });
  }

  static getArticleInfo({ category, article }) {
    return getArticleFile({ category, article, file: 'info.json' });
  }

  static getArticleCover({ category, article }) {
    return getArticleFile({ category, article, file: 'cover.jpeg' });
  }

  static getArticle({ category, article }) {
    return axios
      .get(url(`contents/${category}/${article}`))
      .then(({ data }) => {
        const content = data.find(item => item.name === 'index.md');
        const info = data.find(item => item.name === 'info.json');
        const cover = data.find(item => item.name.match(/cover/));

        return Promise.all([
          axios.get(content.download_url),
          axios.get(info.download_url),
        ]).then(([content, info]) => ({
          content: content.data,
          cover: { url: cover.download_url, alt: cover.name },
          ...info.data,

        }));
      });
  }
}
