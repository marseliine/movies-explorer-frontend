import film1 from '../images/breathe.jpg';
import film2 from '../images/drive.jpg';
import film3 from '../images/dune.jpg';
import film4 from '../images/dunkirk.jpg';
import film5 from '../images/forrestgump.jpg';
import film6 from '../images/friends.jpg';
import film7 from '../images/gentlemen.jpg';
import film8 from '../images/grandbudapesthotel.jpg';
import film9 from '../images/greenbook.jpg';
import film10 from '../images/hacksawridge.jpg';
import film11 from '../images/interstellar.jpg';
import film12 from '../images/knivesout.jpg';
import film13 from '../images/lalaland.jpg';
import film14 from '../images/matrix.jpg';
import film15 from '../images/origins.jpg';
import film16 from '../images/tenet.jpeg';
import film17 from '../images/yourname.jpg';
import film18 from '../images/movingcastlejpeg.jpeg';
import film19 from '../images/bohemianrhapsody.jpg';
import film20 from '../images/garden.png';


const moviesData = [
	{
		title: "Дыши ради нас",
		duration: "1ч17м",
		link: `${film1}`,
		movieId: 1,
	},
	{
		title: "Драйв",
		duration: "1ч17м",
		link: `${film2}`,
		movieId: 2,
	},
	{
		title: "Дюна",
		duration: "1ч17м",
		link: `${film3}`,
		movieId: 3,
	},
	{
		title: "Дюнкерк",
		duration: "1ч17м",
		link: `${film4}`,
		movieId: 4,
	},
	{
		title: "Форрест Гамп",
		duration: "1ч17м",
		link: `${film5}`,
		movieId: 5,
	},
	{
		title: "Друзья",
		duration: "1ч17м",
		link: `${film6}`,
		movieId: 6,
	},
	{
		title: "Джентельмены",
		duration: "1ч17м",
		link: `${film7}`,
		movieId: 7,
	},
	{
		title: "Отель «Гранд Будапешт»",
		duration: "1ч17м",
		link: `${film8}`,
		movieId: 8,
	},
	{
		title: "Зеленая книга",
		duration: "1ч17м",
		link: `${film9}`,
		movieId: 9,
	},
	{
		title: "По соображениям совести",
		duration: "1ч17м",
		link: `${film10}`,
		movieId: 10,
	},
	{
		title: "Интерстеллар",
		duration: "1ч17м",
		link: `${film11}`,
		movieId: 11,
	},
	{
		title: "Достать ножи",
		duration: "1ч17м",
		link: `${film12}`,
		movieId: 12,
	},
	{
		title: "Ла-Ла Ленд",
		duration: "1ч 17м",
		link: `${film13}`,
		movieId: 13,
	},
	{
		title: "Матрица",
		duration: "1ч 17м",
		link: `${film14}`,
		movieId: 14,
	},
	{
		title: "Начало",
		duration: "1ч 17м",
		link: `${film15}`,
		movieId: 15,
	},
	{
		title: "Довод",
		duration: "1ч17м",
		link: `${film16}`,
		movieId: 16,
	},
	{
		title: "Твое имя",
		duration: "1ч 17м",
		link: `${film17}`,
		movieId: 13,
	},
	{
		title: "Ходячий замок",
		duration: "1ч 17м",
		link: `${film18}`,
		movieId: 14,
	},
	{
		title: "Богемская рапсодия",
		duration: "1ч 17м",
		link: `${film19}`,
		movieId: 15,
	},
	{
		title: "Сад изящных слов",
		duration: "1ч17м",
		link: `${film20}`,
		movieId: 16,
	},
]

const savedMoviesData = [
	{
		title: "Драйв»",
		duration: "1ч17м",
		link: `${film2}`,
		movieId: 2,
		delete: "movie-card__delete",
	},
	{
		title: "Интерстеллар",
		duration: "1ч17м",
		link: `${film11}`,
		movieId: 11,
		delete: "movie-card__delete",
	},
	{
		title: "Друзья",
		duration: "1ч17м",
		link: `${film6}`,
		movieId: 6,
		delete: "movie-card__delete",
	},
];

export { moviesData, savedMoviesData };