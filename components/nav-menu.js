import React from "react";
import { Menu } from "antd";

const NavMenu = ({ items, selectedKey, changeSelectedKey }) => {
    const styledTopics = [];
    items.forEach((item, index) =>
        styledTopics.push(
            <Menu.Item key={index} onClick={changeSelectedKey}>
                {item}
            </Menu.Item>
        )
    );

    return (
        <Menu mode="inline" selectedKeys={[selectedKey]}>
            {styledTopics}
        </Menu>
    );
}
export default NavMenu;