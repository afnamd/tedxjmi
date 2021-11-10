
const data=[
    {
        year: 2011
    },
    {
        year: 2017
    },
    {
        year: 2019
    },
    {
        year: 2021
    }
]

// export default function handler(req,res){
//     return res.status(200).json(data)
// }

export default function helloAPI(req, res) {
    res.status(200).json(data)
    
}
  