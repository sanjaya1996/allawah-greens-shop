import React, { useState } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';

const CategoryNav = () => {
  const [showCategories, setShowCategories] = useState(false);
  return (
    <>
      <Dropdown
        onClick={() => setShowCategories((prevstate) => !prevstate)}
        style={{ marginBottom: '1em' }}
      >
        <Dropdown.Toggle
          variant='success'
          id='dropdown-basic'
          style={{ background: '#178841', border: 'none' }}
        >
          Browse Groceries
        </Dropdown.Toggle>

        {showCategories && (
          <Nav
            activeKey='/home'
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            style={{ background: '#125430' }}
          >
            <Nav.Item>
              <Nav.Link href='/home' style={{ color: '#a5c84d' }}>
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-1' style={{ color: '#a5c84d' }}>
                Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2' style={{ color: '#a5c84d' }}>
                Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' style={{ color: '#a5c84d' }}>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )}
      </Dropdown>
    </>
  );
};

export default CategoryNav;
