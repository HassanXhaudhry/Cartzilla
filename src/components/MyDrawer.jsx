import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';

const MyDrawer = ({ isOpen, closeDrawer }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  }, [isOpen]);

  return (
    <Drawer
      closable
      destroyOnClose
      title="Loading Drawer"
      placement="right"
      visible={isOpen} 
      onClose={closeDrawer} 
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default MyDrawer;
