import React, { useState } from 'react';
import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree'
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition } from '@atlaskit/modal-dialog';
import Button from "@atlaskit/button";

function NearExpiredPointsModal({ isOpenModal, setIsOpenModal }) {
  const subHeaders = [
    {
      title: 'Ngày hết hạn',
    },
    {
      title: 'Nguồn tích',
    },
    {
      title: 'Điểm hết hạn',
    },
  ];

  return (
    <>
      <ModalTransition>
        {isOpenModal && (
          <Modal onClose={setIsOpenModal(false)}>
            <ModalHeader>Chi tiết điểm sắp hết hạn</ModalHeader>
            <ModalBody>
              <TableTree>
                <Headers>
                  <Header>Ngày hết hạn</Header>
                  <Header>Nguồn tích</Header>
                  <Header>Điểm hết hạn</Header>
                </Headers>
              </TableTree>
            </ModalBody>
          </Modal>
        )}
      </ModalTransition>
    </>
  )
}

export default NearExpiredPointsModal;