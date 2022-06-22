import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getServices = async () => {
  const query = gql`
    query GetServices {
      services {
        description
        name
        iconField {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.services;
};
