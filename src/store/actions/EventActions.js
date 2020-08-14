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
