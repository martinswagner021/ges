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

// src/middlewares/ensureAuth.ts
var ensureAuth_exports = {};
__export(ensureAuth_exports, {
  ensureAuth: () => ensureAuth
});
module.exports = __toCommonJS(ensureAuth_exports);
function ensureAuth(req, res, next) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    res.status(401).end();
  }
  return next();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ensureAuth
});
