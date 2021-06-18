import { useState, useEffect, createContext } from 'react';

import { postRedeem } from "../services/api";

export const RedeemContext = createContext();

export const RedeemProvider = ({children, id: productId}) =>
{
    const [modalOpen, setModalOpen] = useState(() => false);
    const [fetchData, setFetchData] = useState(() => false);
    const [modalData, setModalData] = useState({message: ''});

    useEffect(() =>
    {
        if (fetchData) {

            const fetchPostRedeem = async () =>
            {
                await postRedeem(productId).then(result =>
                {
                    setModalData(result)
                    setModalOpen(true)
                });
            }
            
            fetchPostRedeem();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchData]);

    return (
        <RedeemContext.Provider value={[() =>modalOpen, setModalOpen, setFetchData, modalData]}>
            {children}
        </RedeemContext.Provider>
    )
}