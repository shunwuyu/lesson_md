let Mock = require('mockjs');
const Random = Mock.Random

Mock.mock('init_movie', 'get', {
	Search: [
		{
			Title: 'Ice Age',
			Year: '2002',
			imdbID: 'tt0268380',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMmYxZWY2NzgtYzJjZC00MDFmLTgxZTctMjRiYjdjY2FhODg3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg',
		},
		{
			Title: 'Ice Age: The Meltdown',
			Year: '2006',
			imdbID: 'tt0438097',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_SX300.jpg',
		},
		{
			Title: 'Ice Age: Dawn of the Dinosaurs',
			Year: '2009',
			imdbID: 'tt1080016',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMTMzNDkzMTcyOV5BMl5BanBnXkFtZTcwNDIzMjM2MQ@@._V1_SX300.jpg',
		},
		{
			Title: 'Ice Age: Continental Drift',
			Year: '2012',
			imdbID: 'tt1667889',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMTM3NDM5MzY5Ml5BMl5BanBnXkFtZTcwNjExMDUwOA@@._V1_SX300.jpg',
		},
		{
			Title: 'The Ice Storm',
			Year: '1997',
			imdbID: 'tt0119349',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNTQ1NzI1MzgtYWM3ZC00YjdhLWE1ODAtMmU0YzQzYjY3MjNiXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg',
		},
		{
			Title: 'Ice Age: Collision Course',
			Year: '2016',
			imdbID: 'tt3416828',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMzFjYWM5NzgtMGIwMi00MmE3LWE3NTgtNmIwMmRkNmFmYzJkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg',
		},
		{
			Title: 'Ice Princess',
			Year: '2005',
			imdbID: 'tt0396652',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMTI1NjIzMzg5OF5BMl5BanBnXkFtZTcwMjI2ODcyMQ@@._V1_SX300.jpg',
		},
		{
			Title: 'The Ice Harvest',
			Year: '2005',
			imdbID: 'tt0400525',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BMTcwNzk2MjQyNl5BMl5BanBnXkFtZTcwMjA0MjEzMQ@@._V1_SX300.jpg',
		},
		{
			Title: 'The Ice Pirates',
			Year: '1984',
			imdbID: 'tt0087451',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BOTA1YWRlY2EtZGQ5ZS00Yzg3LTk0ZDYtZDMzNTEyYzczZjA3XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg',
		},
		{
			Title: 'Ice Age: A Mammoth Christmas',
			Year: '2011',
			imdbID: 'tt2100546',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYTMzMjZhNjAtZDBmMS00MzA0LTljNjUtZGNlMGNiYTc5ODg4XkEyXkFqcGdeQXVyNTE0MDY4Mjk@._V1_SX300.jpg',
		},
	],
	totalResults: '1107',
	Response: 'True',
});

Mock.mock('search_movie', 'post', {
  "Search": [
      {
          "Title": "Iron Man",
          "Year": "2008",
          "imdbID": "tt0371746",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
      },
      {
          "Title": "Iron Man 3",
          "Year": "2013",
          "imdbID": "tt1300854",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
      },
      {
          "Title": "Iron Man 2",
          "Year": "2010",
          "imdbID": "tt1228705",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
      },
      {
          "Title": "Man of Steel",
          "Year": "2013",
          "imdbID": "tt0770828",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
      },
      {
          "Title": "Spider-Man",
          "Year": "2002",
          "imdbID": "tt0145487",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
      },
      {
          "Title": "The Amazing Spider-Man",
          "Year": "2012",
          "imdbID": "tt0948470",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg"
      },
      {
          "Title": "Ant-Man",
          "Year": "2015",
          "imdbID": "tt0478970",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"
      },
      {
          "Title": "Spider-Man 2",
          "Year": "2004",
          "imdbID": "tt0316654",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
          "Title": "Spider-Man 3",
          "Year": "2007",
          "imdbID": "tt0413300",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      },
      {
          "Title": "Spider-Man: Homecoming",
          "Year": "2017",
          "imdbID": "tt2250912",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
      }
  ],
  "totalResults": "9592",
  "Response": "True"
})

Mock.mock('articles', 'get', {
  'data|100':[{
    'key|+1': 1, // 自增
    'title': Random.csentence(10, 13),
    'content|1': Random.paragraph(),
    'name': '@name',
    'email': '@email',
    'sex|1': ['男', '女'],
    'zip': Random.zip(),
    'avatar': Random.image('200x100', '#FF6600'),
    'province': Random.province(),
    'city': Random.city(),
    'county': Random.county()
  }]
})