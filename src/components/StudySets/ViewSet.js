import React from 'react'
import { useLocation } from 'react-router'
import classes from './ViewSet.module.css'
import { Link } from 'react-router-dom'
const ViewSet = () => {
    //let itemList=props.items //list of terms and definition pairs
    const { state } = useLocation();

    console.log(state.list);
    const list = state.list;
    const title = state.title;
    const description = state.description;
    const image = state.image;
    const id = state.id;
    // console.log("view set id: ",id)
    return (

        <div>
            <div className={classes.termTable}>

                <table>
                    <thead>
                        <tr>
                            <th >Term</th>
                            <th>Definition</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((x, i) => {
                            return (

                                <tr>

                                    <td>{x.term}</td>
                                    <td>{x.definition}</td>
                                </tr>
                            )
                        })}

                    </tbody>


                </table>

            </div>

            <div className={classes.actions}>
                <Link to={{
                    pathname: '/editset',
                    state: {
                        list: list,
                        title: title,
                        description: description,
                        image: image,
                        id: id
                    }
                }}>
                    <button className={classes.editBtn}> Edit Set</button>
                </Link>

<Link to={
    {
        pathname:'/flashcardMode',
        state:{
            list:list
        }
    }
}>

<button className={classes.studyBtn}> Study Set</button>
</Link>
               
            </div>

        </div>



    )
}

export default ViewSet
