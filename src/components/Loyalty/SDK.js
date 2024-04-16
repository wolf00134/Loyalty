import { N10 } from "@atlaskit/theme/colors";
import React from "react";
import Button from '@atlaskit/button';
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { customerActions } from "../redux/customer/slice";
import { RIGHT_PAGE_CONTENT } from "../utils/constant";

export const useStyles = createUseStyles({
  SDKContents: {
    padding: '1rem',
    backgroundColor: N10,
    borderRadius: 6,
    '& > h4': {
      margin: 0,
    }
  },
  contentWrapper: {
    display: 'flex',
    gap: '1rem',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }
})

function SDK() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.SDKContents}>
        <h3>Nội dung FPT SDKs IOS</h3>
        <Button 
          appearance='subtle'
          onClick={(e) => {
            e.stopPropagation();
            dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.SDK_INTRO))
          }}
          style={{padding: 0, margin: '8px 8px 8px 0'}}
          >
            Giới thiệu
          </Button>
        <Button appearance='subtle' style={{padding: 0, margin: '8px 8px 8px 0'}}>Khả năng tương thích</Button>
        <Button 
          appearance='subtle'
          onClick={(e) => {
            e.stopPropagation();
            dispatch(customerActions.changeRightPageContent(RIGHT_PAGE_CONTENT.SDK_INTEGRATION))
          }}
          style={{padding: 0, margin: '8px 8px 8px 0'}}
        >
          Tích hợp SDKs
        </Button>
        <Button appearance='subtle' style={{padding: 0, margin: '8px 8px 8px 0'}}>Tác vụ tích hợp SDKs</Button>
        <Button appearance='subtle' style={{padding: 0, margin: '8px 8px 8px 0'}}>Kiếm thử FPT SDKs IOS</Button>
      </div>
    </div>
  )
}

export default SDK;