import React from 'react';
import { Modal as AntModal } from 'antd';

const Modal = ({ title, visible, children }) => (
    <AntModal title={title}  visible={visible} >
        {children}
    </AntModal>
  );

export default Modal;