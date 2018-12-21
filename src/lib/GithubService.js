import path from 'path';
import axios from 'axios';
const BASE_URL = 'https://api.github.com/repos/flaviotulino/countdown';

export class GitHubService {
  static url(url) {
    return path.normalize(`${BASE_URL}/${url}`);
  }

  static getContent() {
    return axios.get(this.url('contents'));
  }
}
