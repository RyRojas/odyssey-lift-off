import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
  query getTrack($trackId: String!) {
    track(trackId: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      durationInSeconds
      modulesCount
      numberOfViews
      modules {
        id
        title
        durationInSeconds
      }
      description
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
