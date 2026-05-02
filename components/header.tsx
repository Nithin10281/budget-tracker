// import { HeaderLogo } from "@/components/header-logo"
// import { Loader2 } from "lucide-react"
// import { Navigation } from "@/components/navigation"
// import { UserButton, ClerkLoading, ClerkLoaded  } from "@clerk/nextjs"
// import { WelcomeMsg } from "@/components/welcome-msg"
// import { Filters } from "@/components/filters"

// export const Header = () => {
//     return (
//         <header className="bg-gradient-to-b from-blue-500 to-blue-800 px-4 py-8 lg:px-14 pb-36">
//             <div className="max-w-screen-2xl mx-auto">
//                 <div className="w-full flex items-center justify-between mb-14">
//                     <div className="flex items-center lg:gap-x-16">
//                         <HeaderLogo />
//                         <Navigation />
//                     </div>
//                     <ClerkLoaded>
//                         <UserButton afterSignOutUrl="/" />
//                     </ClerkLoaded>
//                     <ClerkLoading>
//                         <Loader2 className="size-8 animate-spin text-slate-100" />
//                     </ClerkLoading>
//                 </div>
//                 <WelcomeMsg />
//                 <Filters />
//             </div>
//         </header>
//     );
// };










import { HeaderLogo } from "@/components/header-logo"
import { Loader2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs"
import { WelcomeMsg } from "@/components/welcome-msg"
import { Filters } from "@/components/filters"
import ThemeSwitcher from "@/components/theme-switcher" // Import your theme switcher

export const Header = () => {
    return (
        <header className="bg-gradient-to-b from-[#0049B7] to-[#ff1d58] px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    
                    {/* Add the Theme Switcher here */}
                    <div className="flex items-center gap-x-4">
                        <ThemeSwitcher /> {/* Place it next to the user button or wherever you prefer */}
                        <ClerkLoaded>
                            <UserButton afterSignOutUrl="/" />
                        </ClerkLoaded>
                        <ClerkLoading>
                            <Loader2 className="size-8 animate-spin text-slate-100" />
                        </ClerkLoading>
                    </div>
                </div>

                <WelcomeMsg />
                <Filters />
            </div>
        </header>
    );
};
