import { gql } from 'apollo-server'

export default gql`
  type Query {
    user: User,
    users: [User],
    post: Post,
    posts: [Post],
  }
  
  type User {
    id: Int!,
    posts: [Post],
    followers: Int!,
    following: Int!,
    fullName: String!,
    userName: String!,
    profileImage: String!,
    profileIntro: String!
  }

  type Post {
    id: Int!,
    user: User!,
    imageUrl: String!,
    location: String!
    text: String!,
    title: String!,
  }
`;