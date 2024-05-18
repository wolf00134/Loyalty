import React, { useState } from "react";
import { createUseStyles } from 'react-jss';
import { N10 } from "@atlaskit/theme/colors";
import DropdownMenu, { DropdownItem, DropdownItemGroup } from "@atlaskit/dropdown-menu";
import Button from "@atlaskit/button";
import CustomerAccountBalances from "./customerComponents/CustomerAccountBalances";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import TextField from '@atlaskit/textfield';
import { useSelector } from "react-redux";

const useStyles = createUseStyles({
  contentWrapper: {
    backgroundColor: N10,
    borderRadius: 6,
    padding: '1rem',
    width: '100%',
    '& > h4, h3, p': {
      margin: '5px 0 0 0',
    }
  },
  headerWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    alignItems: 'center',
    gridGap: '1rem',
    textAlign: 'center',
    '& > button': {
      height: '100%',
      alignItems: 'center',
    }
  },
  gridContent: {
    backgroundColor: N10,
    borderRadius: 6,
  },
  searchBar: {
    height: '100%',
    paddingLeft: '0.5rem',
    borderRadius: 6,
  }
})

function AccountBalance() {
  const classes = useStyles();
  const [openSearchBox, setOpenSearchBox] = useState(false);
  // const customers = useSelector((state) => state.customer.customers);

  const headers = [
    {
      key: 1,
      title: 'Mã khách hàng',
    },
    {
      key: 2,
      title: 'Họ và tên'
    },
    {
      key: 3,
      title: 'Số điện thoại'
    },
    {
      key: 4,
      title: 'Thời gian'
    },
    {
      key: 5,
      title: 'Reward points tích'
    },
    {
      key: 6,
      title: 'Reward points tiêu'
    },
    {
      key: 7,
      title: ''
    },
  ];
  const options = [
    {
      key: 1,
      name: 'Tất cả'
    },
    {
      key: 2,
      name: 'Một phần'
    },
    {
      key: 3,
      name: 'Ẩn'
    }
  ];

  const customers = [
    {
      key: 1,
      id: '3453094853',
      name: 'Ngô Thị Hường',
      phone: '03948583745',
      time: '2024-02-06',
      fGoldSaved: 785,
      fGoldSpent: 362,
    },
  ];

  return (
    <>
    <div className={classes.headerWrapper}>
        <div className={classes.gridContent}>
            <p>Mã hoặc số điện thoại</p>
        </div>
        <DropdownMenu
          trigger="Thời gian"
          testId="dropdown"
        >
          <DropdownItemGroup>
            {options.map(option => (
              <DropdownItem key={option.key}>{option.name}</DropdownItem>
            ))}
          </DropdownItemGroup>
        </DropdownMenu>
        {openSearchBox === false && (
          <Button onClick={() => setOpenSearchBox(true)} appearance="danger" style={{height: '100%', alignItems: 'center', borderRadius: 6}}>Tìm kiếm</Button>
        )}
        {openSearchBox === true && (
          <div style={{height: '100%', display: 'flex', gap: '1rem'}}>
            <TextField placeholder="Tìm kiếm" elemBeforeInput={<IoIosSearch />} className={classes.searchBar}/>
            <Button 
              iconAfter={<IoIosClose size={'3rem'} />} 
              aria-label="Unstar this page" 
              style={{width: '5rem', height: '100%'}} 
              onClick={() => setOpenSearchBox(false)} 
            />
          </div>
        )}
      </div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <div className={classes.contentWrapper}>
          <CustomerAccountBalances headers={headers} items={customers}/>
        </div>
      </div>
    </>
  )
}

export default AccountBalance;