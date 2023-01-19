const Shimmer =()=>{
    return (
        <div className= "list" >
            {Array(15)
            .fill('')
            .map((e,index)=><div className= 'shimmer-card' key= {index}></div>)} 
        </div>    
    )
}

export default Shimmer;

