import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { Whale } from "../Types/Entities";

export const fetchWhales = async ({ ids }: { ids?: string[] }) => {
  if (!ids) {
    const whalesRef = collection(db, "whales");
    const querySnapshot = await getDocs(whalesRef);
    const whales = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return whales;
  } else {
    if (ids.length === 0) return [];
    //need to batch in 30s

    // Calculate the number of batches needed
    const batchSize = 30;
    const numBatches = Math.ceil(ids.length / batchSize);

    let whales: Whale[] = [];

    for (let i = 0; i < numBatches; i++) {
      // Get the current batch of ids
      const batchIds = ids.slice(i * batchSize, (i + 1) * batchSize);

      // Create the query for the current batch
      const whaleQuery = query(
        collection(db, "whales"),
        where("__name__", "in", batchIds)
      );

      // Perform the query for the current batch
      const whaleDocs = await getDocs(whaleQuery);

      // Map the documents to an array of objects
      const batchWhales = whaleDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Concatenate the results of the current batch to the main array
      whales = whales.concat(batchWhales);
    }

    // const whaleQuery = query(
    //   collection(db, "whales"),
    //   where("__name__", "in", ids)
    // );
    // const whaleDocs = await getDocs(whaleQuery);
    // const whales = whaleDocs.docs.map((doc: any) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));
    return whales;
  }
};
