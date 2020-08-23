import firebase from "../../config/fbConfig";
export const createEvent = (event) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // making async call to firestore
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("events")
      .add({
        ...event,
        createdBy: profile.userName,
        authorName: profile.firstName + " " + profile.lastName,
        authorId: authorId,
        created_at: new Date(),
        start_datetime: new Date(event.date + " " + event.start_time),
        end_datetime: new Date(event.date + " " + event.end_time),
        signed_participants: 0,
      })
      .then(() => {
        dispatch({
          type: "CREATE_EVENT",
          event,
        });
      })
      .catch((err) => {
        dispatch({
          type: "CREATE_EVENT_ERROR",
          err,
        });
      });
  };
};

export const editEvent = (event) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // const firestore = getFirestore();
    const db = firebase.firestore();
    const docRef = db.collection("events").doc(event.id);

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    // const ref = firestore.collection("events").doc(event.id);

    docRef
      .update({
        name: event.name,
        date: event.date,
        start_time: event.start_time,
        end_time: event.end_time,
        status: event.status,
        total_participants: event.total_participants,
      })
      .then(function () {
        dispatch({
          type: "EDIT_EVENT",
          payload: "Data successfully updated!",
        });
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        dispatch({
          type: "EDIT_EVENT",
          payload: "Error updating document: " + error,
        });
        console.error("Error updating document: ", error);
      });
  };
};
