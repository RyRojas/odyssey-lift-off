const resolvers = {
  Query: {
    //returns array of Tracks for homepage grid
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    //Get a single track by ID, for track view
    track: (_, { trackId }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(trackId);
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    //Returns array of modules from Track ID
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
