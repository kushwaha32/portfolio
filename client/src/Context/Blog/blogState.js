

import { useReducer } from "react";
import blogContext from "./blogContext";
import blogReducer from "./blogReducer";

const BlogState = props => {

  const initialState = {
         blogs: [
             {
                 id: 1,
                 title: "Lorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing",
                 text: "Lorem ipsum, dolor sit amet consectetur adipisicing"

             },
             {
                id: 2,
                title: "Lorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing"

            },
            {
                id: 3,
                title: "Lorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing"

            }

         ]
    };

    const [state] = useReducer(blogReducer, initialState);


   return(

      <blogContext.Provider
        value={{
            blogs: state.blogs,
        }}
      >
        { props.children }
     
      </blogContext.Provider>

   );
    

};


export default BlogState;