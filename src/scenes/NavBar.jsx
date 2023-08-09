import React, { useState } from "react";
import useMediaQuery from "../Hooks/userMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { flexBetweenFull } from "../Hooks/useStyling";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Link = ({ Page, SelectedPage, setSelectedPage }) => {
  const lowerCasePage = Page.toLowerCase();
  // TODO:----this's click go to path-----//
  return (
    <AnchorLink
      className={`${
        SelectedPage === lowerCasePage ? " text-blue" : ""
      } hover:text-blue transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() =>
        setSelectedPage(lowerCasePage)
      }
    >
      {Page}
    </AnchorLink>
  );
};

export const NavBar = ({ SelectedPage, setSelectedPage }) => {
  const IsBigMedia = useMediaQuery("(min-width: 768px)");
  const [IsToggleMenu,setIsToggleMenu] = useState(false)

  return (
    <section className="shadow-md dark:bg-gray-900">
      <nav style={flexBetweenFull} className="py-4 w-[87%] mx-auto">
        <h2>__said__</h2>
        <article>
          {IsBigMedia ? (
            <div className="space-x-6">
              <Link
                Page={"Home"}
                SelectedPage={SelectedPage}
                setSelectedPage={setSelectedPage}
                onClick={() =>  setIsToggleMenu(!IsToggleMenu)}
              />

              <Link
                Page={"Skills"}
                SelectedPage={SelectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                Page={"Projects"}
                SelectedPage={SelectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                Page={"Contact"}
                SelectedPage={SelectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <div>
              <button onClick={() => setIsToggleMenu(!IsToggleMenu)}>
                <AiOutlineMenuUnfold />
              </button>
              {/* menu popup */}
              {IsToggleMenu && !IsBigMedia &&(
                 <div className="fixed flex justify-end inset-0 backdrop-blur-sm h-full z-40">
              <button onClick={() => setIsToggleMenu(!IsToggleMenu)} className="absolute top-6 right-6 rounded-full shadow-md p-3 z-50">
                    <AiOutlineClose size={20} />
                </button>
                <nav
                  className="flex items-center relative right-0 text-lg pt-16 space-y-12 flex-col h-full w-[100%] max-w-[350px] rounded-tl-lg bg-gray-100 dark:bg-gray-900"
                >
                  
             
                    <Link
                      Page={"Home"}
                      SelectedPage={SelectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      Page={"Skills"}
                      SelectedPage={SelectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      Page={"Projects"}
                      SelectedPage={SelectedPage}
                      setSelectedPage={setSelectedPage}
                    />

                    <Link
                      Page={"Contact"}
                      SelectedPage={SelectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                
                </nav>
              </div>
              )}
             
            </div>
          )}
        </article>
      </nav>
    </section>
  );
};
