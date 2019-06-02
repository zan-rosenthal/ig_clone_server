import { gql } from 'apollo-server'

export default gql`
  type Query {
    user: User,
    users: [User],
    post: Post,
    posts: [Post],
    comments: [Comment]
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

  type Comment {
    id: Int!,
    text: String!
  }

  type Post {
    id: Int!,
    comments: [Comment]!,
    user: User!,
    url: String!,
    location: String!
  }
`;