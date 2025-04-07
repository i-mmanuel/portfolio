import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	link: string;
	website?: string;
	tags: string[];
}

export default function ProjectCard({ title, description, image, link, tags, website }: ProjectCardProps) {
	return (
		<Card className="overflow-hidden flex flex-col h-full">
			<div className="relative aspect-video">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover transition-transform hover:scale-105"
				/>
			</div>
			<CardContent className="p-4 flex-grow flex flex-col">
				<h3 className="font-semibold text-xl mb-2">{title}</h3>
				<p className="text-sm text-muted-foreground mb-4">{description}</p>
				<div className="flex flex-wrap gap-2">
					{tags.map(tag => (
						<span
							key={tag}
							className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
						>
							{tag}
						</span>
					))}
				</div>
			</CardContent>
			<CardFooter className="p-4 pt-0">
				<Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
					<Github className="h-4 w-4" />
					View on GitHub
				</Link>
				{website && (
					<Link href={website} target="_blank" className="inline-flex items-center ml-4 gap-2 text-sm hover:underline">
						<Globe className="h-4 w-4" />
						View on online
					</Link>
				)}
			</CardFooter>
		</Card>
	);
}
