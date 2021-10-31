const WorkSample =({callBack}) =>{
    const [list, setList] = useState([])
    const [text, setText] = useState('')
    const [error, setError] = useState(null)
    function isValidWebUrl(url) {
        let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
        return regEx.test(url);
    }
    const handleList =() =>{
        if(!isValidWebUrl(text)){
            setError('invalid link')
            return
        }
        setError(null)
        setList([...list, text]); 
        setText('')
        callBack('workSample', [...list, text])
    }
    return(
        <>
        <div className='flex items-center'>
            <TextInput 
                label="Work sample, Resume or profile" 
                placeholder="make sure link is public"
                defaultValue={text}
                update={text}
                error={error}
                onChange={(data)=>{
                    setText(data)
                    setError(null)
                }}
                button={
                    <div
                        className='btn w-24'
                        onClick={()=>{
                            handleList()
                        }}
                    >
                        Add
                    </div>
                }
            />
        </div>
        <div className='flex flex-col gap-1'>
            {
                list.map((link, i)=>{
                    return(
                        <div className=' hover:bg-darkGray-default text-white pl-4  rounded-md relative flex justify-between items-center `'>
                            {link}
                            <div 
                                className=' pl-3 pr-3  cursor-pointer hover:bg-darkGray-600 flex justify-center items-center'
                                onClick={()=>{
                                    list.splice(i,1)
                                    setList([...list])
                                    callBack('workSample', [...list])
                                }}
                            > 
                                x
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}