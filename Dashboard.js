import React from 'react'
import Sidebar from './components/Sidebar'
import styled from 'styled-components'
import { BarChart } from './components/BarChart'
import { DoughnutChart } from './components/DoughnutChart'

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import cat1 from "./useables/cat1.png"
import cat2 from "./useables/cat2.png"
import cat3 from "./useables/cat3.png"
import cat4 from "./useables/cat4.png"
import cat5 from "./useables/cat5.png"
import cat6 from "./useables/cat6.png"
import add from './useables/add.png'
import guy from './useables/guy.png'
import bell from './useables/bell.png'
import search from './useables/search.png'
import cardinner1 from './useables/card1inner.png'
import cardinner2 from './useables/cardinner2.png'
import cardinner3 from './useables/cardinner3.png'
import cardinner4 from './useables/cardinner4.png'
import arrup from "./useables/arrowup1.png"

  
function Dashboard( ) {

  return (
    <div>
        <Flex>
            <Sidebar />
           <div className='contents'>
                <div className='searchbar'>

                    <img src="./useables/menu.png" alt="logo" className='menu' onClick={(e)=> 
                        e.target.parentElement.parentElement.parentElement.querySelector('aside').classList.toggle('activebar')} />
                    
                    <div className='search'>
                    <input type="text" placeholder="Search"  />
                    <img src={search} alt="search" />
                    </div>
                    <div className="user">
                        <img src={guy} alt="user" />
                        <img src={bell} alt="bell" className='bell' />
                    </div>
                </div>
                <div className='grid-content'>
                    <div className='card card1'>
                        <img src={cardinner1} alt="logo" />
                        <div className='card-title'>
                            <p>Total Revenue</p>
                            <h4>N2,000,000</h4>
                            <div className='card-subtitle'>
                                <img src={arrup} alt="logo" />
                                <p>37.8% Last Month</p>
                            </div>
                        </div>
                    </div>
                    <div className='card card2'>
                        <img src={cardinner2} alt="logo" />
                        <div className='card-title'>
                            <p>Total Revenue</p>
                            <h4>N2,000,000</h4>
                            <div className='card-subtitle'>
                                <img src={arrup} alt="logo" />
                                <p>37.8% Last Month</p>
                            </div>
                        </div>
                    </div>
                    <div className='card card3'>
                        <img src={cardinner3} alt="logo" />
                        <div className='card-title'>
                            <p>Total Revenue</p>
                            <h4>N2,000,000</h4>
                            <div className='card-subtitle'>
                                <img src={arrup} alt="logo" />
                                <p>37.8% Last Month</p>
                            </div>
                        </div>
                    </div>
                
                    <div className='card card4'>
                        <img src={cardinner4} alt="logo" />
                        <div className='card-title'>
                            <p>Total Revenue</p>
                            <h4>N2,000,000</h4>
                            <div className='card-subtitle'>
                                <img src={arrup} alt="logo" />
                                <p>37.8% Last Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='charts-container'>
                        <div className='barchart'>
                            <div className='barchart-title'>
                                <p>Institution Overview</p>
                                <select>
                                    <option>All</option>
                                </select>
                            </div>
                            <BarChart/>
                        </div>
                    
                    <div className='dchart'>
                        <p>Billers</p>
                        <DoughnutChart/>
                    </div>
                    <div className='list'>
                        <div className='category-content'>
                            <div className="category">
                                <h5>User Category</h5>
                                <img src={add}/>
                            
                            </div>
                            <div className='user-content-title'>
                                <div className='usernumber'>
                                <img src={cat1} className='cat1'/>
                                    <p>Bank Admin</p>
                                    <p>12 users</p>
                                </div>
                                    <Progress percent={""}  />
                            </div>
                            <div className='user-content-title'>
                                <div className='usernumber'>
                                <img src={cat2} className='cat2'/>
                                    <p>Branch Admin</p>
                                    <p>19 users</p>
                                </div>
                                <Progress percent={""} />
                            </div>
                            <div className='user-content-title'>
                                <div className='usernumber'>
                                <img src={cat3} className='cat3'/>
                                    <p>Authorizer</p>
                                    <p>19 users</p>
                                </div>
                                <Progress percent={"58"} theme={{symbol:'19 users'}} />
                                </div>
                            <div className='user-content-title'>
                                <div className='usernumber'>
                                <img src={cat4} className='cat4'/>
                                    <p>Audit</p>
                                    <p>19 users</p>
                                </div>
                                <Progress percent={58} theme={{symbol:'19 users'}} />
                            </div>
                            <div className='user-content-title'>

                                <div className='usernumber'>
                                <img src={cat5} className='cat5'/>
                                    <p>Bank Audit</p>
                                    <p>19 users</p>
                                </div>
                                <Progress percent={1} status="active" theme={{symbol:""}}/>
                            </div>
                            <div className='user-content-title'>
                                <div className='usernumber'>
                                <img src={cat6} className='cat6'/>
                                    <p>Tellers</p>
                                    <p>19 users</p>
                                </div>
                                <Progress percent={1} status="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='tables'>
                {/* <DataTable
                    columns={columns}
                    data={data}
                    pagination={true}
                /> */}
                <h1>tables</h1>
          
 
                </div>
        </div>
        </Flex>
        
    </div>
  )
}





const Flex = styled.div`
    display: flex;
    // background-color: #fff;
    z-index: 10000;
    height: 100vh;
    overflow: hidden;
    ::-webkit-scrollbar: none;
    .react-sweet-progress-symbol{
        display: none;
    }

    @media screen and (max-width: 968px) {
        overflow-y: scroll;
        overflow-x: hidden;
      
    }
    .activebar{
        display: initial;
        position: absolute;
        top: 30px;
        left: 10;
        z-index: 1;
        overflow: hidden;
    }
    .data{
        
        color:#fff;
        font-size: 10px;
       
        > img{
            width: 50px;
            height: 50px;
            object-fit: contain;
        }
    }
    .data-title{
        letter-spacing: 1px;
        
    }
    .data-subtitle{
        display: flex;
        gap: 5px;
    }
    .contents{
        display:flex;
        flex-direction: column;
        width: 100%;
        gap:10px;
        overflow-y: scroll;
        background-color: #fdfffe;
        // remove scrollbar
        ::-webkit-scrollbar {
            display: none;
        }

        @media screen and (max-width: 968px) {
            .menu{
                display: block;
            }
        }
    }
    .searchbar{
        align-self: flex-end;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 10px;
        gap: 10px;
        // border:1px solid red;
        position: absolute;
        top: 0;
        background-color: #fdfffe;
        z-index: 1;

        
    }
    .menu{
        flex: 1;
        width: 30px;
        height: 30px;
        object-fit: contain;
        display:none;
    }
    .search{
        width: 40%;
        position: relative;
    }
    .search input{
        width: 100%;
        height: 30px;
        border: none;
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 5px;
        padding: 10px;
    }
    .search img{
        position: absolute;
        right: 5px;
        top: 5px;
        width: 20px;
        height: 20px;
    }
    .user{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .user img{
        width: 60px;
        height: 40px;
        border-radius: 50%;
        object-fit: contain;
    }
    .user .bell{
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
    .grid-content{
        // border: 1px solid red;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 10px;
        padding: 10px;
        margin-top: 80px;
    }
    .card{
      
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-items: center;
        color: #fdfffe;
        // line-height: 1.5;
        max-height: 90px;
        padding: 15px;
        border-radius: 20px;
        box-shadow: 0px 0px 5px #ccc;
        overflow: hidden;
        font-size: 15px !important;
    }
    .card > img{
      
        object-fit: contain;
        @media screen and (max-width: 400px) {
            width: 50%;
            height: 50%;
        }
    }
    .card-title{
        font-size: 1em;
        width: 100%;
    }
    .card-subtitle{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        font-size: 10px;
    }
    .card-subtitle > img{
        width: 15px;
        height: 15px;
        object-fit: contain;
    }
    .card1{
        background-image: url(./useables/intersect.png);
        background-size: 200px;
        background-position: bottom right;
        background-repeat: no-repeat;
        background-color:#00B3FE;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .card2{
        background-color:#FF993A;
        background-image: url('./useables/intersect2.png');
        background-size: 200px;
        background-position: bottom right;
        background-repeat: no-repeat;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .card3{
        background-image: url('./useables/intersect3.png');
        background-size: 200px;
        background-position: bottom right;
        background-repeat: no-repeat;
        background-color:#8AC53E;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .card4{
        background-image: url('./useables/intersect4.png');
        background-size: 200px;
        background-position: bottom right;
        background-repeat: no-repeat;
        background-color:#FFC921;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    }

    .charts-container{
       
        display: grid;
        grid-template-columns: 1fr 270px 250px;
        
        padding: 20px;
        grid-gap: 10px;
        margin-block: 10px;
        @media screen and (max-width: 1080px) {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 5px;
        }
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            // grid-gap: 20px;
        }
    }
    .barchart-title{
        display: flex;
        justify-content: space-between;
        align-items: center;

        select{
            outline: none;
            border-radius: 4px;
            border: 1px solid #ccc;
            padding: 5px;
            width: 100px;
        }
       
    }
    .barchart{
        background-color: #fff;
        height: 60%;
        // width: 100%;
        border-radius: 10px;
        padding: 2%;
        box-shadow: 0px 0px 3px #ccc;
        
        canvas{
            height: 200px;
            @media screen and (max-width: 1080px) {
                height: 50%;
                width: 70%;
            }
        }

        @media screen and (max-width: 1080px) {
            height: 100%;
        }
    }
    .dchart{
     
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
      
        padding: 20px;
        box-shadow: 0px 0px 3px #ccc;
        border-radius: 20px;
        @media screen and (min-width: 1080px) {
            height: 60%;
        }
        canvas{
            width: 100%;
            height: 50%;
           
            box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
            border-radius: 30px;
            @media screen and (max-width: 1080px) {
                height: 50%;
                width: 60%;
            }
            @media screen and (max-width: 900px) {
                // margin-top: 30px;
                height: 10%;
                width: 100%;
            }
        }
        
    }
    .list{
        padding: 10px;
        box-shadow: 0px 0px 2px #ccc;
        border-radius: 20px;
        background-color: #fff;
    }
    .category-content{
        display: flex;
        flex-direction: column;
        justify-content: start;
        row-gap: 20px;
        padding: 5px 20px;
        // box-shadow: 0px 0px 5px #ccc;
    }
    .category{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
       
    }
    .category img{
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
    .user-content-title{
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 5px;
       

    }
    .usernumber{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
        // padding: 5px;
        font-size: 10px !important;
    }
    .usernumber img{
        
        // object-fit: contain;
        // padding: 5px;
        
    }
    .cat1{
        background: rgba(15, 95, 194, 0.5);
       
        border-radius: 50%;
        padding: 5px;
        
        
    }
    .cat2{
        background: rgba(255, 157, 65, 0.4);
       
        border-radius: 50%;
        padding: 5px;
    }
    .cat3{
        background-color: #8AC53E;
        border-radius: 50%;
        background: rgba(138, 197, 62, 0.5);
       
        padding: 5px;
        
    }
    .cat4{
        background-color: rgba(207, 255, 243, 0.5);
       
        border-radius: 50%;
        padding: 5px;
       
        
    }
    .cat5{
        border-radius: 50%;
        background: rgba(247, 147, 26, 0.5);
       padding:5px;
        
    }
    .cat6{
        
        border-radius: 50%;
        background: rgba(0, 255, 163, 0.5);
       padding:5px;
        
    }
    .tables{
        width: 72%;
        height: 100%;
        background-color: #fff;
        margin-left: 10px;
        margin-top: -20%;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0px 0px 3px #ccc;

        @media screen and (max-width: 1080px) {
            width: 95%;
            margin-top: 0%;
        }

    }
    
`







export default Dashboard