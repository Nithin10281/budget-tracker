import { Header } from "../../components/header";

type Props ={
    children: React.ReactNode;
};

const DashbaordLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="px-3 lg:px-14">
                {children} 
            </main>
        </>
    )   
}

export default DashbaordLayout;
