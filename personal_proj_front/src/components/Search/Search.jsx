import Container from './Container';
import Form from './Form';
import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function Search() {
    const [httpCatName, setHttpCatName] = useState("");
    const navigate = useNavigate();

    const { list=[] } = useOutletContext();

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!httpCatName.trim()) return;

        navigate(`/cat/${httpCatName.trim().toLowerCase()}`);
        setHttpCatName("");
    }

    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                setHttpCatName={setHttpCatName}
                httpCatName={httpCatName}
            />
            <Container httpList={list}/>
        </>
    )
}

// export default function Search() {
//     const [httpCatName, setHttpCatName] = useState("");
//     const [httpList] = useState([]);
//     const navigate = useNavigate();
//     const handleSubmit=(event)=>{
//         event.preventDefault()
//         if(!httpCatName) return 
//         navigate(`/httpCat/${httpCatName.toLowerCase()}`)
//         setHttpCatName("")
//     };

//     return (
//         <>
//             <Form
//             handleSubmit={handleSubmit}
//             setHttpCatName={setHttpCatName}
//             httpCatName={httpCatName}
//             />
//             <Container httpList={httpList}/>
//         </>
//     );
// }