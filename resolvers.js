import {
  compose,
  join,
  map,
  range,
  splitEvery,
  take
} from 'ramda'
import faker from 'faker'
import axios from 'axios'

// const formatIntro = compose(join('\n'), splitEvery(20), take(80))

const commentFactory = () => ({
  id: faker.random.number(),
  user: { userName: faker.internet.userName() },
  text: faker.lorem.text()
})

const postFactory = (userName = faker.internet.userName()) => () => ({
  id: faker.random.number(),
  comments: map(commentFactory, range(1, 10)),
  url: `https://picsum.photos/200/300?random=${faker.random.number()}`,
  user: { userName },
  location: `${faker.address.city()}, ${faker.address.state()}`
})

const userFactory = () => {
  const userName = faker.internet.userName()

  return {
    id: faker.random.number(),
    followers: faker.random.number(),
    following: faker.random.number(),
    profileImage: 'https://fillmurray.com/200/300',
    userName,
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    profileIntro: faker.lorem.lines(),
    posts: map(postFactory(userName), range(1, 60))
  }
}

export default {
  Query: {
    user: userFactory,
    post: postFactory()
  },
};