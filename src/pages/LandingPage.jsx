import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import EthLogo from "../assets/eth-title.png";

export default function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-[#F22B37] hero-bg flex flex-col items-center px-4">
            {/* 2024 Archive Website */}
            <div className="bg-black inline-flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10 rounded-[23px] px-4 sm:px-6 py-2 sm:py-3 font-poppins cursor-pointer hover:scale-105 transition-transform mt-6 sm:mt-10">
                <a href="https://ethmumbai.in">
                    <span className="text-white font-medium text-base sm:text-lg md:text-xl">
                        Visit ETHMumbai 2024
                    </span>
                </a>
                <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 scale-x-150" />
            </div>

            {/* Main White Box */}
            <div className="flex-1 flex items-start justify-center w-full mt-20 sm:mt-10 sm:mb-10">
                <div
                    className="
          bg-white border-[6px] sm:border-[10px] md:border-[13px] rounded-[14px] border-black 
          w-full max-w-[1003px] h-auto 
          flex flex-col items-center justify-center
          gap-12 sm:gap-16 md:gap-[112px]   
          p-8 sm:p-9 md:p-14
        "
                >
                    {/* ETHMumbai 2026 Title */}
                    <img
                        src={EthLogo}
                        alt="ETHMumbai 2026"
                        className="w-[240px] sm:w-[320px] md:w-[460px] h-auto object-contain mb-6 sm:mb-0"
                    />

                    <Link to="/tickets">
                        <button className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-black">
                            Get Tickets
                        </button>
                    </Link>

                    {/* Social Buttons */}
                    <div
                        className="
            flex flex-col sm:flex-row 
            gap-2 sm:gap-[18px] md:gap-[28px]   /* tighter vertical gap on mobile */
            mt-2 sm:mt-0                       /* extra spacing below logo only on mobile */
          "
                    >
                        <a
                            href="https://x.com/ethmumbai"
                            className="flex justify-center items-center px-6 sm:px-8 md:px-[44px] py-3 sm:py-4 gap-2 sm:gap-[14px] bg-black rounded-[32px] font-londrina text-white text-lg sm:text-2xl md:text-[32px] leading-[0.8] w-full sm:w-auto"
                        >
                            X (Twitter)
                        </a>
                        <a
                            href="https://farcaster.xyz/~/channel/ethmumbai"
                            className="flex justify-center items-center px-6 sm:px-8 md:px-[44px] py-3 sm:py-4 gap-2 sm:gap-[14px] bg-black rounded-[32px] font-londrina text-white text-lg sm:text-2xl md:text-[32px] leading-[0.8] w-full sm:w-auto"
                        >
                            Farcaster
                        </a>
                        <a
                            href="https://t.me/ethmumbai"
                            className="flex justify-center items-center px-6 sm:px-8 md:px-[44px] py-3 sm:py-4 gap-2 sm:gap-[14px] bg-black rounded-[32px] font-londrina text-white text-lg sm:text-2xl md:text-[32px] leading-[0.8] w-full sm:w-auto"
                        >
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
