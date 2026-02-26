import axios from 'axios';
// get example
async function getData(){
    try{
         response =await axios.get("example api")
    // axios by default use the json parsing so theres no need to convert back again
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
getData();

// post using axios !
async function createUser(){
    try{
        const response=await axios.post("https://api/users",{
            name:"",
            age:25
        });
        console.log(response.data);
    }catch(e){
        console.log(error);
    }
}
createUser();

// with useEffect
function App(){
    const [data,setData]=useState([]);
    // second param says to re render only when it is mounted 
    useEffect(()=>{
        axios.get("").then(res=>setData(res.data)).catch(err=>console.log(err));
    },[]);
    return <div>{JSON.stringify(data)}</div>
}
// we cannot use Async because useEffect itself cannot directly be async IDK 
// useEffect takes a callback fucnton as a paramter 