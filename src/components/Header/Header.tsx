import React, { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import { logout, toggleSideNav } from "src/App/App.actions"
import { useHistory } from "react-router-dom"
import { LogoutIcon } from "./Header.styles"
import { PATH } from "src/constants/paths"

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  logout,
  toggleSideNav
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> {}

const HeaderMain = (props: Props) => {
  const { logout } = props
  const history = useHistory()
  const handleLogout = () => {
    logout()
    history.push(PATH.LOGIN)
  }
  useEffect(() => {}, [history])

  return (
    <header className="d-flex bg-light justify-content-between p-3 shadow-sm">
      <div>WEB BASE</div>
      <LogoutIcon onClick={handleLogout} className="btn btn-outline-secondary">
        Logout
      </LogoutIcon>
    </header>
  )
}

export default connector(HeaderMain)
