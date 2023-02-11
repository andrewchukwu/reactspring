import {useState, useEffect} from 'react'

//Custom hooks should start with use..... in order to be recognised

const useFetch = (url,dependencies) =>{

    const [data,setData] = useState(0);
    const [isLoading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect( ()=>{

        //abort controller
        const abortController = new AbortController()
        setTimeout(()=>{
            console.log('UseEffect called')
            fetch(url, {signal:abortController.signal})
            .then(res=>{
                // console.log('response object: ',res);
                if(res.ok) return res.json();
                else throw Error('Bad data')
                // setData(res.data)
            })
            .then(data=>{
                console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log('AbortError: ',err.message)
                }
                else{
                    console.log('Error: ',err.message)
                    setError(err.message)
                }
            })
        },1000);
        return ()=>{
            console.log("Clean up")
        }

    },[url]);

    return {data,isLoading,error}
}
export default useFetch;