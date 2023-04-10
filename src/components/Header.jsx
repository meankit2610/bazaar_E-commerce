import React from "react";
import { cart, logoDark } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)
  console.log("info",userInfo)
  console.log(productData.length)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={logoDark} alt="" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Home
              </li>
            </Link>

            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cart} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAw1BMVEX////mfiK9w8fTVACVpabQQwDVWAruw7R+i4y5wMTldgDAxsrSUQDFy87ldADVUADlehTkeR/19vbZ3d/O09bn6evt7/DRSACRqKuMm5yFk5TfbxnZYg/g4+Wmr7KTn6FzgoP56uLlnH3JXzLloIXUVxizi3jxw6edoJz65dfqkk/MakHwto7CdlP88uy6gGaomIyvkYD328vrml71zbLtpXLkbADuqn/rnGfdg2fhlH7rtZ/ONgDdg1/XZjjz1MvnhTaiTqpRAAAEM0lEQVRoge2ZaXeqMBCGy6JXBcU9KAqtS10q1Np9u+3//1U3YXEFk2BGzz2H90NPDxWfN5OZIUyvrjJlypQpE6/q9Xar1WrX65dg95tluRhILjf75/XQL2PqtorFcv9s9MYePLLQOAu9pcXRfQdyCx7fTKL7DprA9Hri4kMDGmgito7TfQeAe8CAhzTQZsFjA20YfJ0NjwWTA2VWvFyGwDeYly9DdCLGzQ8NiE+BMhdfeB/iWj5AAI623TMEgA+PDYjFcyR/yBd7HGCv/UhCewB769sEQGQT5Mx+ny+yAri3X3APbHLjZVlkBfKnn9gEzPgZ/5L8S9ffpfsP08F/jy/yNeDSz59LP39TnD/EHsG5N0Bs+Pk3QPQr0KXP35wBEP8G2ObiA7yCc7yBwIyBNGa+BoFnr0HRtReJ8SkANwDqM82fAAexDAYg8aQKKfNHiMrbVp0yf4WfwzfkpELUZPgJeKvodG0tzoGm2V0HcvpKgu9cF7C6dnHPgqYV7S7507UDtgU3g6Gqqj6lUOjYRQwNJRftTnC5iz8xHNwA0L3RGKFbU1U7oYNCt+M4tm07ztYVVTVvERqPPNH4yRgpijKe4vVtHOyK0FV1OsafQ+OJUPpsXlGIjDtTVWMtBHC8/DvD/2RlPhOHX1SqUi0w4IYGiIdON1Cns75mugG+JlUrC0F0b16SsHq6b+B+Y+BQ5r2P13vkhtJcSBaspKrkK6/QDIR4JR/cUJVWp+OfSiE+3AGyBfEOzCj4OPqhgdLTqfhFRVqrpgcGxss4A+ZyHOD12uaWU5NgUZK2FEZAN9zpXgxMc+oa+u7qfZVOMrC9et9APgqBu1TXFvAvSzdafL62e8spEZjs4TcGFMMYug84CljTB3dohDt/gMcGUreiQ/y6DP1dMBAyFPLDWF/rxdyR1sCqFPNlWyE4UMzigxxIVYZeNfbLsKxYB3reSrqhmqYRPSbysYOevmNBx5FPpGP+Iz8+dvM3qlm9vB4p37PiIx+JPwVmR1a/MVGzLKt2HB1GgPdpOGfhs6s658NP4nM/vUp8OyAajw3w4BcAfI4+7InHYwPsTQBg+TwB8H4B8JL0yxqAp+OtJ60qrIchwbUfibUHMLW+VAbYmiBI9hExZiAQnYgp/FDLxwFg2QDhrX+Lz/IQeIZKP5yAzwx8MDoRHe+9AOJf6C1wBdP8AlXoJ2Gw6idi6ACvcOmHE/CVyn8D5b9R+YDlx1SAC1A+ff8vnX8j0PWPqPx30P7zTufrgHydzv9AcTMEMeqhDyr/Mxc7xBCC13OfVL73lTjHOE1kbvLFcAT/Nsgch/JCzw23yNzI+Kbjr2Zk0K7rSl6kFH9egpgOwKNcwnzpVOXo1e9rAGMgN2DD4xpAKGnGllY6QvTcX8sb/EU5kUJ/B3wzOG/280ecfmbC/yGVKVOmTP+5/gEAem0uWPMQ/gAAAABJRU5ErkJggg=="
              }
              alt="userLogo"
            />
          </Link>
          {userInfo && <p className="text-base font-titleFont underline underline-offset-2">{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
