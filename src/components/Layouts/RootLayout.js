import { Layout, Menu } from "antd";
const { Content } = Layout;
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
    return (
        <Layout>
            <Navbar />
            <Content
                style={{
                    padding: "0 24px",
                    minHeight: "100vh",
                }}
            >
                {children}
            </Content>
            <Footer />
        </Layout>
    );
};
export default RootLayout;