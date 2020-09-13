import React, {createContext, useState} from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movie, setMovie] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  });

  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
