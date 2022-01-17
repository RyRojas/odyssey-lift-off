const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(trackId: String!): Track
  }

  type Mutation {
    incrementTrackViews(trackId: ID!): IncrementTrackViewsReponse!
  }

  type IncrementTrackViewsReponse {
    "Status code"
    code: Int!
    "Indicates whether mutation was successful"
    success: Boolean!
    "Human-readable message for UI"
    message: String!
    "Updated track after mutation"
    track: Track!
  }

  "A track is a group of Modules that teach a specific topic"
  type Track {
    "Learning Track ID of type ID"
    id: ID!
    "Learning track Title"
    title: String!
    "Learning Track Author of type Author"
    author: Author!
    "URL for learning track thumbnail"
    thumbnail: String
    "Approximate time required (mins) to complete learning track"
    length: Int
    "Number of modules in learning track"
    modulesCount: Int
    "Track's complete list of Modules"
    modules: [Module!]!
    "The track's complete description (can be in MD)"
    description: String
    "Number of times track has been viewed"
    numberOfViews: Int
  }

  "Author of a complete learning Track or Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  "A single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    title: String!
    length: Int
  }
`;

module.exports = typeDefs;
