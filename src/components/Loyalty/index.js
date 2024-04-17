import React, { useEffect, useState } from 'react';
import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button';
import { GoGift } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { N40, N30 } from '@atlaskit/theme/colors';
import { CiCircleQuestion } from "react-icons/ci";
import { TbBrandZapier } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { Collapse } from '@mui/material';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { customerActions } from '../redux/customer/slice';
import { RIGHT_PAGE_CONTENT } from '../utils/constant';
import RightMenu from '../RightMenu';

const useStyles = createUseStyles({
  menuWrapper: {
    width: '12rem',
    padding: '1rem',
  },
  leftMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
  loyalty: {
    display: 'flex',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: '1.5rem',
  },
  contentWrapper: {
    width: '100%',
    backgroundColor: N40,
  },
  pageNav: {
    height: '3rem',
    backgroundColor: N30,
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    gap: 10,
    justifyContent: 'end',
  }
})

function Loyalty() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOperationExpanded, setIsOperationExpanded] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerActions.prepareData());
  }, []);

  const onClickSettings = () => {
    dispatch(customerActions.getAllCustomers());
  }
  const expandCollapse = () => {
    setIsExpanded(!isExpanded);
  }
  const expandOperationMenu = () => {
    setIsOperationExpanded(!isOperationExpanded);
  }

  return (
    <div style={{display: 'flex', minHeight: '100vh'}}>
      <div className={classes.menuWrapper}>
        {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png' alt='' style={{width: '4rem', marginBottom: 10}}/> */}
        <div onClick={expandCollapse}>
          <div className={classes.loyalty}>
            <div style={{display: 'flex', gap: 5, alignItems: 'center'}}>
              <GoGift className={classes.icon}/>
              <Button appearance='subtle' style={{margin: 8}}>Loyalty</Button>
            </div>
            {isExpanded ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
          <Collapse in={isExpanded} style={{display: 'flex', flexDirection: 'column'}}>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.SUMMARY))
              }}
              >
                Tổng quan
            </Button>
            <Button 
              appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.REVENUE))
              }}
            >
              Doanh thu
            </Button>
            <Button 
            appearance='subtle' 
            style={{margin: 5, fontSize: 13}}
            onClick={(e) => {
              e.stopPropagation()
              dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.POINTS))
            }}
            >
              Tích, tiêu điểm
            </Button>
            <Button 
              appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.RANKING))
              }}
            >
              Ranking
            </Button>
            <Button 
              appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.MEMBER))
              }}
            >
              Members & BUs
            </Button>
            <Button 
              appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.TREND))
              }}
            >
              Xu hướng
            </Button>
          </Collapse>
        </div>
        <div className={classes.leftMenu}>
          <CiDollar className={classes.icon}/>
          <Button appearance='subtle' style={{margin: 8}}>Payment</Button>
        </div>
        <div className={classes.leftMenu}>
          <PiUserCircleLight className={classes.icon}/>
          <Button 
            appearance='subtle' 
            onClick={(e) => {
              e.stopPropagation()
              dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.CUSTOMER))
            }} 
            style={{margin: 8}}>Customer</Button>
        </div>
        <div onClick={expandOperationMenu}>
          <div className={classes.loyalty}>
            <div style={{display: 'flex', gap: 5, alignItems: 'center'}}>
              <RiCustomerService2Line className={classes.icon}/>
              <Button appearance='subtle' style={{margin: 8}}>Vận hành</Button>
            </div>
            {isOperationExpanded ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
          <Collapse in={isOperationExpanded} style={{display: 'flex', flexDirection: 'column'}}>
          <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.ACCOUNT_BALANCE))
              }}
              >
                Số dư ví khách hàng
            </Button>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.PRIZE))
              }}
              >
                Giao dịch đổi quà
            </Button>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.EXPIRED_POINTS))
              }}
              >
                Điểm hết hạn
            </Button>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.NETWORK_GIFT_EXCHANGE))
              }}
              >
                Giao dịch đổi quà
            </Button>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.NEAR_EXPIRED_POINTS))
              }}
              >
                Điểm sắp hết hạn
            </Button>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.UNUSUAL_TRANSACTION))
              }}
              >
                Giao dịch bất thường
            </Button>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.ADJUST_TRANSACTION))
              }}
              >
                Giao dịch điều chỉnh
            </Button>
            <Button appearance='subtle' 
              style={{margin: 5, fontSize: 13}}
              onClick={(e) => {
                e.stopPropagation()
                dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.MEMBER_RANKS))
              }}
              >
                Hạng thành viên
            </Button>
          </Collapse>
        </div>
        <div className={classes.leftMenu}>
          <CiSettings className={classes.icon}/>
          <Button appearance='subtle' style={{margin: 8}} onClick={onClickSettings}>Cài đặt</Button>
        </div>
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.pageNav}>
          <CiCircleQuestion className={classes.icon}/>
          <CiSettings className={classes.icon}/>
          <Avatar size="medium" src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"/>
        </div>
        <RightMenu />
      </div>
    </div>
  )
}

export default Loyalty;