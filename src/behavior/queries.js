import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $order: String, $sort: String, $offset: Int) {
    launches(limit: $limit, order: $order, sort: $sort, offset: $offset) {
      id
      mission_name
      launch_year
      launch_site {
        site_name
      }
    }
  }
`;

export const GET_LAUNCH = gql`
  query GetLaunch($launchId: ID!) {
    launch(id: $launchId) {
      id
      mission_name
      launch_year
      launch_site {
        site_name
      }
      details
      rocket {
        rocket_name
        rocket {
          description
        }
      }
      launch_success
    }
  }
`;

export const getLaunchesDefaultVariables = {
  limit: 10,
  order: "asc",
  sort: "launch_date_local",
};
