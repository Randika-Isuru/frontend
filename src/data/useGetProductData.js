import { useQuery } from 'react-query';
import axios from 'axios';

const getProductData = async (params) =>{
    const {data} = await axios({ url: `/api/v1/products`, method: 'get'})
    return data;
}

export const useGetProductData = (enabled) =>
    useQuery(['validate'], getProductData,{
        suspense: true,
        enabled: enabled,
    });
