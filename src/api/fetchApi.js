const fetchApi = async (req)=>{
   try{
       const res = await fetch(req.url, req.options);
       if(res.ok){
           return res.json();
        }else{
            throw new Error('res is not ok res: ', res);
        }
    }catch(err){
        console.log(err);
    }
}
export default fetchApi;