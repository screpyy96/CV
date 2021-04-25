import React, { useEffect, useState } from "react";
import Icon from "../icomoon/IcoMoon.component";
import { MenuWrapper, MenuLink, Hover, CloseMenu } from "./menu.styled";

const Menu = () => {
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const getResults = async () => {
        const result = await (await fetch("http://localhost:5000/menu")).json();
        setData(result);
      };
      getResults();
    } catch (error) {
      console.log("nu merge useEffect", error);
    }
  }, []);

  const toggleButton = () => {
    setIsOpen((value) => !value);
  };

  return (
    <>
      <MenuWrapper onClick={toggleButton}>
        <Icon icon="menu" size="25" color="black" />
      </MenuWrapper>

      <MenuLink isOpen={isOpen}>
        {data?.linksMenu?.map((item) => {
          return (
            <div>
              <Hover href={item.link}>
                {item.title}

                <CloseMenu onClick={toggleButton}>
                  <Icon
                    style={{ marginRight: "70px" }}
                    icon={item.icon}
                    size="30"
                    color="black"
                  />
                  {item.titleClose}
                </CloseMenu>
              </Hover>
            </div>
          );
        })}
      </MenuLink>
    </>
  );
};

export default Menu;
