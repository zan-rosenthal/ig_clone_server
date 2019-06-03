import {
  compose,
  join,
  map,
  range,
  toLower,
  splitEvery,
  take
} from 'ramda'
import faker from 'faker'

const formatIntro = compose(join('\n'), splitEvery(20), take(60))

const commentFactory = () => ({
  id: faker.random.number(),
  user: { userName: faker.internet.userName() },
  text: faker.lorem.text()
})

const postFactory = (userName = faker.internet.userName()) => () => ({
  id: faker.random.number(),
  comments: map(commentFactory, range(1, 10)),
  imageUrl: `https://picsum.photos/200/300?random=${faker.random.number()}`,
  user: { userName },
  location: `${faker.address.city()}, ${faker.address.state()}`,
  text: faker.lorem.paragraph(),
  title: faker.lorem.word()
})

const userFactory = () => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const fullName = `${firstName} ${lastName}`
  const userName = `${toLower(firstName)}_${toLower(lastName)}` 

  return {
    id: faker.random.number(),
    followers: faker.random.number(),
    following: faker.random.number(),
    profileImage: 'https://fillmurray.com/200/300',
    userName,
    fullName,
    profileIntro: formatIntro(faker.lorem.sentences()),
    posts: map(postFactory(userName), range(1, 60))
  }
}

export default {
  Query: {
    user: userFactory,
    post: postFactory()
  },
};