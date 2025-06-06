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
			<header className="sticky flex justify-center md:px-6 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 px-5 items-center">
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
					<Link
						href="/emmanuel-adatsi-resume.pdf"
						download="Emmanuel_Adatsi_Resume.pdf"
						className="ml-auto"
						aria-label="Download resume"
					>
						<Button variant="outline" className="ml-auto">
							My Resume
						</Button>
					</Link>
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
								<p className="mx-auto max-w-[1200px] text-gray-500 md:text-xl dark:text-gray-400">
									Welcome to my digital workspace, a showcase of my journey as a developer. This portfolio represents
									not just my technical skills, but my approach to problem-solving and design thinking. This site
									features a curated collection of my projects, demonstrating my proficiency in front-end and backend
									development and my ability to create responsive, intuitive user experiences. Each project includes
									detailed descriptions, the technologies used, and links to both live demos and source code. Beyond
									showcasing my work, this portfolio highlights my development process—from initial concept to final
									implementation. Whether you're a potential employer, collaborator, or fellow developer, I invite you
									to explore my work and reach out through the contact section to discuss potential opportunities or
									just connect over our shared passion for development. Thank you for visiting, and I look forward to
									the possibility of working together on future projects.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="projects" className="py-12 md:py-24 lg:py-28">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<ProjectCard
								title="Equipment Management"
								description="A real-time equipment management application."
								image="https://res.cloudinary.com/dmpr6jett/image/upload/f_auto,q_auto/v1/Stock/cbik8cs189gnp64htqoe"
								link="https://github.com"
								website="https://equipment-tracker-9hlb.vercel.app"
								tags={["React", "TailwindCSS", "Node.js", "Express", "MongoDB"]}
							/>
							<ProjectCard
								title="Tip Calculator"
								description="A small application that allows users to be able to keep track and calculate tips"
								image="https://res.cloudinary.com/dmpr6jett/image/upload/f_auto,q_auto/v1/Stock/n4myprqz9wdknyiwyufu"
								link="https://github.com"
								website="https://react-tip-calculator-virid.vercel.app/"
								tags={["React", "MySQL", "TailwindCSS", "Python"]}
							/>
							<ProjectCard
								title="Super Patty"
								description="A simple takeaway website with a menu and order form."
								image="https://res.cloudinary.com/dmpr6jett/image/upload/v1744039657/Stock/dccvbe88uuarjo6xo4kt.png"
								website="https://superp.vercel.app"
								link="https://github.com"
								tags={["React", "TailwindCSS"]}
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
