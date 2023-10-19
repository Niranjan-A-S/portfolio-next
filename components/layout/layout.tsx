import { FC, Fragment, memo } from "react";
import { ILayoutProps } from "@/types/component-props";
import { MainNavigation } from "./main-navigation";

export const Layout: FC<ILayoutProps> = memo(({ children }) => <Fragment>
    <MainNavigation />
    <main>{children}</main>
</Fragment>
)