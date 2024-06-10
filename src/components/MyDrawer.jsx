import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';

const MyDrawer = ({ isOpen, closeDrawer }) => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      closeDrawer(); 
    }, 2000);
  };
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
      visible={isOpen} // Use the isOpen prop to control visibility
      onClose={closeDrawer} // Use the closeDrawer function to handle close event
    >
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={showLoading}
        loading={loading}
      >
        {loading ? 'Loading...' : 'Reload'}
      </Button>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default MyDrawer;
