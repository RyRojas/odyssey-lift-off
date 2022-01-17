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

  Mutation: {
    //Increment Track's numberOfViews property
    incrementTrackViews: async (_, { trackId }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(trackId);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${trackId}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
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
