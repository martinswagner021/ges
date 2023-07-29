var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_dotenv = __toESM(require("dotenv"), 1);
var import_express2 = __toESM(require("express"), 1);

// src/router.ts
var import_express = require("express");

// src/middlewares/ensureAuth.ts
function ensureAuth(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    res.status(401).end();
  }
  return next();
}

// src/router.ts
var router = (0, import_express.Router)();
router.get("/", ensureAuth, (req, res) => res.send("Hello"));

// src/server.ts
import_dotenv.default.config();
var port = process.env.PORT;
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use(router);
app.use((e, req, res, next) => {
  if (e) {
    return res.status(400).json({ error: e.message });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
