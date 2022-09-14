import React, { useEffect, useState } from 'react'

// const Dummy = () => {
//     // const[state,setState]=useState('Sudarsan')
//     // const onChange=(e)=>{
//     //     const newValue =e.target.value;
//     //     setState(newValue)
//     // }
//     // const[me,setMe]=useState({firstName:" " ,  lastName:" "})
//     let addnum = [4,5,6]
//     let num = [1,2,3,...addnum]

//     console.log(addnum)
//     console.log(num)

//     const [count, setCount] = useState(0)

//     const name={
//         fName:"Sudarsan",
//         lName:"Perumal"
//     }
//     const Aname={
//         ...name,
//         rename:"velan",
//         // lName:"Perumal"
//     }
//     console.log(Aname)

//     return (
//         <div>
//             <h1> {count}</h1>
//             {/* {console.log(count)} */}
//             <button onClick={() => setCount((prevState) => prevState + 1)}>
//                 + Increment
//             </button>
//             <button onClick={() => setCount((prevState) => prevState - 1)}>
//                 - Decrement
//             </button>
//             <button onClick={() => setCount(0)}>reset</button>
//             {/* <input  placeholder='Write here...' onChange={(e)=>{
//                 console.log(e)
//             }}/>
//             {state} */}
//             {/* <input type='text' value={me.firstName} onChange={e=>setMe({...me, firstName:e.target.value})}/>
//             <input type='text' value={me.lirstName} onChange={e=>setMe({...me, lirstName:e.target.value})}/>
//              My Name is {me.firstName}
//               {JSON.stringify(me)} */}
//         </div>
//     )
// }
const Books = [
    {
        id: '1',
        title: 'Think and Grow Rich',
        author: 'NAPOLEON HILL',
        img: 'https://m.media-amazon.com/images/I/412k8mJUP6L._AC_UF452,452_FMjpg_.jpg',
    },
    {
        id: '2',
        title: 'The Power of Habit',
        author: 'CHARLES DUHIGG',
        img: 'https://m.media-amazon.com/images/I/41IhmDI07KL._AC_UF452,452_FMjpg_.jpg',
    },
    {
        id: '3',
        author: 'Ross Welford',
        title: 'The 1000 year Old Boy',
        img: 'https://m.media-amazon.com/images/I/415EJav3hrL._AC_UF452,452_FMjpg_.jpg',
    },
]

const BookList = () => {
    return (
        <div style={styles.main}>
            {Books.map((book) => {
                return (
                    <div>
                        <Book key={book.id} {...book}></Book>
                    </div>
                    
                )
            })}
        </div>
    )
}

const Book = ({img, title, author}) => {

    const handleClick=(e)=>{
        console.log(e) 
        // console.log(e.target.value)
         alert('Sudarsan here...!')
    }
    // const {  } = props.book
    return (
        <div style={styles.book} onMouseOver ={()=>{
        
            console.log(author)
        }}>
            <span style={styles.Image}>
                <img src={img} />
            </span>

            <span style={styles.h1} >
                <h1 onClick={()=>{
                    console.log(title )
                }}> {title}</h1>
            </span>

            <span style={styles.Author}>
                <h4>{author} </h4>
            </span>
            <button type="button" onClick={handleClick}> Click Here...!</button>
           
        </div>

       
    )
}



export default BookList

const styles = {
    main: {
        margin: '0%',
        // display:"flex",
        // flexWrap:"wrap"
    },
    h1: {
        color: 'Black',
        fontWeight: '700',
    },
    booklist: {
        width: '90vw',
        margin: '5rem auto ',
        display: 'flex',
        flexDirecton: 'row',
    },
    book: {
        background: '#f6f6f6',
        borderRadius: '10px',
        padding: '15px',
        margin: '450px',
        marginTop: '10%',
    },
    Image: {
        alignItems: 'center',
        padding: '100px',
    },
    Author: {
        color: '#6179d8',
        letterSpacing: '2.5px',
    },
}



