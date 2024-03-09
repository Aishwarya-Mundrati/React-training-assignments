import axios from 'axios';

export let dataSericeObj = 
{
    getAllProducts,
    addProd,
    deleteProd,
    getProdById,
    updateProd
};

let url = "http://10.70.199.166:1235/product/"


function getAllProducts()
{
    return axios.get(url);
}

function addProd(prodObj)
{
    return axios.post(url, prodObj);
}

function deleteProd(prodid)
{
    return axios.delete(url + prodid);
}

function getProdById(prodid)
{
    return axios.get(url + prodid);
}

function updateProd(prodObj)
{
    return axios.put(url+prodObj.prodid ,prodObj);
}