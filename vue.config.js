const Mock = require('mockjs');
const mockIndexData = require("./mock/index.json");
 
module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get("/api/user", (_, res) => {
        res.json(Mock.mock(mockIndexData.user));
      });
      app.get("/api/acts", (_, res) => {
        res.json(Mock.mock(mockIndexData.acts));
      });
      // app.get("/api/acts", (req, res) => {
      //   res.json(mockIndexData);
      // });
      // app.get("/api/comments", (req, res) => {
      //   res.json(mockIndexData);
      // });
    }
  }
};