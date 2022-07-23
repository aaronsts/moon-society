import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getServices = async () => {
  const query = gql`
    query GetServices {
      services {
        description
        name
        slug
        iconField {
          url
        }
        excerpt
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.services;
};

export const getAssociates = async () => {
  const query = gql`
    query getAssociates {
      associates {
        name
        bio
        spotifyArtistProfile
        spotifyTrackLink
        instagram
        facebook
        appleMusic
        tikTok
        pictures {
          url
        }
        profilePicture {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.associates;
};

export const getArtists = async () => {
  const query = gql`
    query getArtists {
      artists {
        name
        bio
        appleMusic
        facebook
        instagram
        spotify
        tiktok
        spotifyTrackLink
        profilePicture {
          url
        }
        pictures {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.artists;
};
