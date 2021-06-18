const apiURL = process.env.REACT_APP_API_URL;
const apiToken = process.env.REACT_APP_API_TOKEN;

const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiToken}`,
})

export const getProducts = () =>
{
    return fetch(`${apiURL}/products`, {
        method: 'GET',
        headers
    })
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}

export const getRedeemedProducts = () =>
{
    return fetch(`${apiURL}/user/history`, {
        method: 'GET',
        headers
    })
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}


export const getUserInfo = () =>
{
    return fetch(`${apiURL}/user/me`, {
        method: 'GET',
        headers
    })
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
}

export const postRedeem = async (productId) =>
{
    const body = JSON.stringify({ "productId": productId });

    const requestOptions = {
        method: 'POST',
        headers,
        body
    };

    const redeemResult = await fetch(`${apiURL}/redeem`, requestOptions)    
        .then(async result => 
        {
            const message =await result.json()
            return result.status === 200 ? {success: true, message} : {success:false, message};
        })
        .catch(error =>
        {
            console.log('error', error);

            return false;
        });
        
    return new Promise(resolve => resolve(redeemResult));
};


export const postRedeemCoins = async (amount) =>
{
    const body = JSON.stringify({ "amount": amount});

    const requestOptions = {
        method: 'POST',
        headers,
        body
    };

    const redeemResult = await fetch(`${apiURL}/user/points`, requestOptions)    
        .then(async result => 
        {
            const message =await result.json()
            return result.status === 200 ? {success: true, message} : {success:false, message};
        })
        .catch(error =>
        {
            console.log('error', error);

            return false;
        });
        
    return new Promise(resolve => resolve(redeemResult));
};
