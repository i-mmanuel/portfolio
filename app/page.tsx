import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
	return (
		<div className="min-h-screen bg-background">
			<header className="sticky flex justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 items-center">
					<div className="mr-4 md:flex">
						<Link className="mr-6 flex items-center space-x-2" href="/">
							<span className="font-bold sm:inline-block">¡mmanue!•dev</span>
						</Link>
						<nav className="flex items-center space-x-6 text-sm font-medium md:flex ">
							<Link href="#about" className="transition-colors hover:text-foreground/80">
								About
							</Link>
							<Link href="#projects" className="transition-colors hover:text-foreground/80">
								Projects
							</Link>
							<Link href="#contact" className="transition-colors hover:text-foreground/80">
								Contact
							</Link>
						</nav>
					</div>
					<Button variant="outline" className="ml-auto" asChild>
						<a href="/emmanuel_adatsi_resume.pdf" download>
							Resume
						</a>
					</Button>
				</div>
			</header>

			<main className="mx-auto w-full container items-center px-4 md:px-6">
				<section id="about" className="py-12 md:py-24 lg:py-28">
					<div className="container flex flex-col items-center px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Emmanuel Adatsi
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									Building digital experiences with modern technologies. Focused on creating elegant solutions to
									complex problems.
								</p>
							</div>
							<div className="space-x-4">
								<Link href="https://github.com/i-mmanuel" target="_blank">
									<Button variant="outline" size="icon">
										<Github className="h-4 w-4" />
										<span className="sr-only">GitHub</span>
									</Button>
								</Link>
								<Link href="mailto:emmanuel.jnr@outlook.com">
									<Button variant="outline" size="icon">
										<Mail className="h-4 w-4" />
										<span className="sr-only">Email</span>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section id="projects" className="py-12 md:py-24 lg:py-28">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<ProjectCard
								title="Tip Calculator"
								description="A small application that allows users to be able to keep track and calculate tips"
								image="https://res.cloudinary.com/dmpr6jett/image/upload/f_auto,q_auto/v1/Stock/n4myprqz9wdknyiwyufu"
								link="https://github.com"
								website="https://react-tip-calculator-virid.vercel.app/"
								tags={["React", "LocalStorage API"]}
							/>
							<ProjectCard
								title="Equipment Management"
								description="A real-time equipment management application."
								image="https://res.cloudinary.com/dmpr6jett/image/upload/f_auto,q_auto/v1/Stock/cbik8cs189gnp64htqoe"
								link="https://github.com"
								website="i-mmanuel-v-portfolio-dun-rho.vercel.app"
								tags={["React", "TailwindCSS", "SQL"]}
							/>
							<ProjectCard
								title="Takeaway Website"
								description="A simple takeaway website with a menu and order form."
								image="https://res.cloudinary.com/dmpr6jett/image/upload/v1744039657/Stock/dccvbe88uuarjo6xo4kt.png"
								link="https://github.com"
								tags={["OpenAI", "Next.js", "TailwindCSS"]}
							/>
						</div>
					</div>
				</section>

				<section className="py-12 md:py-24 lg:py-28">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
							Tech Stack
						</h2>
						<TechStack />
					</div>
				</section>

				<section id="contact" className="py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="mx-auto">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
								Get in Touch
							</h2>
							<ContactForm />
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t flex justify-center">
				<div className="container flex flex-col gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6">
					<div className="flex w-full items-center justify-between">
						<p className="text-xs text-gray-500 dark:text-gray-400">© ¡mmanue!•dev. All rights reserved.</p>
						<ThemeToggle />
					</div>
				</div>
			</footer>
		</div>
	);
}
