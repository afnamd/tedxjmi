
const data=[
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
        Gallery: ["/static/images/TedxArchive/2011/Gallery/1.jpg",
        "/static/images/TedxArchive/2011/Gallery/2.jpg",
        "/static/images/TedxArchive/2011/Gallery/3.jpg",
        "/static/images/TedxArchive/2011/Gallery/4.jpg",
        "/static/images/TedxArchive/2011/Gallery/5.jpg",
        "/static/images/TedxArchive/2011/Gallery/6.jpg",
        "/static/images/TedxArchive/2011/Gallery/7.jpg",
        "/static/images/TedxArchive/2011/Gallery/8.jpg",
        "/static/images/TedxArchive/2011/Gallery/9.jpg"]
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
            "/static/images/TedxArchive/2017/Speaker/6.jpg"],
        Teams: [
            "/static/images/TedxArchive/2017/Teams/1.jpg",
            "/static/images/TedxArchive/2017/Teams/2.jpg",
            "/static/images/TedxArchive/2017/Teams/3.jpg",
            "/static/images/TedxArchive/2017/Teams/4.jpg",
            "/static/images/TedxArchive/2017/Teams/5.jpg",
            "/static/images/TedxArchive/2017/Teams/6.jpg",
            "/static/images/TedxArchive/2017/Teams/7.jpg"],
        Gallery: [
            "/static/images/TedxArchive/2017/Gallery/1.jpg",
            "/static/images/TedxArchive/2017/Gallery/2.jpg",
            "/static/images/TedxArchive/2017/Gallery/3.jpg",
            "/static/images/TedxArchive/2017/Gallery/4.jpg",
            "/static/images/TedxArchive/2017/Gallery/5.jpg",
            "/static/images/TedxArchive/2017/Gallery/6.jpg",
            "/static/images/TedxArchive/2017/Gallery/7.jpg",
            "/static/images/TedxArchive/2017/Gallery/8.jpg",
            "/static/images/TedxArchive/2017/Gallery/9.jpg",
            "/static/images/TedxArchive/2017/Gallery/10.jpg"
        ]
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
        Teams: [
            "/static/images/TedxArchive/2019/Teams/1.jpg",
            "/static/images/TedxArchive/2019/Teams/2.jpg",
            "/static/images/TedxArchive/2019/Teams/3.jpg",
            "/static/images/TedxArchive/2019/Teams/4.jpg",
            "/static/images/TedxArchive/2019/Teams/5.jpg",
            "/static/images/TedxArchive/2019/Teams/6.jpg",
            "/static/images/TedxArchive/2019/Teams/7.jpg",
            "/static/images/TedxArchive/2019/Teams/8.jpg",
            "/static/images/TedxArchive/2019/Teams/9.jpg",
            "/static/images/TedxArchive/2019/Teams/10.jpg",
            "/static/images/TedxArchive/2019/Teams/11.jpg"
        ],
        Gallery: [
            "/static/images/TedxArchive/2019/Gallery/1.jpg",
            "/static/images/TedxArchive/2019/Gallery/2.jpg",
            "/static/images/TedxArchive/2019/Gallery/3.jpg",
            "/static/images/TedxArchive/2019/Gallery/4.jpg",
            "/static/images/TedxArchive/2019/Gallery/5.jpg",
            "/static/images/TedxArchive/2019/Gallery/6.jpg",
            "/static/images/TedxArchive/2019/Gallery/7.jpg",
            "/static/images/TedxArchive/2019/Gallery/8.jpg",
            "/static/images/TedxArchive/2019/Gallery/11.jpg",
            "/static/images/TedxArchive/2019/Gallery/12.jpg"
        ]
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

export function getArchive(params){
    return data.filter(item=>
        item.year.toString()==params
    )
}