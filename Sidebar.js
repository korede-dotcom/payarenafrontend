import React from 'react'
import styled from 'styled-components'
import SidebarData from './SidebarData'
import { useLocation } from 'react-router-dom'
import dash from '../useables/dashboard.png'
import admin from '../useables/administrator.png'
import institution from '../useables/institution.png'
import billers from '../useables/billers.png'
import transactions from '../useables/transaction.png'
import users from '../useables/user.png'
import reports from '../useables/report.png'
import  roundlogo from '../useables/roundlogo.png'
import downimg from '../useables/arrdown.png'


function Sidebar({name,role}) {
    const router = useLocation()
  return (
    <Side>
         
        <Sidecontent>
            <div className='header'>
                <img src={roundlogo} alt="logo" />
                <div className='title'>
                    <p>Unified Payment</p>
                    <h5>{role}</h5>
                </div>
                <img className='downimg' src={downimg} alt="logo" />
            </div>
           
            <div className='body'>
                <a hre="/dashboard" className='item active'>
                    <img src={dash}/>
                    <div className='data-title'>
                            <p>dashboard</p>
                    </div>
                </a>
                <a hre="/dashboard" className='item '>
                    <img src={admin}/>
                    <div className='data-title'>
                            <p>administrator</p>
                    </div>
                </a>
                <a hre="/dashboard" className='item '>
                    <img src={institution}/>
                    <div className='data-title'>
                            <p>institution</p>
                    </div>
                </a>
                <a hre="/dashboard" className='item '>
                    <img src={billers}/>
                    <div className='data-title'>
                            <p>Billers</p>
                    </div>
                </a>
                <a hre="/dashboard" className='item '>
                    <img src={users}/>
                    <div className='data-title'>
                            <p>Users</p>
                    </div>
                </a>
                <a hre="/dashboard" className='item '>
                    <img src={transactions}/>
                    <div className='data-title'>
                            <p>transactions</p>
                    </div>
                </a>
                <a hre="/dashboard" className='item '>
                    <img src={reports}/>
                    <div className='data-title'>
                            <p>Reporting</p>
                    </div>
                </a>
                {/* {
                    SidebarData.map(data => {
                        return (
                            
                                <a href={data.link} key={data.link} className={`item ${router.pathname === data.link && "active"} `}>
                                    <img src={data.img} alt="logo" />
                                    <div className='data-title'>
                                        <p>{data.title}</p>
                                    </div>
                                </a>
                            
                        )
                    })

                } */}
             
            </div>
            {/* <div className='advertise'>
                <p>Register with UP to get <br/> access all Features!</p>
                <button>Get Connected Now!</button>
            </div> */}
            <div className='footer'>
            <img src="/useables/guy.png" alt="logo" />
                <div className='title'>
                    <p>{name}</p>
                    <h5>{role}</h5>
                </div>
                <img className='downimg' src="/useables/arrdown.png" alt="logo" />
            </div>
        </Sidecontent>
    </Side>
  )
}

const Side = styled.aside`
    
    height: 100vh;
    background-color: #fff;
    z-index: 100;
    font-size: 13px;
    overfolw-y: scroll;
    @media (max-width: 768px) {
       display: none;
       
    }



`
const Sidecontent = styled.div`
    padding: 30px;

    
    a{
        text-decoration: none;
        color: black;
    }

    .header {
       
        display: flex;
        justify-content: sapce-around;
        align-items: flex-start;
        // margin-block: 20px;
        gap: 15px;
        .title {
            line-height: 1.5;
            font-size: 13px;
           
            h5 {
                color: #969494;
            }
            p{
                color:#52C3F1;
            }
        }
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
        .downimg {
            width: 15px;
            height: 15px;
            margin-top: 5px;
            object-fit: contain;
        }
    }
    .body {
        margin-block: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 15px;
        .item {
            display: flex;
            justify-content: start;
            align-items: center;
            width: 210px;
            gap: 15px;
            text-transform: capitalize;
            
            border-radius: 5px;
            padding: 10px;
            img {
                width: 20px;
                height: 20px;
                object-fit: contain;
                mrgin-right: 10px;
            }

        }
    }
    .active {
        background: #FF993A;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
       
            color: #fff;
        
    }
    .logout {
        color: red;
    }
    .advertise {
        background: linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%);
        border-radius: 20px;
        padding: 15px;
        text-align: center;
        margin-block: 5px;
        height: 130px;
        display: grid;
        place-items: center;

        p {
            color: #fff;
        }

        button {
            background: #fff;
            border: 1px solid #fff;
            border-radius: 30px;
            padding: 10px;
            color: #000;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
        }
    }
    .footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-block: 50px 0;
        gap: 15px;
        .title {
            line-height: 1.5;
        }
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
        .downimg {
            width: 15px;
            height: 15px;
            margin-top: 5px;
            object-fit: contain;
        }
    }
`

export default Sidebar