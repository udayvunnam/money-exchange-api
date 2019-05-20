"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firestore_json_1 = __importDefault(require("../config/firestore.json"));
firebase_admin_1.default.initializeApp({
  credential: firebase_admin_1.default.credential.cert(firestore_json_1.default)
});
const db = firebase_admin_1.default.firestore();
exports.updateUsage = lastConversion => {
  db.collection("usage").add(
    Object.assign({}, lastConversion, { created: new Date() })
  );
};
exports.getUsage = limit =>
  __awaiter(this, void 0, void 0, function*() {
    const snapshot = yield db
      .collection("usage")
      .orderBy("created", "desc")
      .limit(limit)
      .get();
    return snapshot.docs.map(doc => {
      const data = doc.data();
      data.created = doc.get("created").toDate();
      data.id = doc.id;
      return data;
    });
  });
// since, exchangeratesapi doesn't provide {currency:country} list
// A 'currencies' collection is added in Firestore will all supported currencies.
exports.getCurrencies = () =>
  __awaiter(this, void 0, void 0, function*() {
    const snapshot = yield db.collection("currencies").get();
    return snapshot.docs[0].data();
  });
//# sourceMappingURL=firestore.service.js.map
