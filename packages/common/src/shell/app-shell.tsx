import { SidebarProvider, SidebarTrigger } from '@repo/ui/components/sidebar'
import { ReactNode } from 'react'

import { AppSidebar } from '@repo/common/components/app-sidebar'

const AppShell = ({
	children,
}: Readonly<{ children: ReactNode }>): ReactNode => {
	return (
		<SidebarProvider>
			<AppSidebar />

			<main>
				<SidebarTrigger />

				{children}
			</main>
		</SidebarProvider>
	)
}

export default AppShell
