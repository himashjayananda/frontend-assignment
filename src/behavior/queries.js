import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $order: String, $sort: String, $offset: Int) {
    launches(limit: $limit, order: $order, sort: $sort, offset: $offset) {
      id
      mission_name
      launch_year
      launch_date_local
    }
  }
`;

export const getLaunchesDefaultVariables = {
  limit: 10,
  order: "asc",
  sort: "launch_date_local",
};
