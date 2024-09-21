import axios from 'axios';
import {useNavigate } from "react-router-dom";

const login = async (data) => {
    const LOGIN_ENDPOINT = `http://localhost/event_management/login.php`;
    try{
        let response = await axios.post(LOGIN_ENDPOINT, data);
        console.log(response)
        if(response.data.jwt){
            
            localStorage.setItem("access_token", response.data.jwt);
            localStorage.setItem("userdata", response.data.datas);
            return true;
        }else{
            return false;
        }
    }catch(e){
        return false;
    }
}
const register = async (data)=> {
    const SIGNUP_ENDPOINT = `http://localhost/event_management/register.php`;
    try{
        let response= await axios({
            method: 'post',
            responsiveTYpe: 'json',
            url: SIGNUP_ENDPOINT,
            data: data
        });
    } 
    catch(e){
        console.log(e);
    }
}
const logout = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
}
export  { login, register, logout }