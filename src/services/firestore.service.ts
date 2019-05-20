import { Conversion } from "conversion.js";
import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "../config/firestore.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

const db = admin.firestore();

export let updateUsage = (lastConversion: Conversion) => {
  db.collection("usage").add({
    ...lastConversion,
    created: new Date()
  });
};

export let getUsage = async (limit: number) => {
  const snapshot = await db
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
};

// since, exchangeratesapi doesn't provide {currency:country} list
// A 'currencies' collection is added in Firestore will all supported currencies.
export let getCurrencies = async () => {
  const snapshot = await db.collection("currencies").get();
  return snapshot.docs[0].data();
};
