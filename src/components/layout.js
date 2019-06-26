import React from 'react';
import styled from 'styled-components';
import Theme from './theme';
import Header from './header';
import Footer from './footer';

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const SiteMain = styled.div`
  flex-grow: 1;
`

const SiteContent = styled.div`
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.screen.tablet}) {
    margin: 0 auto;
    max-width: ${props => props.theme.options.contentWidth};
    }
`

const Layout = (props) => {
    return (
      <Theme>
          <SiteContainer>         
              <SiteMain>
                  <Header />
                  <SiteContent>
                      {props.children}
                  </SiteContent> 
              </SiteMain>
              <Footer />
          </SiteContainer>
      </Theme>
    )
}

export default Layout