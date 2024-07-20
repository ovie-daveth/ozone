import React from 'react'
import {FooterComponent} from "../Footer"
import Wrapper from './Wrapper';

type Prop = {
    children: React.ReactNode;
}
const PageWrapper = ({
    children
}: Prop) => {
  return (
    <Wrapper>
        <div>
            {children}
        </div>
        <FooterComponent />
    </Wrapper>
  )
}

export default PageWrapper