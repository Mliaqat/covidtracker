import axios from "axios";
const url='https://covid19.mathdro.id/api'

export const Apifetch= async ()=>{
    try{
        const {data:{recovered,deaths,confirmed}} = await axios.get(url)
        return {confirmed,deaths,recovered};


    }catch{

    }

}


