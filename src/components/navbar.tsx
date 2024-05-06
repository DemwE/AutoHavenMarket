'use client'
import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button
} from "@nextui-org/react";

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarBrand>
					<a href="/">
						<h1 className="text-3xl">AutoHaven</h1>
					</a>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="/#" className="font-medium">
						1
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/#About" className="font-medium">
						2
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/#Contact" className="font-medium">
						3
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<Button
					as={Link}
					color="primary"
					variant="solid"
					href="/login"
				>Login</Button>
				<Button
					as={Link}
					color="danger"
					variant="solid"
					href="/logout"
				>Login</Button>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
			</NavbarContent>
			<NavbarMenu className="z-[9999]">
				<NavbarMenuItem>
					<Link color="foreground" href="/#" className="text-xl">
						1
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link color="foreground" href="/#About" className="text-xl">
						2
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link color="foreground" href="/#Contact" className="text-xl">
						3
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link color="foreground" className="text-xl" href="/#Parts">
						4
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link color="foreground" className="text-xl" href="/#Realizations">
						5
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
}