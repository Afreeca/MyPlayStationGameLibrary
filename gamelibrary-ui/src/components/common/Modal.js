import React from 'react';
import { Modal as AntModal } from 'antd';

const Modal = ({ title, visible, handleOk, onOkText, children }) => (
    <AntModal 
      title={title}  
      visible={visible}
      centered
      closable={false}
      okText={onOkText}
      onOk={() => handleOk(false)}
      cancelButtonProps={{ style: { display: 'none' } }}
     >
      {children}
    </AntModal>
  );

export default Modal;