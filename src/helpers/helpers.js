import _ from "lodash";

const baseUrl = "http://ec2-15-188-53-149.eu-west-3.compute.amazonaws.com";

/**
 * Call the /api/ranking route
 */
export const getRankingData = async () => {
  // TODO
  return;
};

/**
 * Call the /api/series/all route
 */
export const getSeriesData = async () => {
  // TODO
  return;
};

/**
 * Call the /api/me route
 * It requires a the token in a token header
 */
export const getMyData = async () => {
  // TODO
  return;
};

// The order type should be either BUY or SELL
export const isCorrectOrderType = order => {
  // TODO
  return false;
};

export const isCorrectOrderTimestamp = order => {
  // TODO
  return false;
};

// The order amount should be greater or equal than 0
export const isCorrectAmount = order => {
  // TODO
  return false;
};

// Call the three checks functions defined above on every order
export const areValidOrders = input => {
  // TODO
  return false;
};

// Call the /api/${coin}/orders route
// It should be a POST request
// The headers should be
// Accept: application/json
// Content-Type: application/json
// token: the token
export const sendOrders = async (coin, order) => {
  // TODO
};

export const getToken = () => {
  return "";
};
