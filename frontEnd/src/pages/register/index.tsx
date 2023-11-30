import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export const Register = () => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-between px-[20px]">
            <Header />
                <div className="flex justify-between gap-[80px] px-[40px] ">
                <div className="flex flex-col items-start justify-between gap-[40px] w-[580px] h-[750px]">
                    <div className="relative flex flex-col items-center gap-[40px] w-[580px] h-[350px] border border-green3 bg-greenbg">
                        <h1 className="text-white text-[17px] font-bold font-inter pt-[40px] px-[30px]">CAPSULE CORPORATION is happy to store your information, please procced with the form completion.</h1>
                        <p className="absolute top-[-25px] left-0 text-[11px] text-green5">// BI-64-72-11</p>
                    </div>
                <div className="relative w-[580px] h-[260px] border border-green3 text-[13px] p-[10px] hover:bg-greenbg"><p className="absolute top-[-25px] right-0 text-[11px] text-green5">// HL.PR.RF_03</p></div>
                </div>
                <div className="relative w-[950px] h-[750px] border border-green3 text-[13px] p-[10px] hover:bg-greenbg"><p className="absolute top-[-25px] left-0 text-[11px] text-green5">SSA//REG-DATA-U75-889-422</p></div>
                </div>
            <Footer />
        </div>
    );
};