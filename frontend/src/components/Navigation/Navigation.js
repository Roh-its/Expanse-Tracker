import React, { useState } from 'react'
import styled from 'styled-components';
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';
import { Link } from 'react-router-dom';

function Navigation({active, setActive}) {

  return (
    <NavStyled>
       <div className="user-con">
            <img src={avatar} alt="" />
            <div className="text">
                <h2>Rohit Kumar</h2>
                <p>Your Money</p>
            </div>
        </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul> 
            <div className="bottom-nav">
               <Link to="/"> <li>
                    {signout} Sign Out
                </li></Link>
            </div>       
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    .user-con{
        height: 100px;
        display: flex:
        align-items: centre;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
            margin-left: -12rem;
           
        }
        h2{
            color: rgba(34, 34, 96, 1); padding-left:102px;  margin-top:-75px;
        }
        p{
            color: rgba(34, 34, 96, .6); padding-left:102px;           
        }
    }

    .bottom-nav{
        text-decoration: none;
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
    i{
        color: rgba(34, 34, 96, 1) !important;
    }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation