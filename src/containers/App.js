import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from '../routes'
import { Button, NavigationDrawer, FontIcon } from 'react-md'


class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { history } = this.props
    const { visible, page, renderNode } = this.state
    const toolbarActions = <div></div>

    return (
      <div className="App">
        <NavigationDrawer
          navItems={[]}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
          tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
          toolbarTitle="BIFROST"
          contentId="main-bifrost-content"
          temporaryIcon={<FontIcon>menu</FontIcon>}
          persistentIcon={<FontIcon>chevron_left</FontIcon>}
          contentClassName="md-grid"
          toolbarId="bifrost-toolbar"
          toolbarZDepth={0}
          toolbarThemeType="default"
          toolbarActions={toolbarActions}
          drawerId="bifrost-main-drawer"
          drawerZDepth={0}
          miniDrawerStyle={{boxShadow:'none'}}
        >
          <ConnectedRouter history={history}>
              { routes }
          </ConnectedRouter>
        </NavigationDrawer>
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
