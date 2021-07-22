import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase"

export default function useContet(target) {
    const [content, setContent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contectObj) => ({
                    ...contectObj.data(),
                    docId: contectObj.id,
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);
    return { [target]: content };
}