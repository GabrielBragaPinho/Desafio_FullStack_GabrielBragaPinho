import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export const Home = () => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-between px-[20px]">
            <Header />
                <div className="flex justify-between gap-[80px] px-[40px] ">
                <div className="flex flex-col items-start justify-between gap-[40px] w-[580px] h-[750px]">
                    <div className="relative flex flex-col items-center gap-[40px] w-[580px] h-[350px] border border-green3 bg-greenbg">
                        <h1 className="h1Y">CAPSULE DATABASE</h1>
                        <p className="pCenter">CAPSULE IS A PRAGMATIC DATABASE PLATFORM DESIGNED FOR SYSTEMATIC CONTACT MANAGEMENT. CRAFTED TO FULFILL THE REQUIREMENTS OF STORING AND RETRIEVING CONTACT INFORMATION.</p>
                        <p className="flareLeft">// BI-64-72-11</p>
                    </div>
                <div className="relative w-[580px] h-[260px] border border-green3 text-[13px] p-[10px]"><p className="text-rmred">// DATABASE ACCESS REQUIRED_</p><p className="flareRight">// HL.PR.RF_03</p></div>
                </div>
                <div className="relative w-[580px] h-[750px] border border-green3 text-[13px] p-[10px]"><p className="text-rmred">// DATABASE ACCESS REQUIRED_</p><p className="flareCenter">HSV//LOG-DATA-Q32-788-124</p></div>
                    <div className="w-[580px] h-[750px] flex flex-col items-center justify-between">
                        <div className="relative w-[580px] h-[250px] border border-green3 text-[13px] p-[10px]"><p className="text-rmred">// DATABASE ACCESS REQUIRED_</p><p className="flareLeft">// ST-78</p></div>
                        <div className="relative w-[580px] h-[370px] border border-green3 text-[13px] p-[10px]"><p className="text-rmred">// DATABASE ACCESS REQUIRED_</p><p className="flareLeft">// PP-45-72-84</p></div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};