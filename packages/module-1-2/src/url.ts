const axios = require('axios');

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface FetchedData {
  data: Comment[];
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<FetchedData> => axios.get(url);

getData(COMMENTS_URL).then(({ data }) => {
  data.forEach(({ id, email }) => console.log(({ ID: id, Email: email })));
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
