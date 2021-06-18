import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Confetti from 'react-confetti'

import { Button, Title, Text } from './../modal/modalStyle'
import { Line, OverLay } from '../product/productStyle';
import { CoinContainer, CoinImage, Text as CostText } from './redeemProductStyle';
import coin from '../../assets/icons/coin.svg';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 30,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const RedeemProduct = props =>
{
    const classes = useStyles();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [fetchData, setFetchData] = useState(false);

    const { name: productName, id: productId, cost: productCost } = props;
    const { userData, setUserData } = props;
    const { postRedeem, setOverlay, enableToRedeem } = props;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const handleOpen = () =>
    {
        setFetchData(true);
    };

    const handleClose = () =>
    {
        setModalOpen(false);
        setOverlay(false)
    };

    useEffect(() =>
    {
        if (fetchData) {
            const redeemInfo = async () =>
            {
                await postRedeem(productId).then(result =>
                {
                    const fetchRedeemResponse = result.success ?
                        { success: result.success, message: result.message } :
                        { success: result.success, message: result.message.error };

                    if (fetchRedeemResponse.success) {
                        setUserData({ ...userData, points: (userData.points - productCost) });
                    }

                    setModalOpen(true);
                    setModalData(fetchRedeemResponse);
                });
            }
            redeemInfo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchData])

    return (
        <OverLay>
            <CoinContainer>
                <CostText>{productCost}</CostText>
                <CoinImage src={coin} />
            </CoinContainer>
            {(enableToRedeem && (userData.points >= productCost)) &&
                <div>
                    <Button type="button" onClick={handleOpen}>
                        Redeem now
                 </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={modalOpen}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={modalOpen}>
                            <div className={classes.paper}>
                                {modalData.success
                                    && <Confetti width={width}
                                        height={height}
                                        numberOfPieces={700}
                                        initialVelocityX={4}
                                        initialVelocityY={40}
                                    />}
                                {modalData.success &&
                                    <>
                                        <Title id="transition-modal-title">Congratulations</Title>
                                        <Line />
                                        <Text id="transition-modal-description">The {productName} was successfully redeemed</Text>
                                    </>
                                }
                                {!modalData.success &&
                                    <>
                                        <Title id="transition-modal-title">Sorry, something went wrong</Title>
                                        <Line />
                                        <Text id="transition-modal-description">Please, check if you have enough coins to redeem the {productName} and try again</Text>
                                    </>
                                }
                            </div>
                        </Fade>
                    </Modal>
                </div>}
        </OverLay>)
}

export default RedeemProduct;