export const FETCH_ACTIVE_CHATS = "FETCH_ACTIVE_CHATS";

export const fetchActiveChats = async (userId) => (dispatch) => {
  // fetch data

  const activeChats = [
    {
      id: 1,
      history: [
        {
          id: 12,
          text: "Hola como estas?",
        },
        {
          id: 13,
          text: "Bien y tu?",
        },
      ],
    },
  ];

  dispatch({ type: FETCH_ACTIVE_CHATS, payload: activeChats });
};

