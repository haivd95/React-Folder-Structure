import React, { ReactNode, useState } from "react"
// import Header from "src/components/Header/Header"
// import { connect, ConnectedProps } from "react-redux"
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Breadcrumb, Layout, Menu, theme } from "antd"
import HeaderMain from "src/components/Header/Header"
import { Logo } from "../components/SideNav/SideNav.styles"
import { Link } from "react-router-dom"
interface Props {
  children: ReactNode
}

const { Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem("Navigation One", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />),
  getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6")
    ])
  ]),
  getItem("Navigation Three", "sub2", <SettingOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10")
  ]),
  getItem(<Link to={"/product"}>My Profile</Link>, "link", <LinkOutlined />)
]

export default function MainLayout(props: Props) {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <Link to={"/"}>
            <Logo>
              <div>
                <i className="fa fa-superpowers" aria-hidden="true"></i>
              </div>
            </Logo>
          </Link>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <HeaderMain />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer
              }}
            >
              <div className="content mt-3 p-3">{children}</div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    </div>
  )
}
