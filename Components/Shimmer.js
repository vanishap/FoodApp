const Shimmer =()=>{
    return (
        <div className= "flex flex-wrap" >
            {Array(15)
            .fill('')
            .map((e,index)=><div className=" m-4 w-52 h-52 p-2 shadow-xl bg-orange-50" key= {index}></div>)} 
        </div>    
    )
}

export default Shimmer;

