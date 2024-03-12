import React from 'react'
import '../Css/Customer.css'
import { useNavigate } from 'react-router-dom'
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
const Customer = () => {
    const navigate=useNavigate()
    const handleTable=(val)=>{
        console.log(val);
        navigate(`/detail/${val}`)
    }
  return (
    <div  className='cus-container'>
        <table>
            <tr className='bink'>
                <th  className='bink'>S.No</th>
                <th  className='bink'>NAME</th>
                <th  className='bink'>E-MAIL</th>
                <th  className='bink'>DESCRIPTION</th>
            </tr>
            
                {
                    array.map((e)=>{
                        return <tr className='black' onClick={()=>{handleTable(e.id)}}>
                        <td className='black'>{e.id}</td>
                        <td className='black'>{e.name}</td>
                        <td className='black'>{e.mail}</td>
                        <td className='black'>{e.des}</td>
                        </tr>
                    })
                }
            
        </table>
    </div>
  )
}

export default Customer