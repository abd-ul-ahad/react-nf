import React from 'react';
import { Footer, Div } from 'react-nf'

const Footer1 = () => {
    return (
        <>
            <Footer variant={'column'}>
                <Footer.Div variant={'column'}>
                    <Footer.Brand>Developers</Footer.Brand>
                    <Footer.List>
                        <Footer.Item>Twitter</Footer.Item>
                        <Footer.Item>LinkedIn</Footer.Item>
                    </Footer.List>
                </Footer.Div>
                <Footer.Div>
                    <Div content="flex-start">
                        <Footer.Text>Copyright &copy; Developers</Footer.Text>
                    </Div>
                        <Footer.List content="flex-end">
                            <Footer.Item>Home</Footer.Item>
                            <Footer.Item>About</Footer.Item>
                        </Footer.List>
                </Footer.Div>
            </Footer>
        </>
    )
}

export default Footer1