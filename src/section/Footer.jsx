import React from 'react'
export const Footer = ()=>{
    return(
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms and Conditions</p>
                <p>Private Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a  href="https://www.linkedin.com/in/punit-chawla-91b186241"  target = '_blank' className="flex jusfity-center">
                      <img src="/assets/linkedIn_PNG8.png" alt="github"  className="w-full h-full " />
                    </a>
                </div>
                <div className="social-icon">
                    <a  href="https://github.com/PunitChawla"  target = '_blank' className="flex jusfity-center">
                      <img src="/assets/github.svg" alt="github"  className="w-full h-full " />
                    </a>
                </div>
                <div className="social-icon">
                    <a  href="https://leetcode.com/Punit_chawla/"  target = '_blank' className="flex jusfity-center">
                      <img src="/assets/LeetCode_logo.png" alt="github"  className="w-full h-full " />
                    </a>
                </div>
            </div>
            <p className="text-white-500">
                @ 2024 Punit.  All rights Reserved
            </p>
        </section>
    )
}