import {useContext , useReducer , createContext} from 'react'
import rootReducer from './Reducer'

const initState = {
    counter : 0 ,
}
export const BlogContext = createContext() ;

const BlogContextProvider = (props) => {
    const [blogState , dispatch] = useReducer(rootReducer , initState) ;
    return(
        <BlogContext.Provider value={{blogState , dispatch}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => useContext(BlogContext) ;
export default BlogContextProvider ;
