import React from "react";
// import Avatar from '@atlaskit/avatar';
import { createUseStyles } from 'react-jss';
import { N10 } from "@atlaskit/theme/colors";
import { useSelector } from 'react-redux';
import { IoIosPhonePortrait } from "react-icons/io";
import { BsTicketPerforated } from "react-icons/bs";
import RanksHistory from "./customerComponents/RankHistory";

const useStyles = createUseStyles({
  contentWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    '& > h4, h3, p': {
      margin: '5px 0 0 0',
    }
  },
  customerInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 10,
  },
  rankWrapper: {
    display: 'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridGap: '3rem ',
    alignItems: 'center',
  },
  shopWrapper: {
    display: 'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
    gridGap: '3rem ',
    alignItems: 'center',
  },
  shopContent: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
  }
})

function MemberRankDetails() {
  const classes = useStyles();
  const customerDetail = useSelector((state) => state.customer.selectedCustomer);

  const shops = [
    {
      key: 1,
      name: 'Company A',
      amount: 580,
      src: 'fptShop.png',
    },
    {
      key: 2,
      name: 'Company B',
      amount: 250,
      src: "fptTelecom.png",
    },
    {
      key: 3,
      name: 'Company C',
      amount: 114,
      src: "sendo.png",
    },
    {
      key: 4,
      name: 'Shop F',
      amount: 464,
      src: "fpt.png",
    },
    {
      key: 5,
      name: 'Shop E',
      amount: 464,
      src: "longChau.png",
    },
  ];

  const headers = [
    {
      title: 'Hạng sau thay đổi'
    },
    {
      title: 'Thời điểm thay đổi'
    }
  ];

  const items = [
    {
      rank: 'Bạch kim',
      time: '12/12/2023',
    },
    {
      rank: 'Vàng',
      time: '12/12/2023',
    },
    {
      rank: 'Bạc',
      time: '12/12/2023',
    },
  ];

  return (
    <>
      <div className={classes.contentWrapper}>
        <div className={classes.customerInfoWrapper}>
          <div>
            <h3>{customerDetail.name}</h3>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <IoIosPhonePortrait />
              <p>{customerDetail.phone}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <BsTicketPerforated style={{transform: 'rotate(90deg)'}}/>
              <p>{customerDetail.id}</p>
            </div>
          </div>
          <div className={classes.rankWrapper}>
            <div>
              <p>Hạng hiện tại</p>
              <h4 style={{margin: '5px 0 0 0'}}>{customerDetail.currentRank}</h4>
            </div>
            <div>
              <p>Hạng trước đó</p>
              <h4 style={{margin: '5px 0 0 0'}}>Bạch kim</h4>
            </div>
            <div>
              <p>Thời gian thay đổi</p>
              <h4 style={{margin: '5px 0 0 0'}}>{customerDetail.timeChanged}</h4>
            </div>
          </div>
        </div>
        <div>
          <h5>Thông tin điểm xếp hạng</h5>
          <div className={classes.customerInfoWrapper}>
            <div>
              <h3>{customerDetail.rankPoint}</h3>
              <p>Tổng điểm</p>
            </div>
            <div className={classes.shopWrapper}>
              {shops.map((shop) => (
                <div key={shop.key} className={classes.shopContent}>
                  {/* <Avatar size="medium" appearance="square" src={shop.src}/> */}
                  <div>
                    <p>{shop.name}</p>
                    <h4 style={{margin: 0}}>{shop.amount}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <div className={classes.contentWrapper} style={{width: '50%'}}>
          <RanksHistory headers={headers} items={items}/>
        </div>
        <div className={classes.contentWrapper} style={{width: '50%'}}>
          <RanksHistory headers={headers} items={items}/>
        </div>
      </div>
    </>
  )
}

export default MemberRankDetails;