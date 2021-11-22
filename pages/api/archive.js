
export const data=[
    {
        year: 2011,
        theme: "{2011 Theme}",
        Speaker: null,
        Teams: null,
        Previous: null,
        Next:{
            year: 2017,
            href: "/archive/2017"
        },
        Gallery: '72157720150571856',
        Teams: '72157720158869607'
    },
    {
        year: 2017,
        theme: "Young Minds",
        Previous: {
            year: 2011,
            href: "/archive/2011"
        },
        Next:{
            year: 2019,
            href: "/archive/2019"
        },
        base: "/static/images/TedxArchive/2017/",
        Speaker: [
            "/static/images/TedxArchive/2017/Speaker/1.jpg",
            "/static/images/TedxArchive/2017/Speaker/2.jpg",
            "/static/images/TedxArchive/2017/Speaker/3.jpg",
            "/static/images/TedxArchive/2017/Speaker/4.jpg",
            "/static/images/TedxArchive/2017/Speaker/5.jpg",
            "/static/images/TedxArchive/2017/Speaker/6.jpg"
        ],
        Gallery: '72157720150571856',
        Teams: '72157720158869607'
    },
    {
        year: 2019,
        theme: "Breaking Shackles",
        Previous: {
            year: 2017,
            href: "/archive/2017"
        },
        Next:{
            year: 2021,
            href: "/archive/2021"
        },
        base: "/static/images/TedxArchive/2019/",
        Speaker: [
            "/static/images/TedxArchive/2019/Speaker/1.jpg",
            "/static/images/TedxArchive/2019/Speaker/2.jpg",
            "/static/images/TedxArchive/2019/Speaker/3.jpg",
            "/static/images/TedxArchive/2019/Speaker/4.jpg",
            "/static/images/TedxArchive/2019/Speaker/5.jpg",
            "/static/images/TedxArchive/2019/Speaker/6.jpg",
            "/static/images/TedxArchive/2019/Speaker/7.jpg",
        ],   
        Gallery: '72157720150571856',
        Teams: '72157720158869607'
    },
    {
        Previous: {
            year: 2019,
            href: "/archive/2019"
        },
        Gallery: '72157720150571856',
        Teams: '72157720158869607',
        year: 2021
    }
]

// export default function handler(req,res){
//     return res.status(200).json(data)
// }

// export default function helloAPI(req, res) {
//     res.status(200).json(data)
    
// }

// export function getArchive(params){
//     return data.filter(item=>
//         item.year.toString()==params
//     )
// }