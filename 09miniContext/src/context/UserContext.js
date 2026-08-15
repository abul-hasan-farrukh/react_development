import React from 'react'

//Context in React is used to manage the states of components globally. You can assume context as a global variable.

//Every context is a provider, so UserContext is also a provider. It is necessary to create a provider which provides the data to use the context.
const UserContext = React.createContext()

export default UserContext;