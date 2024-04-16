import React from 'react';
import { useSelector } from 'react-redux';
import { RIGHT_PAGE_CONTENT } from '../utils/constant';
import Customer from '../Loyalty/Customer';
import { createUseStyles } from 'react-jss';
import Member from '../Loyalty/Member';
import Ranking from '../Loyalty/Ranking';
import Points from '../Loyalty/Points';
import Trend from '../Loyalty/Trend';
import Revenue from '../Loyalty/Revenue';
import Summary from '../Loyalty/Summary';
import PrizeExchange from '../Loyalty/PrizeExchange';
import ExpiredPoints from '../Loyalty/ExpiredPoints';
import NearExpiredPoints from '../Loyalty/NearExpiredPoints';
import UnusualTransactions from '../Loyalty/UnusualTransactions';
import AdjustTransactions from '../Loyalty/AdjustTransactions';
import NetworkPrizeExchange from '../Loyalty/NetworkPrizeExchange';
import MemberRankDetails from '../Loyalty/MemberRankDetails';
import MemberRanks from '../Loyalty/MemberRanks';
import AccountBalance from '../Loyalty/AccountBalance';
import AccountBalanceDetail from '../Loyalty/AccountBalanceDetail';

const useStyles = createUseStyles({
  contentContainer: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
}) 

function RightMenu() {
  const content = useSelector((state) => state.customer.rightPageContent);
  const classes = useStyles();

  const renderHeader = () => {
    const renderContentHeader = (title, slot) => (
      <div>
        {!!title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
        {!!slot && slot}
      </div>
    );
    switch (content.name) {
      case RIGHT_PAGE_CONTENT.CUSTOMER.name:
        return renderContentHeader('Chi tiết khách hàng');
      case RIGHT_PAGE_CONTENT.MEMBER.name:
        return ( 
          <div>
            {renderContentHeader('Báo cáo khách hàng')}
            <p>Tạo bởi DCS Admin</p>
          </div>
        );
      case RIGHT_PAGE_CONTENT.RANKING.name:
        return ( 
          <div>
            {renderContentHeader('Báo cáo xếp hạng thành viên')}
            <p>Tạo bởi DCS Admin</p>
          </div>
        );
      case RIGHT_PAGE_CONTENT.POINTS.name:
        return (
          <div>
            {renderContentHeader('Báo cáo tích, tiêu và tiêu chéo')}
            <p>Tạo bởi DCS Admin</p>
          </div>
        )
      case RIGHT_PAGE_CONTENT.TREND.name:
        return (
          <div>
            {renderContentHeader('Báo cao xu hướng')}
            <p>Tạo bởi DCS Admin</p>
          </div>
        )
      case RIGHT_PAGE_CONTENT.REVENUE.name:
        return (
          <div>
            {renderContentHeader('Báo cáo doanh thu')}
            <p>Tạo bởi DCS Admin</p>
          </div>
        )
      case RIGHT_PAGE_CONTENT.SUMMARY.name:
        return (
          <div>
            {renderContentHeader('Báo cáo tổng quan Loyalty')}
            <p>Tạo bởi DCS Admin</p>
          </div>
        )
        case RIGHT_PAGE_CONTENT.PRIZE.name:
          return (
            <div>
              {renderContentHeader('Chi tiết giao dịch đổi quà Network')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.EXPIRED_POINTS.name:
          return (
            <div>
              {renderContentHeader('Điểm đã hết hạn')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.NEAR_EXPIRED_POINTS.name:
          return (
            <div>
              {renderContentHeader('Điểm sắp hết hạn')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.UNUSUAL_TRANSACTION.name:
          return (
            <div>
              {renderContentHeader('Giao dịch bất thường')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.ADJUST_TRANSACTION.name:
          return (
            <div>
              {renderContentHeader('Giao dịch điều chỉnh')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.NETWORK_GIFT_EXCHANGE.name:
          return (
            <div>
              {renderContentHeader('Giao dịch đổi quà Network')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.MEMBER_RANKS.name:
          return (
            <div>
              {renderContentHeader('Hạng thành viên')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.MEMBER_RANK_DETAILS.name:
          return (
            <div>
              {renderContentHeader('Chi tiết hạng khách hàng')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.ACCOUNT_BALANCE.name:
          return (
            <div>
              {renderContentHeader('Số dư ví khách hàng')}
            </div>
          )
        case RIGHT_PAGE_CONTENT.ACCCOUNT_BALANCE_DETAILS.name:
          return (
            <div>
              {renderContentHeader('Chi tiết ví khách hàng')}
            </div>
          )
      default:
        return null;
    }
  }

  const renderContent = () => {
    switch (content.name) {
      case RIGHT_PAGE_CONTENT.CUSTOMER.name:
        return <Customer />;
      case RIGHT_PAGE_CONTENT.MEMBER.name:
        return <Member />;
      case RIGHT_PAGE_CONTENT.RANKING.name:
        return <Ranking />;
      case RIGHT_PAGE_CONTENT.POINTS.name:
        return <Points />
      case RIGHT_PAGE_CONTENT.TREND.name:
        return <Trend />;
      case RIGHT_PAGE_CONTENT.REVENUE.name:
        return <Revenue />;
      case RIGHT_PAGE_CONTENT.SUMMARY.name:
        return <Summary />;
      case RIGHT_PAGE_CONTENT.PRIZE.name:
        return <PrizeExchange />
      case RIGHT_PAGE_CONTENT.EXPIRED_POINTS.name:
        return <ExpiredPoints />
      case RIGHT_PAGE_CONTENT.NEAR_EXPIRED_POINTS.name:
        return <NearExpiredPoints />
      case RIGHT_PAGE_CONTENT.UNUSUAL_TRANSACTION.name:
        return <UnusualTransactions />
      case RIGHT_PAGE_CONTENT.ADJUST_TRANSACTION.name:
        return <AdjustTransactions />
      case RIGHT_PAGE_CONTENT.NETWORK_GIFT_EXCHANGE.name:
        return <NetworkPrizeExchange />
      case RIGHT_PAGE_CONTENT.MEMBER_RANK_DETAILS.name:
        return <MemberRankDetails />
      case RIGHT_PAGE_CONTENT.MEMBER_RANKS.name:
        return <MemberRanks />
      case RIGHT_PAGE_CONTENT.ACCOUNT_BALANCE.name:
        return <AccountBalance />
      case RIGHT_PAGE_CONTENT.ACCCOUNT_BALANCE_DETAILS.name:
        return <AccountBalanceDetail />
      default:
        return null;
    }
  }

  return (
    <div className={classes.contentContainer}>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default RightMenu;