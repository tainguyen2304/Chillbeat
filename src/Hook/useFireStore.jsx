import { useState, useEffect } from 'react';
import { db } from 'Components/Firebase/config';


const useFirestore = (collection, condition) => {

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let collectionRef = db.collection(collection);
    if (condition) {
      // reset documents data
      if (!condition.compareValue || !condition.compareValue.length) {
        setDocuments([]);
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .sort((a, b) => a.createdAt - b.createdAt);

      setDocuments(documents);
    });

    return unsubscribe;
  }, [collection, condition]);

  return documents;
};

export default useFirestore;