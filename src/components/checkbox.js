import React,{useState} from 'react'
const CheckBox = ({data=[],label='', subLabel='', selected,error='', maxSelected=1, onChange=()=>{}}) =>{
    if(maxSelected===-1)
        maxSelected = data.length
    const [selectedOptions, setSelected] = useState(!selected?[]:Array.isArray(selected)?selected:[selected])
    const _handleClick = (elm) =>{
        let newArray
        if(selectedOptions.includes(elm)){
            selectedOptions.splice(selectedOptions.indexOf(elm),1)
            newArray=[
                ...selectedOptions
            ]
            
        }else{
            if(maxSelected === 1){
                newArray=[elm]
            }else{
                if(selectedOptions.length === maxSelected){
                    selectedOptions.splice(0,1)
                }
                newArray=[
                    ...selectedOptions,
                    elm
                ]
                
            }
        }
        setSelected(newArray)

        if(maxSelected===1)
            onChange(newArray[0])
        else onChange(newArray)

    }
    return(
        <div class="flex flex-col gap-2">
            <div class="text-gray-300 font-bold">
                {label}
            </div> 
            {subLabel&&<div class="text-gray-300 font-thin text-sm mb-1">
                {subLabel}
            </div> }
            {error&&<div class="text-red-400 font-thin text-sm mb-1">
                {error}
            </div> }
            <div class="flex  gap-5 relative items-center flex-wrap">
                {
                    data.map(d=>{
                        return(
                            <div 
                                key={d}
                                className={`p-3 select-none bg-darkGray-default rounded-xl cursor-pointer ${selectedOptions.includes(d)?'ring-4':''}`}
                                onClick={()=>_handleClick(d)}
                            >
                                {d}
                            </div>
                        )
                    })
                }
                {/* <div style='background-color: #3F3F3F' class="p-3 rounded-xl cursor-pointer ring-4">
                Male
                </div>
                <div style='background-color: #3F3F3F' class="p-3 rounded-xl cursor-pointer">
                Female
                </div>
                <div style='background-color: #3F3F3F' class="p-3 rounded-xl cursor-pointer">
                Not specified
                </div>
                <div style='background-color: #3F3F3F' class="p-3 rounded-xl cursor-pointer">
                Prefer not to say
                </div> */}
            </div>
        </div>
    )
    return(
    <div className="flex justify-between items-center">
        <div className="w-full flex gap-7 p-2 flex-wrap">
            {
                data.map(d=>{
                    return(
                        <div 
                            key={d}
                            className={`cursor-pointer myShadow pl-5 pr-5 pt-1 pb-1 ${selectedOptions.includes(d)?'bg-black text-white':''}`}
                            onClick={()=>_handleClick(d)}
                        >
                            {d}
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
}
export default CheckBox;