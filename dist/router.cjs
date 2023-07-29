var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/router.ts
var router_exports = {};
__export(router_exports, {
  router: () => router
});
module.exports = __toCommonJS(router_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  router
});
