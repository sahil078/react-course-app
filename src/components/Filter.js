import React from 'react'

const Filter = ({filterData ,category , setCategory}) => {

    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div className='py-4 flex flex-wrap justify-center max-auto gap-y-4 space-x-4  w-11/12'>
            {
                filterData.map((data)=>{
                    return(
                        <button
                        className={`text-lg px-2 py-1.5 rounded-md font-medium text-white bg-black hover:bg-slate-500 border-2 tansition-all duration-300`}
                        key={data.id} 
                        onClick={()=>{
                            filterHandler(data.title)
                        }}>

                        {data.title}
                    </button>
                    )
                })
            }
        </div>
    )
}

export default Filter;
