const DESCRIPTION_PHOTO = [
  'Lorem ipsum dolor sit amet.',
  'consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
  'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
  ' Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
];

const NAMES_OF_COMMENTATORS = [
  'Иван',
  'Андрей',
  'Марина',
  'Константин',
  'Александр',
  'Варвара',
  'Екатерина',
  'Мария',
];

const MESSAGES_OF_COMMENTATORS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createUnicumId (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const licesCount = createUnicumId(15, 200);
const generatePhotoId = createUnicumId(1, 25);
const generateCommentatorId = createUnicumId(1, 25);
const generateAvatarId = createUnicumId(1, 6);


const SIMILAR_PHOTO_COUNT = 4;
const SIMILAR_COMMENTS_COUNT = 3;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: generateCommentatorId(),
  avatar: `img/avatar-${ generateAvatarId() }.svg`,
  message: getRandomArrayElement(MESSAGES_OF_COMMENTATORS),
  name: getRandomArrayElement(NAMES_OF_COMMENTATORS),
});

const similarComment = Array.from({length:SIMILAR_COMMENTS_COUNT}, createComment);

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: licesCount(),
  comments: similarComment,
});

const similarObject = Array.from({length:SIMILAR_PHOTO_COUNT}, createPhoto);


