import React from 'react'
import '../Css/Detail.css'
import { useParams } from 'react-router-dom'
const array =[{
    id:1,
    name:"James",
    mail:"James@gmail.com",
    des:"Web Developer",
},
{
    id:2,
    name:"Robert",
    mail:"Robert@gmail.com",
    des:"Systems analyst"
},
{
    id:3,
    name:"John",
    mail:"John@gmail.com",
    des:"Information Security Analyst"
},
{
    id:4,
    name:"Michael",
    mail:"Michael@gmail.com",
    des:"Database Administrator"
},
{
    id:5,
    name:"David",
    mail:"David@gmail.com",
    des:"Data Scientist"
},
{
    id:6,
    name:"William ",
    mail:"William@gmail.com",
    des:"Software developer"
},
{
    id:7,
    name:"Richard ",
    mail:"Richard@gmail.com",
    des:"Software engineer",
},
{
    id:8,
    name:"Joseph",
    mail:"Joseph@gmail.com",
    des:"Network Administrator"
},
{
    id:9,
    name:"Thomas",
    mail:"Thomas@gmail.com",
    des:"Computer programmer"
},
{
    id:10,
    name:"Christopher",
    mail:"Christopher@gmail.com",
    des:"Front End Developer"
},
{
    id:11,
    name:"Charles",
    mail:"Charles@gmail.com",
    des:"React Js Developer"
},
{
    id:12,
    name:"Daniel",
    mail:"Daniel@gmail.com",
    des:"Accounts"
}
]
const Detail = () => {
    const params = useParams()
    const item = array.find((e) => e.id === parseInt(params.id))
    console.log(item);
    return (
        <div className='detail-container'>
            <div className='card-container'>
                <h4>{item.name}</h4>
                <p>{item.mail}</p>
                <p>{item.des}</p>
                <div className='icon-div'>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    <i class="fa fa-github" aria-hidden="true"></i>
                </div>
            </div>
            <div className='parass'>
                <p>120k Followers | 10k Following</p>

            </div>
            <div className='img-div'>
            <i class="fa fa-user fblue" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Detail